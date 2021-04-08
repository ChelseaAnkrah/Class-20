var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 40, 80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(600,200, 80,40);
  movingRect.shapeColor = "blue";

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.velocityX = 1;
  movingRect.velocityX = -1;
}

function draw() {
  background(0);
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;  

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect. height/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect. height/2){
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
    fixedRect.velocityX *=(-1);
    movingRect.velocityX *=(-1);

  }else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  drawSprites();
}