const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftWall, rightWall;
var balls = [];
var plinkies = [];
var walls = [];

var wallHeight = 300;



function setup() {
	createCanvas(480*1.2, 800*1.2);


	matterEngine = Engine.create();
	matterWorld = matterEngine.world;

	//Create the Bodies Here.
  ground = new Barriers(width/2, height-10, width, 20);
  leftWall = new Barriers(-5, height/2, 13, height);
  rightWall = new Barriers(width+3, height/2, 13, height);

  for(var k = 0; k <= width; k= k+80*1.2){
    walls.push(new Walls(k, height-wallHeight/2, 20, wallHeight))
  }

  for(var j = 50; j <= width; j = j+50*1.2){
    plinkies.push(new Plinkies(j, 100*1.2, 25))
  }
  for(var j = 20; j <= width; j = j+50*1.2){
    plinkies.push(new Plinkies(j, 150*1.2, 25))
  }
  for(var j = 50; j <= width; j = j+50*1.2){
    plinkies.push(new Plinkies(j, 200*1.2, 25))
  }
  for(var j = 20; j <= width; j = j+50*1.2){
    plinkies.push(new Plinkies(j, 250*1.2, 25))
  }

	Engine.run(matterEngine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(frameCount%60==0){
    balls.push(new Balls(random(10, width-10), 50, 10))
  }
  for(var i = 0; i < walls.length; i++){
    walls[i].show();
  }
  for(var i = 0; i < plinkies.length; i++){
    plinkies[i].show();
  }
  for(var i = 0; i < balls.length; i++){
    balls[i].show();
  }

  ground.show();
  leftWall.show();
  rightWall.show();
}


