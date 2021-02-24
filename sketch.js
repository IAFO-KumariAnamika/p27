
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var roof1;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var world;


function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1=new Roof(200,50,300,10);
	
	bobObject1=new Bob(100,270,40);
	bobObject2=new Bob(130,270,40);
	bobObject3=new Bob(160,270,40);
	bobObject4=new Bob(190,270,40);
	bobObject5=new Bob(220,270,40);

	rope1=new Rope(bobObject1.body,roof1.body,-80,0);
	rope2=new Rope(bobObject2.body,roof1.body,-40,0);
	rope3=new Rope(bobObject3.body,roof1.body,0,0);
	rope4=new Rope(bobObject4.body,roof1.body,40,0);
	rope5=new Rope(bobObject5.body,roof1.body,80,0);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-35,y:0});
}
}



