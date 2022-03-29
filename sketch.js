const Engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies
const Body = Matter.Body;

var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
var rand,frameing;

var drop = [];
var umbrella;

var a = Math.round(Math.random()*4);
console.log(a);

var b = Math.round(Math.random()*300);

function preload(){
	thunder1 = loadImage("images/thunderbolt/1.png");
	thunder2 = loadImage("images/thunderbolt/2.png");
	thunder3 = loadImage("images/thunderbolt/3.png");
	thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
	createCanvas(1200,600);

    engine = Engine.create();
	world = engine.world;

	for(var a = 0; a < 250; a++){
		if(frameCount%random(1,20) == 0){
			drop[a] = new Drops();
		}
	}

	umbrella = new Umbrella();

	Engine.run(engine);	
}

function draw(){
	background("black");

	umbrella.display();

	for(var a = 0; a < 250; a++){
		drop[a].display();
		drop[a].repos();
	}

	rand = Math.round(random(1,4));

	if(frameCount%90 == 0){
		frameing = frameCount;
		switch(rand){
			case 1 : 
			thunder = createSprite(random(100,1100),100);
			thunder.addImage(thunder1);
			thunder.scale = 0.4;
			break;
			case 2 : 
			thunder = createSprite(random(100,1100),100);
			thunder.addImage(thunder2);
			thunder.scale = 0.4;
			break;
			case 3 : 
			thunder = createSprite(random(100,1100),100);
			thunder.addImage(thunder3);
			thunder.scale = 0.4;
			break;
			case 4 : 
			thunder = createSprite(random(100,1100),100);
			thunder.addImage(thunder4);
			thunder.scale = 0.4;
			break;
			default : break;
		}
	}

	if(Math.round(frameCount - frameing) > 10 && thunder){
		thunder.destroy();
	}

	drawSprites();	
}