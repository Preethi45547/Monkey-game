
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var score=0 , survivalTime=0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  }
  


  function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
   
  if(keyDown("space")){  
    monkey.velocityY = -12;    
  }
    
   monkey.velocityY = monkey.velocityY+0.8; 
  
  ground = createSprite(400,350,900,10);  
  ground.velocityX = -4;  
  ground.x=ground.width/2  
  console.log(ground.x);  
  
  }
  function draw() {
      background("white");
     stroke("black");
    fill("black");
      textSize(20);
   survivalTime=Math.ceil(frameCount/frameRate())
  text("Survial Time:"+  survivalTime, 100, 50);
  
  //displaying score

  stroke("black");
    fill("black");
      textSize(20);
    
  text("Score:"+  score, 300, 100);
  
  if(ground.x<0){
  ground.x=ground.width/2;
     }
    if(keyDown("space")){  
    monkey.velocityY = -12;    
  }
   monkey.velocityY = monkey.velocityY+0.8; 
    monkey.collide(ground);
    
  
    
    
  drawSprites();  
    

    
    
    
  }
  function food () {
  if (frameCount % 80 ===0){
  banana = createSprite(400,350,40,10);   
  banana.addImage(bananaImage);  
  banana.y = Math.round(random(120,200)); 
  banana.scale = 0.1;  
  banana.velocityX = -3;  
  banana.lifetime = 200;  
  FoodGroup.add(banana);  
    
  }  
  }


  function obstalces () {
  if (frameCount % 300 === 0){
  obstacle = createSprite(250,325,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.lifetime = 200 ;
  obstalce.scale = 0.1  
  ObstacleGroup.add(obstacle);  
    
  } 
  }  
    
    