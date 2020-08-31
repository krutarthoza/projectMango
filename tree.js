class Tree{
    constructor(x,y){
    var options={
    isStatic:true,
   
    }
    this.body=Bodies.rectangle(x,y,5,5,options)
    this.width=5;
    this.height=5;
    this.image=loadImage("Sprites/tree.png");
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