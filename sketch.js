var backImage;
var car, carImage;
var obstaclesGroup;
var score=0;
var obstacleImage;
var edges;
var highScore, distance=0;
var chance=5;

function preload(){
  backImage=loadImage("Road.png");
  carImage=loadImage("car.png");
  obstacleImage=loadImage("obstacle.png");
}

function setup(){
  createCanvas(600, 600);
  
  background=createSprite(300,350,20,20);
  background.addImage(backImage);
  background.scale=2.5;

  car=createSprite(300,480,100,50);
  car.addImage(carImage);
  car.scale=0.15;
  
  obstaclesGroup=new Group();
  
  gameState=PLAY;
  
  edges=createEdgeSprites();
  
  highScore=0;

  camera.position.x=car.x;
  camera.position.y=car.y-150;

  background.y=-2300;
 // camera.zoom=1.1;
  
}


function windowImage(){
  
  if(gameState===PLAY){
    camera.zoom=0.85;
  
  if(frameCount%20==0){
    var obstacle=createSprite(Math.round(random(10, 590)), -2, 100, 7);  
    obstacle.velocityY=20;
    obstacle.shapeColor="red";
    obstacle.lifeTime=600;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.5;
    obstacle.setCollider("rectangle",0,5,100, 180);
    
    obstaclesGroup.add(obstacle);
    
  }
}
  

  
}

function draw(){
  
  if(highScore<score){
    highScore=score;
  }
 
  
  if(gameState===PLAY){
    car.visible=true;

   // background.velocityY=30;
  
  if(background.y>1000){
    //background.y=height/2;
  }
  
    
    score=score+Math.round(frameCount%50==0);

  windowImage();
    
    car.bounceOff(edges);
    
     if(keyDown("left_arrow")){
      car.x = car.x - 15;
    }
    
    if(keyDown("right_arrow")){
      car.x = car.x + 15;
    }
    if(keyDown("up_arrow")){
      background.y+=15;
      distance+=1;
    }
    car.depth++;
    
    if(distance>=350){
      gameState=END;
    }

   // console.log(distance)
    
    if(isTouching(car,obstaclesGroup)){
     car.visible=false;
      obstaclesGroup.destroyEach();
      gameState=END;
      
    }
     drawSprites();
    
  } else  if(gameState===END){
    distance=0;
    //camera.zoom=1.1;

    fill("red");
    text("Game Over", 190,250,textSize(50));
   text("Press R To restart if Chance Left is no 0", 135, 300, textSize(20));
   if(chance!==0){
      if(keyDown("r")){
        score=0;
        gameState=PLAY;
        background.y=-2300;
        chance-=1;
  }
}
      
      
    }
  
  fill("white");
  text("Score: "+score, 100, 40, textSize(30));
  text("Highest Score: "+highScore, 310,40,textSize(30));
  text("Chances Left "+chance,310,80,textSize(30));
}
