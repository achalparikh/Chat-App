ScrollRate = 10;
bottomVal = 0;

function scrollDiv_init() {
	DivElmnt = document.getElementById('scroll');
	ReachedMaxScroll = false;
	
	DivElmnt.scrollTop = 0;
	PreviousScrollTop  = bottomVal;
	
	ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}

function scrollDiv() {
	
	if (!ReachedMaxScroll) {
		DivElmnt.scrollTop = PreviousScrollTop;
		PreviousScrollTop++;
		bottomVal = PreviousScrollTop;
		ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
	}
}
