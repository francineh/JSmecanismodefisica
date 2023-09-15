// variaveis constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//variaveis
var block1;
var block2;
var block3;
var ground;


function setup() {
	createCanvas(400, 400);

//iniciando o mecanismo de fisica.
	engine = Engine.create();
	world = engine.world;

	//criando corpos estaticos aqui
	var plane_options={
		isStatic: true
	}
// criando corpos orientados a objeto.
	ground = Bodies.rectangle(200,385,500,20,plane_options);
	World.add(world,ground);


	block1 = Bodies.circle(220,20,10,block1_options);
	World.add(world,block1);


	block2 = Bodies.rectangle(50,50,10,10,block2_options);
	World.add(world,block2);


	block3 = Bodies.rectangle(330,50,10,10,block3_options);
	World.add(world,block3);
// aqui temos as opçoes de restituição, peso a ponto dos blocos despencarem 
var block1_options={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	var block2_options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var block3_options={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}


	fill(RADIUS);
	ellipseMode(RADIUS);
	rectMode(CENTER);


	Engine.run(engine);
  
}


function draw() {
     background("lightgreen");
// atualizando o mecanismo de fisica
	 Engine.update(engine);
// oriando a exibição dos objetos 
	ellipse(block1.position.x,block1.position.y,40);
	
	rect(block2.position.x,block2.position.y,50);

	rect(block3.position.x,block3.position.y,100,50);

  drawSprites();
 
}



