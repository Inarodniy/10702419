var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

c.fillStyle="#212121";
c.fillRect(0,0,canvas.width, canvas.height);
var paintColors = '#85324a';
var brushSize = 15;
var brushShape = 'circle';

var mouseDown = false;

addMouseListeners();

/*         выбор размера кисти   */
const input = document.getElementById('only_num');

input.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});

function onBlur(e){
     
  var text = input.value.trim();
  if(text==="")
      input.style.borderColor = "red";
  else{
    input.style.borderColor = "green";
    brushSize = e.target.value;
  }
      
}
input.addEventListener("blur", onBlur);
/*************************************************************/

/*выбор цвета кисти*/

function colorOnBlur(e){
    const colorPicker = document.getElementById('color_picker');
    colorPicker.style.borderColor = "green";

    paintColors = colorPicker.value;
   
}

/*************************************************************/


/*выбор формы кисти*/

function shapeOnBlur(e){
  var shapePicker = document.getElementById('list1');
  shapePicker.style.borderColor = "green";
  
  brushShape = shapePicker.value;
 
}

/*************************************************************/


function drawShape(x, y){
  if(brushShape == 'circle')
    {c.beginPath();
    c.arc(x, y, brushSize, 0, 2 * Math.PI);
    c.fill();}
    else if (brushShape == 'square'){
      c.beginPath();
      c.rect(x, y, brushSize*2, brushSize*2);
      c.fill();
    }
  }
 
  function addMouseListeners(){
    canvas.addEventListener('mousemove', function(e){
      if(mouseDown){
        c.fillStyle = paintColors; //в этой строке устанавливается цвет,которым будут отрисовываться круги
        drawShape(e.clientX, e.clientY);
      }
    });
     canvas.addEventListener('mousedown', function(e){
      mouseDown = true;
    });
     canvas.addEventListener('mouseup', function(e){
      mouseDown = false;
    });
     canvas.addEventListener('dblclick', function(e){
      c.fillStyle = 'black';
      c.fillRect(0,0,canvas.width, canvas.height);
    });
    canvas.addEventListener('mousedown', function(e){
        mouseDown = true;
      });
     
   
} 