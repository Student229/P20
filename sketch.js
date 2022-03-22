var edges;

function preload(){
  bg = loadImage('Assets/iss.png');
  drink = loadAnimation('Assets/drink1.png', 'Assets/drink2.png');
  eat = loadAnimation('Assets/eat1.png', 'Assets/eat2.png');
  sleep = loadAnimation('Assets/sleep.png');
  brush = loadAnimation('Assets/brush.png');
  move = loadAnimation("Assets/move.png","Assets/move.png","Assets/move1.png","Assets/move1.png");
  gym = loadAnimation("Assets/gym1.png","Assets/gym2.png","Assets/gym11.png","Assets/gym12.png");
  bath = loadAnimation("Assets/bath1.png","Assets/bath1.png","Assets/bath1.png","Assets/bath2.png","Assets/bath2.png","Assets/bath2.png");
  
}

function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation('sleeping', sleep);
  astronaut.scale = 0.1;

  edges = createEdgeSprites();
}

function draw() {
  background(bg);
  drawSprites();
  
  textSize(25);
  fill("white")
  text("Instructions:",20, 45);
  textSize(15);
  text("Up Arrow = Brush",20, 65);
  text("Down Arrow = Gym",20, 80);
  text("Left Arrow = Eat",20, 95);
  text("Right Arrow = Bath",20, 110);
  text("m key = Move",20, 125);

  astronaut.bounceOff(edges);
  
  
  if (keyDown(UP_ARROW)){
    astronaut.addAnimation('brushing', brush);
    astronaut.changeAnimation('brushing');
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(DOWN_ARROW)){
    astronaut.addAnimation('gymming', gym);
    astronaut.changeAnimation('gymming');
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown(LEFT_ARROW)){
    astronaut.addAnimation('eating', eat);
    astronaut.changeAnimation('eating');
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if (keyDown(RIGHT_ARROW)){
    astronaut.addAnimation('bathing', bath);
    astronaut.changeAnimation('bathing');
    astronaut.x = 300;
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown('m')){
    astronaut.addAnimation('moving', move);
    astronaut.changeAnimation('moving');
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  drawSprites();
}