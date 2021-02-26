var thief,coin,policeman,invisibleGround,gameOver,restart;
var thiefImg,coinImg,policemanImg,gameOverImg,restartImg,backgroundImg;

function preload(){
  thiefImg = loadImage("thief.png");
  coinImg = loadImage("coin.png");
  policemanImg = loadImage("policeman.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
  backgroundImg = loadImage("background.png");
}
function setup(){
  createCanvas(1200,600);

  thief = createSprite(100, 500, 50, 50);
  thief.addImage("thief", thiefImg);
  thief.scale = 0.5;

  invisibleGround = createSprite(600,580,1200,20);
  invisibleGround.visible = true;
  
  restart = createSprite(600,400,20,20);
  restart.addImage("restart", restartImg);
  restart.scale = 0.5;
  restart.visible = false;

  gameOver = createSprite(600,250,20,20);
  gameOver.addImage("gameOver",gameOverImg);
  gameOver.scale = 2;
  gameOver.visible = false;
}

function draw() {
  background(backgroundImg)
  
  drawSprites();
}