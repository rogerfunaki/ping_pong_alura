//Racket variables
let xRacket = 12
let yRacket = 150
let wRacket = 10
let hRacket = 90

//Racket IA variables
let xRacketIA = 577;
let yRacketIA = 150;
let wRacketIA = 10;
let hRacketIA = 90;
let speedRacketIA;
let ErrorChanceIA = [speedxBall+1,speedxBall,speedyBall-1];

function showRacketPlayer(){
  stroke(0);
  fill(color(46,139,87));
  rect(xRacket, yRacket, wRacket, hRacket);
}

function showRacketIA(){
  stroke(0);
  fill(color(255,0,0));
  rect(xRacketIA, yRacketIA, wRacket, hRacket);
}


function moveRacket(){
      yRacket = mouseY
}

//makes RacketIA move just the ball through the line 
function moveRacketIA(){
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

//When Multi Player mode is active
function moveRacketMultiplayer(){
 if (keyIsDown(87))
   yRacketIA -= 10;
  
  if (keyIsDown(83))
    yRacketIA += 10;
    
  
}

  //recognize the touch
function touchRacket(){
  if (xBall - rBall < xRacket + wRacket && yBall - rBall < yRacket + hRacket && yBall + rBall > yRacket){
    speedxBall *= -1;
    RacketM.play();
    }
}

  //recognize the touch RacketIA
function touchRacketIA() {
  if (xBall + rBall > xRacketIA && yBall + rBall < yRacketIA + hRacketIA && yBall + rBall >   yRacketIA - wRacketIA){
    speedxBall *= -1; 
    RacketM.play();
  }
}