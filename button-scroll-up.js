$(document).ready(function() {
	var data=Load.loadJSON('-button-scroll-up/button-scroll-up.json');
	var divButtonScrollUp = document.createElement('div');
	var textButtonScrollUp = document.createElement('span');

	if (data.icon) {
		var iFaIcon = document.createElement('i');
		iFaIcon.className = "fa fa-" + data.iconClass;
		iFaIcon.style.position = "absolute";
		iFaIcon.style.top = data.iconTop + "px";
		iFaIcon.style.left = data.iconLeft + "px";
		iFaIcon.style.fontSize = data.iconSize + "px";
		iFaIcon.style.color = data.iconColor;
		divButtonScrollUp.appendChild(iFaIcon);	
	}
	

	divButtonScrollUp.className = "button-scroll-up";
	divButtonScrollUp.appendChild(textButtonScrollUp);
	document.body.appendChild(divButtonScrollUp);
	window.onscroll = function() {
		if(window.pageYOffset > 300) {
			divButtonScrollUp.style.height = data.height + 'px'; // высота кнопки
			divButtonScrollUp.style.width = data.width + 'px'; // ширина кнопки
			divButtonScrollUp.style.background = data.background; // цвет фона
			divButtonScrollUp.style.left = data.left + 'px'; // отступ слева
			divButtonScrollUp.style.bottom = data.bottom + 'px'; // отступ снизу
			divButtonScrollUp.style.borderRadius = data.borderRadius + '%'; // закругления углов
			textButtonScrollUp.style.position = "absolute"; 
			textButtonScrollUp.style.color = data.color; // цвет текста
			textButtonScrollUp.style.top = data.textTop + 'px'; // отступ текста сверху
			textButtonScrollUp.style.left = data.textLeft + 'px'; // отступ текста слева
			textButtonScrollUp.style.fontWeight = data.fontWeight; // толщина текста
			textButtonScrollUp.style.letterSpacing = data.letterSpacing + 'px'; // расстояние между буквами
			textButtonScrollUp.innerHTML = data.text;
			divButtonScrollUp.onmouseover = function(){ this.style.backgroundColor = data.backgroundHover; }
			divButtonScrollUp.onmouseout = function(){ this.style.backgroundColor = data.background; }
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
