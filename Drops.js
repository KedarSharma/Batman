class Drops {
	constructor(){
		var properties = {
			'density' : 1.2,
			'friction':100,
			'isStatic': false,
			'restitution': 0.5,
			'rotationSpeed': 10
		}
		this.radius = 2.5;
		this.body = Matter.Bodies.circle(random(-10,1210),random(-100,500),this.radius,properties);

		World.add(world,this.body);
	}

	display(){
		var pos = this.body.position;
		push();
		fill("blue");
		ellipseMode(CENTER);
		ellipse(pos.x,pos.y,this.radius*2);
		pop();
	}

	repos(){
		if(this.body.position.y >= 550){
			Matter.Body.setPosition(this.body,{
				x : random(-10,1210),
				y : random(-100,200) 
			})
		}
	}
}