//Music Game
let RacketM;
let ScoreM;
let ThemeM;
let TableM;
let WinM;
let GameOver;

function preload(){
  ThemeM = loadSound("musicAndPictures/theme.wav");
  ScoreM = loadSound("musicAndPictures/score.mp3"); 
  RacketM = loadSound("musicAndPictures/racket.mp3");
  TableM = loadSound("musicAndPictures/table.mp3");
  WinM = loadSound("musicAndPictures/winmusic.wav");
  GameOver = loadSound("musicAndPictures/gameover.flac");
  backgroundTable = loadImage("musicAndPictures/Table.png")
  mainBackground = loadImage("musicAndPictures/pong.png")
  BottonBackMain = loadImage("musicAndPictures/bottonMainBack.png")
}