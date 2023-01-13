function setup() {
  createCanvas(600, 400);
  begin();
  ThemeM.loop();
}


function MultiPlayerGame() {
  background(backgroundTable);
  stroke(255);
  strokeWeight(2);
  showBall();
  moveBall();
  boardBall();
  showRacketPlayer();
  showRacketIA();
  moveRacket();
  moveRacketMultiplayer();
  touchRacket();
  touchRacketIA();
  score();
  getscore();
  winningMultiplayer();
  youLoseM();
  youWinM();
}

function youWinM(){
  if(myscore==5){
    textSize(50)
    text("Palyer 1", 170, 198);
    text("Win", 430, 198);
  }
}

function youLoseM(){
  if(oppscore==5){
    textSize(50)
    text("Palyer 2", 170, 198);
    text("Win", 430, 198);
  }
}

function winningMultiplayer() {
  if(myscore == 5) {
    WinM.play();
    ThemeM.stop();
    noLoop();
    
  }
  if(oppscore == 5) {
    WinM.play();
    ThemeM.stop();
    noLoop();
    
  }
}
