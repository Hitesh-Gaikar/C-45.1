function preload(){
  Shooterimage=loadImage("images.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  Shooter=createSprite(70,650)
  Shooter.addImage(Shooterimage)
  zombie= new Zombie(width,300)

}



function draw() {
  background("black");  
  drawSprites();

  if(keyDown("space")){
    bullet= new Bullet (Shooter.x,Shooter.y)
  }
}
