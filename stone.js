class Stone{
	constructor(x, y, width, height, angle)
	{
		var options={
			isStatic:false,
			restitution:0,
            friction:1,
            density:1.2
			}
		// this.x=x;
		// this.y=y;
		// this.r=r
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(x, y, 20, options);
		this.width = 40
		this.height = 40
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		var angle = this.body.angle;
		push()
		translate(stonePos.x, stonePos.y);
		rotate(angle)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0, this.width, this.height)
		pop()
 }
}