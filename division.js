class Division{
    constructor(x,y,w,h){
        var op={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,op);
        this.width=w;
        this.height=h;

        World.add(world, this.body);

    var division=[];
    var divisionheight=300;
    }

    show(){
        for(var s=0; s<=width; s=s+80){
            division.push(new Division(s,height-divisionheight/2, 10, divisionheight));
        }
    }
}