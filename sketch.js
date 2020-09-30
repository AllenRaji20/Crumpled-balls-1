const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

	var ball_options ={
		isStatic: false,
        restitution: 0.3, 
    }

    ball = Bodies.circle(100,470,20,ball_options);
    World.add(world,ball);
    console.log(ground);
}

	Engine.run(engine);
  
function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){
  if (keycode === UP_ARROW) {
   
	Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85});

  }
}

