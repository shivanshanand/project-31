const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions=[];
var divisionheight=300;

var particles=[];
var plinkos=[];

function preload(){
  bgImg=loadImage("plinko bg.png")
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(width/2,height,width,20);
  //division1=new Divisions(100,370,10,300);

  for(var s=0; s<=width; s=s+80){
    divisions.push(new Divisions(s,height-divisionheight/2, 10, divisionheight));
}

for(var i=30; i<=width; i=i+50){
 plinkos.push(new Plinko(i,75,15))
}

for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,140,15))
 }
 
for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,205,15))
 }

 for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,270,15))
 }
 
 for(var i=30; i<=width; i=i+50){
  plinkos.push(new Plinko(i,335,15))
 }

}

function draw() {
  background(bgImg);  
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(100,700), 10, 10))
} 

  for(var s=0; s<particles.length; s++){
    particles[s].display();
  }

  ground1.display();

  for(var s=0; s<divisions.length; s++){
    divisions[s].display();
  }

  for(var s=0; s<plinkos.length; s++){
    plinkos[s].display();
  }  


//division1.show();

}
