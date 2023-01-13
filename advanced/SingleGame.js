function setup() {
  createCanvas(600, 400);
  begin();
  ThemeM.loop();
  
}


function SingleGame() {
  background(backgroundTable);
  stroke(255);
  strokeWeight(2);
  showBall();
  moveBall();
  boardBall();
  showRacketPlayer();
  showRacketIA();
  moveRacket();
  moveRacketIA();
  touchRacket();
  touchRacketIA();
  score();
  getscore();
  winning(); 
  youLose();
  youWin();
}

function youWin(){
  if(myscore==5){
    textSize(60)
    text("You    Win", 308, 198);
  }
}

function youLose(){
  if(oppscore==5){
    textSize(60)
    text("You    Lose", 308, 198);
  }
}

function winning() {
  
  if(myscore == 5) {
    WinM.play();
    ThemeM.stop();
    noLoop();
    
  }
  if(oppscore == 5) {
    GameOver.play();
    ThemeM.stop();
    noLoop();
          
    
  }
  
}