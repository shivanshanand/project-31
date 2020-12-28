class Particle{
    constructor(x,y,r){
        var op={
            restitution:0.5
        }

        this.body=Bodies.circle(x,y,r,op);

        this.color=color(random(0,255));

        World.add(world, this.body);
        this.r=r;
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}
