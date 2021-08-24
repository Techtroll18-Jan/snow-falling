const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world

var bg

var snowSound

var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10;

var snowanimation

var snow

function preload(){

  bg=loadImage("snow2.jpg")

  

  snowanimation=loadAnimation("snow4.webp","snow5.webp")


}
function setup() {

  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world

  
  snow1=new Snow(30,10,20,20)
  snow2=new Snow(90,0,20,20)
  snow3=new Snow(190,90,20,20)
  snow4=new Snow(140,200,20,20)
  snow5=new Snow(120,120,20,20)
  snow6=new Snow(210,300,20,20)
  snow7=new Snow(270,16,20,20)
  snow8=new Snow(330,90,20,20)
  snow9=new Snow(490,100,20,20)
  snow10=new Snow(590,100,20,20)

  snow=createSprite(400,40)

  snow.addAnimation("snow",snowanimation)

  snow.scale=100

}

function draw() {

  background(bg);  

  Engine.update(engine)

  

  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display()
  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()

  drawSprites();
}