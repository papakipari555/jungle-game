var fairy,backgroud

var gameState = 2

var game

var elf1

function preload(){
  fairy = loadImage("images/fairy.png")
  jungle = loadImage("images/jungle2.jpg")
  garden = loadImage("images/storgarden.png")
  elfimage = loadImage("images/elf.png")
}

function setup(){
  createCanvas(displayWidth , displayHeight)
  game = new Game()
}
function draw(){
  
if(gameState===0){
  game.showwelcomescreen()
}
else if(gameState===1){
  game.showstoryscreen()
}

else if(gameState===2){
  game.showgamescreen()

  drawSprites()
}
}

