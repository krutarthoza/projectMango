
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stone, mango;
var ground, slingShot;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,600,1200,20);
  tree = new Tree(870,670)
  boy=new Boy(93,100);
  stone = new Stone(100,90);
  mango = new Mango(855,670);
  mango2 = new Mango(860,670);
  mango3 = new mango(880,670);
	slingshot= new SlingShot(stone.body,{x:100,y:90});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);

  ground.display();
  stone.display();
  slingshot.display();
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  body.display();

  detectcollision(stone,mango);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
  
  function keyPressed(){
	if(keyCode===32){
		slingshot.attach(stone.body);
	}
  }
  
  function detectcollision(o1,o2){
  mangoBodyPosition=o1.Body.position;
  stoneBodyPosition=o2.Body.position;
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=o1.width/2+o2.width/2,o1.height/2+o2.height/2){
    Matter.Body.setStatic(mango.body,false)
  }
  
  }
  
  
  function mouseReleased(){
	slingshot.fly();
  }


