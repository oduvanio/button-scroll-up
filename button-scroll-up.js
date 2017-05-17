$(document).ready(function() {
	var divButtonScrollUp = document.createElement('div');
	divButtonScrollUp.className = "button-scroll-up";
	divButtonScrollUp.innerHTML = "/\\ Наверх";
	document.body.appendChild(divButtonScrollUp);
	window.onscroll = function() {
		if(window.pageYOffset > 300) {
			divButtonScrollUp.style.display = 'block';
		} else {
			divButtonScrollUp.style.display = 'none';
		}
	}
	var t;
	divButtonScrollUp.onclick = buttonScrollUp;
});
function buttonScrollUp() {
	if(window.pageYOffset > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('buttonScrollUp()',20);
	} else {
		clearTimeout(t);
	}
	return false;
}
