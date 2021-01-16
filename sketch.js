
var monkey , monkey_running
var banana ,bananaImage,bananagroup, obstacle, obstacleImage
var  obstacleGroup
var survivaltime
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(60,330,20,20);
  monkey.addAnimation("running",monkey_running)
monkey.scale=0.2;
  ground=createSprite(200,395,400,10);
ground.velocityX=-4;
  ground.x = ground.width /2;
  bananagroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("white");
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
  if(keyDown("space") && monkey.y >= 300) {
      monkey.velocityY = -17;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  spawnBanana();
  spawnObstacle();
 drawSprites(); 
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivaltime,100,50)
}

function spawnBanana(){
  if(frameCount % 80 === 0) {
    banana=createSprite(450,200,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    bananagroup.add(banana);
    banana.lifetime=120;
  }
}
function spawnObstacle(){
  if(frameCount % 300 === 0) {
    obstacle=createSprite(450,300,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacleGroup.add(obstacle);
    obstacle.lifetime=120;
  }
}




