
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball;
var boxl,boxr,boxb;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,200,20);
	ground = new Ground(400,390,800,20);

	boxx = 650;
	boxy= 370;
	boxw = 200;
	boxt = 20;
	boxh = 100;

	boxb = new Dustbin(boxx,boxy,boxw,boxt);
	boxl= new Dustbin(boxx-boxw/2 , boxy-boxh/2+10,boxt,boxh);
	boxr = new Dustbin(boxx+boxw/2 , boxy-boxh/2+10,boxt,boxh)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  boxb.display();
  boxl.display();
  boxr.display();
  drawSprites();
  
  text(mouseX+","+mouseY,mouseX,mouseY);
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-70});
	}
}



