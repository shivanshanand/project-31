const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions=[];
var divisionheight=300;

var particles=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(220,480,480,10);
  division1=new Divisions(100,370,10,300);
}

function draw() {
  background(250);  
  Engine.update(engine);

  for(var s=0; s<particles.length; s++){
    partciles[s].display
  }

if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10, 10))
} 

  for(var s=0; s<=width; s=s+80){
    divisions.push(new Divisions(s,height-divisionheight/2, 10, divisionheight));
}

ground1.display();
division1.show();

}
