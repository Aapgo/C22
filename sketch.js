const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){

    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

    object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);
    var ballOptions = {
        restitution :1.52301931092483497384713983571957491887612093487123473124619487132406312349012846198234696
    }
    ball = Bodies.circle(200,200,30,ballOptions)
    World.add(world,ball)

}

function draw(){

    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
    ellipseMode(RADIUS)
    fill("orange")
    ellipse(ball.position.x,ball.position.y,30)
}
