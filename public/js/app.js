var name = getQueryVariable('name') || 'whos mans';
var room = getQueryVariable('room') || 'no name room';
var socket = io();

console.log (name + "joined " + room);

jQuery('.room-title').append('<h1>' + room + '</h1>')

socket.on('connect', function() {
	console.log("connected to socket.io server from the front.");

	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function(message) {
	var timestamp = moment.utc(message.timestamp);
	var $messages = jQuery('.messages');
	var $message = jQuery('<li class="list-group-item"></li>');

	console.log("New message");
	console.log(message.text);

	$message.append('<p><strong>' + timestamp.local().format('h:mm a') + '</strong> ' + message.name + ': </p>')
	$message.append('<p>' + message.text + '</p>')
	$messages.append($message);
});

//handles submitting a new message 
var $form = jQuery('#message-field');
var message = $form.find('input[name=message]');

$form.on('submit', function(event){
	event.preventDefault();

	socket.emit('message', {
		name: name,
		text: message.val()
	});

	message.val('');

});