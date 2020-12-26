class Divisions{
    constructor(x,y,w,h){
        var op={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,op);
        this.width=w;
        this.height=h;

        World.add(world, this.body);
    }

    show(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(pos.x,pos.y,this.w,this.h)
    }
}
