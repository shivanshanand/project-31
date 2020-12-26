const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(220,480,480,10)












}

function draw() {
  background(250);  
  Engine.update(engine);

ground1.display();











}