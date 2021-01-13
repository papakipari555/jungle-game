class Game{
    constructor(){
        this.playbutton=createButton("play")
        this.playbutton.style("width","150px")
        this.playbutton.style("height","50px")
        this.playbutton.style("font-size","20px")
        this.playbutton.style("background-color","#778284")
        this.playbutton.style("color","white")
        this.title=createElement("h1")
        this.story=createElement("h3")
        this.startbutton=createButton("start the game")
        

    }
    showwelcomescreen(){
        background(jungle)
        image(fairy,100,200)
        this.playbutton.position(displayWidth/2, displayHeight/2)
        this.playbutton.mousePressed(()=>{
            this.playbutton.remove()
            clear()
           gameState=1


        })
    }

showstoryscreen(){
    background(garden)
this.title.html("the story of jungle run")
this.title.position(150,50)
this.story.html("this is a story of a beautiful princess picking up some blueberries from her garden suddenly something flashed infront of her eyes and she was teleported to a very scary jungle she never saw before , now the challenge is to find the magical door going back to her castle's garden but its not so easy cause there will be a monster casing after her and there will be scary elfs in her way too but dont worry fairies are always here to help ")
this.story.position(200,200)
this.startbutton.position(500,400)
this.startbutton.mousePressed(()=>{
    this.startbutton.remove()
    this.title.remove()
    this.story.remove()
    clear()
    this.createCharacters()
    gameState=2

})
}

showgamescreen(){




    var cardboard1 = createSprite(80,20,180,20);
  cardboard1.shapeColor = "lime";
   cardboard1.scale=2;
  
var cardboard2 = createSprite(250,20,10,210);
  cardboard2.shapeColor = "green";
  cardboard2.scale=2;

var cardboard3 = createSprite(100,250,100,20);    
  cardboard3.shapeColor = "lime";
  cardboard3.scale=2;

var cardboard4 = createSprite(400,270,15,180);
  cardboard4.shapeColor = "green";  
  cardboard4.scale=2;

var cardboard5 = createSprite(140,440,400,10);
  cardboard5.shapeColor = "green";
  cardboard5.scale=2;

var cardboard6 = createSprite(1007,264,10,100);
  cardboard6.shapeColor = "lime";  
  cardboard6.scale=2;

var cardboard7 = createSprite(501,265,50,20);
  cardboard7.shapeColor = "green";  
  cardboard7.scale=2;

var cardboard8 = createSprite(610,280,20,100);
  cardboard8.shapeColor = "green";
  cardboard8.scale=2;

var cardboard9 = createSprite(822,370,200,10);
  cardboard9.shapeColor = "green";  
  cardboard9.scale=2;

var cardboard10 = createSprite(137,325,20,90);
  cardboard10.shapeColor = "lime";
  cardboard10.scale=2;

var cardboard11 = createSprite(808,100,200,10);
  cardboard11.shapeColor = "lime";
  cardboard11.scale=2;

var cardboard12 = createSprite(1150,180,150,20);  
  cardboard12.shapeColor = "lime";
  cardboard12.scale=2;

var cardboard13 = createSprite(830,520,100,10);
  cardboard13.shapeColor = "green";
  cardboard13.scale=2;
  
var cardboard14 = createSprite(1050,30,30,10);
  cardboard14.shapeColor = "green";
  cardboard14.scale=2;

var cardboard15 = createSprite(900,700,300,20);
  cardboard15.shapeColor = "green";
  cardboard15.scale=2;

var cardboard16 = createSprite(905,22,10,80);
  cardboard16.shapeColor = "lime";
  cardboard16.scale=2;

var cardboard17 = createSprite(800,200,90,10);
  cardboard17.shapeColor = "green";
  cardboard17.scale=2;

var cardboard18 = createSprite(600,654,20,280);
  cardboard18.shapeColor = "green";
  cardboard10.scale=2;

/*var cardboard19 = createSprite(580,290,20,100);
  cardboard19.shapeColor = "green";
  cardboard19.scale=2;

var cardboard20 = createSprite(1020,270,120,20);
  cardboard20.shapeColor = "brown";
  cardboard20.scale=2;

var cardboard21 = createSprite(1000,390,100,20);
  cardboard21.shapeColor = "white"; 
  cardboard21.scale=2;
  
var cardboard22 = createSprite(1200,370,20,100);
  cardboard22.shapeColor = "orange";
  cardboard22.scale=2;*/

 
 


 


 background("white")

  drawSprites()

  

}
createCharacters(){
   elf1 = createSprite(800,300,10,10)
   elf1.addImage(elfimage)
   elf1.scale=0.2
   elf1.velocityX=2;
   elf1.velocityY=2;
   elf1.bounceOff(cardboard1)
 elf1.bounceOff(cardboard2)
 elf1.bounceOff(cardboard3)
 elf1.bounceOff(cardboard4)
 elf1.bounceOff(cardboard5)
 elf1.bounceOff(cardboard6)
 elf1.bounceOff(cardboard7)
 elf1.bounceOff(cardboard8)
 elf1.bounceOff(cardboard9)
 elf1.bounceOff(cardboard10)

 drawSprites()
}


}