//Score Game
let myscore = 0;
let oppscore = 0;

function score(){
  stroke(255);
  textAlign(CENTER);
  textSize(18);
  fill(color(46,139,87));
  square(125, 20, 50, 5, 50);
  fill(255);
  text(myscore, 150,50);
  fill(color(178,34,34));
  square(425, 20, 50, 5, 50);
  fill(255);
  text(oppscore, 450,50);
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

