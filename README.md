# Устанавливает кнопку “Вверх” на сайт, для прокрутки текущей страницы в начало

Javascript полкючается автоматически с помощью infrajs/config

Если не устраивает стандартный дизайн, то в корне проекта нужно создать папку button-scroll-up в которой создать файл button-scroll-up.json для конфигурации отображения кнопки.
Содержимое файла button-scroll-up.json может выглядеть следующим образом:
```
{
	"height":100,
	"width":100,
	"background": "rgba(255,255,255,0.9)",
	"backgroundHover": "rgba(255,255,255,0.7)",
	"left": 15,
	"bottom": 15,
	"borderRadius": 50,
	"color": "green",
	"textTop": 40,
	"textLeft": 30,
	"fontWeight": "bold",
	"letterSpacing": -1,
	"text": "Вверх",
	"icon": true,
	"iconClass": "sort-asc",
	"iconTop": 40,
	"iconLeft": 10,
	"iconSize": 20,
	"iconColor": "red"
}
```
```
height - высота кнопки
width - высота кнопки
background - цвет фона кнопки (необходимо устанавливать в формате rgba)
backgroundHover - цвет фона кнопки при наведении мыши (необходимо устанавливать в формате rgba)
left - отступ кнопки слева экрана
bottom - отступ кнопки снизу экрана
borderRadius - закругление краев кнопки (от 0 до 100)
color - цвет текста внутри кнопки (поддерживается любой формат указания цвета css)
textTop - отступ текста сверху внутри кнопки
textLeft - отступ текста слева внутри кнопки
fontWeight - толщина текста (поддерживает следующие значения: bold|bolder|lighter|normal|100|200|300|400|500|600|700|800|900)
letterSpacing - расстояние между буквами текста
text - необходимый текст внутри кнопки
icon - true/false (показывать ли иконку и библиотеки http://fontawesome.io/icons/)
iconClass - название иконки
iconTop - отступ иконки сверху внутри кнопки
iconLeft - отступ иконки слева внутри кнопки
iconSize - размер иконки
iconColor - цвет иконки
```
