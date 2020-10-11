var fixedRect, movingRect;

var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(800, 100, 50, 80);
  ob1.shapeColor = "green";
  ob1.debug = true;
  ob2 = createSprite(400, 800,80,30);
  ob2.shapeColor = "green";
  ob2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  ob2.x=World.mouseX;
  ob2.y=World.mouseY;
if(isTouching(ob1,ob2)){
  ob1.shapeColor = "grey";
  ob2.shapeColor = "grey";
}
else{
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
  
}
 bounceoff(movingRect,fixedRect);

  drawSprites();
}