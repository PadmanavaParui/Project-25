const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper1, ground;
var  dustbin1, dustbin2, dustbin3; 
var dustbinMain;

// the setup function
function setup() {
    // creating the canvas
    createCanvas(800, 700);

    // setting the rect mode to center
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    // creating the paper
    paper1 = new Paper(100,640, 70);
    // creating the ground
    ground = new Ground(400,680,800,20);
    //dustbinMain = new Dustbin(535,57, 150, 110);
    // creating the dustbin
    dustbin1 = new Dustbin(610,660, 100, 20);
    dustbin2 = new falseDustbin(550,620,20,100);
    dustbin3 = new falseDustbin(670,620,20,100)
    
    Engine.run(engine);
}

// the draw function
function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);  
  paper1.display();
  ground.display();
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  //dustbinMain.display();
}

// the key pressed function
function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 95,y: -95})
    }
  }