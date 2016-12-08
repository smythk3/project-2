var circles = [];
var numCircles = 50;
var circleSize = 20;
var speed;

var osc;
var env;

function setup() {
  createCanvas(800, 800);

  // populate the array of objects
  for (var i = 0; i < numCircles; i++) {
    circles[i] = new Circle();
   
  }

}

function draw() {
  background(255);
  //osc = new p5.Oscillator();
  //osc.setType('sine');
  //osc.start();
  //osc.freq(220);
  //osc.amp(env);
 
  
  env = new p5.Env();
  env.setADSR(0.1, 0.01, 0.5, 0.8);
  env.setRange(1, 0);
  //access the populated array and do stuff with each one
  for (var i = 0; i < circles.length; i++) {
    circles[i].display();
    circles[i].move();
    //osc.start();
   // osc.freq(220);
    //osc.amp(env);
    //env.play();
  }
}

function mousePressed() {
  circles.push(new Circle());

}
function keyPressed() {
  //circles.splice(0,1);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.start();
  osc.freq(random(220, 440));
  osc.amp(env);
  env.play();
}
//Here begins the CONSTRUCTOR
function Circle() {
  this.x = random(25, width - 25);
  this.y = random(25, height - 25);
  this.speed = random(5);
  this.colour = random(255,0);

  this.display = function() {
    fill(this.colour);
    ellipse(this.x, this.y, random(circleSize,0), random(circleSize,0));
  }

  this.move = function() {
    this.x = this.x + this.speed;

    if (this.x > (width - 25)) {
      this.speed = -this.speed;
      background(0);
    }

    if (this.x < 25) {
      this.speed = -this.speed;
      background(0, 255, 100);
    }
  }
}