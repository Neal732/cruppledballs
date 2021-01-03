
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, ground;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(600,660,200,20);
    box2 = new Dustbin(510,620,20,100);
	box3 = new Dustbin(690,620,20,100);

	paperObject = new Paper(200,200,20);


    fill("white");
    ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
    World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  paperObject.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.position,{x:40,y:-70})
	 }
   }