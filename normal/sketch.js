//Ball variables
let xBall = 300;
let yBall = 200;
let dBall = 20;
let rBall = dBall / 2;
let position = [50,100,150,200,250,300,350]

//Speed variables
let speedxBall = 10;
let speedyBall = speedxBall;
let direction = [speedxBall,speedyBall*-1];

//Racket variables
let xRacket = 5
let yRacket = 150
let wRacket = 10
let hRacket = 90

//Racket IA variables
let xRacketIA = 585;
let yRacketIA = 150;
let wRacketIA = 10;
let hRacketIA = 90;
let speedRacketIA;
let ErrorChanceIA = [speedxBall+1,speedxBall,speedyBall-1]

//Score Game
let myscore = 0;
let oppscore = 0;

//Music Game
let RacketM;
let ScoreM;
let ThemeM;
let TableM;

function preload(){
  ThemeM = loadSound("theme.mp3");
  ScoreM = loadSound("score.mp3"); 
  RacketM = loadSound("racket.mp3");
  TableM = loadSound("table.mp3");
}

function setup() {
  createCanvas(600, 400);
  begin();
  ThemeM.loop();
}

function draw() {
  background(47,79,79);
  stroke(255);
  strokeWeight(2);
  line(300,0,300,400);
  showBall();
  moveBall();
  boardBall();
  showRacket(xRacket,yRacket);
  showRacket(xRacketIA,yRacketIA);
  moveRacket();
  moveRacketIA();
  touchRacket();
  touchRacketIA();
  score();
  getscore();

}

function begin(){
  xBall = 300;
  //left random begin direction and position
  yBall = random(position);
  speedxBall = random(direction);
  speedyBall = random(direction);

}

function showBall(){ circle(xBall, yBall, dBall)

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

function showRacket(x,y){
  rect(x, y, wRacket, hRacket)
}


function moveRacket(){
 // if (keyIsDown(UP_ARROW))
   // yRacket -= 10;

  //if (keyIsDown(DOWN_ARROW))
    //yRacket += 10;
 yRacket = mouseY;
}




function moveRacketIA(){
  //makes RacketIA move just the ball through the line 
  if (xBall > 300 && speedxBall > 0){
    //makes the racket move realistically and with variable speed to the ball
    if (yRacketIA != yBall){
      if (yRacketIA < yBall){
        yRacketIA += random(ErrorChanceIA);
      }
      else{
        yRacketIA += random(ErrorChanceIA) * -1;
      }
    }
  }

}


function touchRacket(){
  //recognize the touch
  if (xBall - rBall < xRacket + wRacket && yBall - rBall < yRacket + hRacket && yBall + rBall > yRacket){
    speedxBall *= -1;
    RacketM.play();
    }
}

function touchRacketIA() {
  //recognize the touch
  if (xBall + rBall > xRacketIA && yBall + rBall < yRacketIA + hRacketIA && yBall + rBall >   yRacketIA - wRacketIA){
    speedxBall *= -1; 
    RacketM.play();
  }
}


function score(){
  stroke(255);
  textAlign(CENTER);
  textSize(18);
  fill(color(255,140,0));
  square(125, 4, 48, 5);
  fill(255);
  text(myscore, 150,35);
  fill(color(255,140,0));
  square(425, 4, 50, 5);
  fill(255);
  text(oppscore, 450,35);
}

function getscore(){
  if (xBall > 590){
    myscore += 1;
    begin();
    ScoreM.play();
  }
  if (xBall < 10){
    oppscore += 1;
    begin();
    ScoreM.play();
  }
}


function dontlockball(){
    if (xBall - rBall < 0){
    xBall = 23
    }
}