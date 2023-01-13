//Ball variables
let xBall = 300;
let yBall = 200;
let dBall = 20;
let rBall = dBall / 2;
let position = [50,100,150,200,250,300,350]

//Speed variables
let speedxBall = 5;
let speedyBall = speedxBall;
let direction = [speedxBall,speedyBall*-1];

function begin(){
  xBall = 300;
  //left random begin direction and position
  yBall = random(position);
  speedxBall = random(direction);
  speedyBall = random(direction);
  
}

function showBall(){
  stroke(color(255,165,0))
  fill(color(255,165,0));
  circle(xBall, yBall, dBall);  
}

function moveBall (){
   xBall += speedxBall;
   yBall += speedyBall;
}

function boardBall(){
  //recognize the board table game
  if (xBall + rBall > width || xBall - rBall < 0){
    speedxBall *= -1;
  }
  if (yBall + rBall > height || yBall - rBall < 0){
    speedyBall *= -1;
    TableM.play();
    
  }
}

function dontlockball(){
    if (xBall - rBall < 0){
    xBall = 23
    }
}