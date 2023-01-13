function mouseClicked() {
  
  //main control
  if(screen==0){
    if(mouseX>=Botton1X && mouseX<=(Botton1X+Botton1W) && mouseY>=Botton1Y && mouseY<=(Botton1Y+Botton1H)){
      screen=1;
    }

    if(mouseX>=Botton2X && mouseX<=(Botton2X+Botton2W) && mouseY>=Botton2Y && mouseY<=(Botton2Y+Botton2H)){
      screen=2;
    }
  }
  
  
  if(screen!=0){
    if(mouseX>=Botton3X && mouseX<=(Botton3X+Botton3W) && mouseY>=Botton3Y && mouseY<=(Botton3Y+Botton3H)){
      screen=0;
    }
  }
  
  
}