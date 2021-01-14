var car,wall;
var speed,weight;
var car2,car3;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)

  fill(0,255,0);
  car=createSprite(50,200,50,50);

  fill(80,80,80);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;

  car2=createSprite()
  
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}