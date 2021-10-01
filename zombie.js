class Zombie{
    constructor(x,y){
this.body=createSprite(x+4,y+0.2)
this.body.velocityX=-8
this.Image=loadImage("zombie.png")
this.Image2=loadImage("zombie2.png")
this.Image3=loadImage("zombie3.png")
this.Image4=loadImage("zombie4.png")
this.body.addImage(this.Image)
this.body.scale=0.5

  }
}