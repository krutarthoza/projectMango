class Magoes{
    constructor(x,y){
    var options={
    isStatic:true,
    restitution:0.8,
    friction:0.3,
    }
    this.body=Bodies.rectangle(x,y,50,50,options)
    this.width=50;
    this.height=50;
    this.image=loadImage("Sprites/mango.png");
    World.add(world,this.body);
    }
    display(){
    var pos= this.body.position;
    var angle=this.body.angle;
    push()
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.width, this.height);
    pop()
    }
    }
