class Umbrella {
	constructor(){
		var options = {
			'isStatic' : true,
		}
		this.body = Matter.Bodies.circle(600,400,100,options);
		this.image = loadImage("images/Walking Frame/walking_1.png");
		World.add(world,this.body);
	}

	display(){
		var pos = this.body.position;
		push();
		imageMode(CENTER);
		image(this.image,pos.x,pos.y,300,300);
		pop();
	}
}