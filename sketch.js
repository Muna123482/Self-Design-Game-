var Aaron, backgroundImage, background1;

function preload(){
  backgroundImage = loadImage("sample.png");
}

function setup() {
  createCanvas(1200,400);
  Aaron = createSprite(400, 200, 50, 50);
  background1 = createSprite(0, 0, 1200, 400);
  background1.addImage(backgroundImage);
}

function draw() {
  background(255,255,255);
  background1.velocityX = -1;
  if(background1.x < 0){
    background1.x = background1.width/2;
  }
  spawnEnemies();  
  drawSprites();
}

function spawnEnemies(){
  if(frameCount%60)
}
