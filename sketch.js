var bulllet,wall,thickness;
var speed,weight, damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  wall  = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "80,80,80";
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bulllet.velocityX = speed;
}

function draw() {
  background("black"); 
  var deformation; 
  if(wall.x-bullet.x < (bulllet.width+wall.width)/2){
   bullet.velocityX=0;
   deformation=0.5 * weight * speed * speed/22509;
   if(deformation>180){
     bullet.shapeColor=color(255,350,0);
   }
  }
  if(deformation<180 && deformation>100){
     bullet.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    bullet.shapeColor=color(0,255,0);
  }

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
     damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
   

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
 
  drawSprites();
}

function hasCollided(lbullet,lwall) {
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if(bulletLeftEdge>=wallLeftEdge){
   return true
 }
  return false;
}
 