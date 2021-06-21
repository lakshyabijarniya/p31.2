
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles = [];
var plinkos = []; 
var divisons = [];
var divisonsHeight = 300;


function preload()
{
	
}



function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,width,20);

  
  for (var k = 0; k<=width; k= k+80) {
      divisons.push(new Division(k,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  

 

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();

  
  
  for (var i = 0; i<plinkos.length; i++) {
    plinkos[i].display();
  }

  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  for (var j = 0; j<particles.length; j++) {
    particles[j].display();
  }

  for(var k=0;k<divisions.length;k++){
    divisons[k].display();
  }


  ground.display();
 

 
}



