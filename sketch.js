
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(40,600,20,ball_options);
	groundObj = new Ground(width/2,690,width,20);
    leftSide = new Ground(700,690,20,120);
	rightSide = new Ground(600,690,20,120);

	World.add(world,ball);
	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		//code to appy force on ball
		console.log("up arrow pressed");
		var position = {x:100,y:100};
		var force = {x:20,y:20};
		Matter.Body.applyForce(ball,position,force);
	}
}

function draw() {
  rectMode(CENTER);
  background(50);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);
  drawSprites();
 
}



