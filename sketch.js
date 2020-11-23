var fixedRect, movingRect;

var ball , ball1 , ball2;

function setup(){
  createCanvas(400,400);

  fixedRect = createSprite(380,200,30,300);
  movingRect = createSprite(200,200,100,30);
  ball = createSprite(50,200,20,20);
  ball1 = createSprite(50,150,20,20);
  ball2 = createSprite(50,250,20,20);

  //movingRect.debug = true;
  //fixedRect.debug = true;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "blue";
  ball.shapeColor = "yellow";
  ball.velocityX = 2;
  ball1.shapeColor = "purple";
  ball1.velocityX = 2;
  ball2.shapeColor = "pink";
  ball2.velocityX = 4;
}

function draw() {
  
  background("black");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  console.log(movingRect.x - fixedRect.x);
  
  
  //detecting touch
  if(isTouching(ball,movingRect)){
    ball.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
else{
    ball.shapeColor = "yellow";
    movingRect.shapeColor = "blue";
}

  //making the ball bounce
  bounceOff(ball1,fixedRect);
  bounceOff(ball,fixedRect);
  
   //making the ball collide
  collide(ball2,fixedRect);
  
  drawSprites()
}

