const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 const Constraint = Matter.Constraint;




var world;
var engine;


function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine);
 
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("pink");  
  ground = new Ground(600,height,1200,20);
  board = new Ground(400,40,350,10);
  box1 = new Box(200,200,100,100);
  polygon = new Polygon(100,300);
  sling = new Sling(polygon.body , {x:100,y:200})
 
  

 board.display();
 ground.display();
 box1.display();
 polygon.display();
 sling.display();
 drawSprites();
}
function mouseDragged(){
  
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
