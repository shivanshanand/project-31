const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions=[];
var divisionheight=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(220,480,480,10);
  division1=new Division(100,370,10,300);

}

function draw() {
  background(250);  
  Engine.update(engine);

  for(var s=0; s<=width; s=s+80){
    divisions.push(new Division(s,height-divisionheight/2, 10, divisionheight));
}

ground1.display();
division1.show();


}
