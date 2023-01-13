//Varible for know what page should be show
let screen = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if(screen==0){
    mainGame();
  }
  if(screen==1){
    SingleGame(); 
  }
  if(screen==2){
    MultiPlayerGame();
  }
}

var x = null;
var y = null;
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  console.log(x, y);
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}

console.log("By DevZilio")