//The purpose of this sketch is to provide a basic template

//this line of code
let selection;

//this is to setup the basics canvas size and framerate
function setup() {

  var canvas = createCanvas(841,594);
  background(22);
  canvas.parent ("canvascontainer");
  //this changes the speed in which the shapes appear on screen
  frameRate(60);
}
//here we have it so each shape has a random colour each time
  function draw() {

  push();

  fill(random(255), random(255), random(255));

  //here a random width and height is chosen so that the objects appear in random parts of the canvas and dont all start at the same position.
  translate(random(width), random(height));


  //here we a making it so a random number is chosen either 0 1 or 2 and then dependant on the number chosen that it what number will be drawn on the Canvas
  selection = round(random(2));
  if (selection===0) ellipse(0, 0, 40, 40);
  if (selection===1) rect(0, 0, 40, 40);
  if (selection===2) triangle(30, 75, 57, 20, 81, 75);

  //this logs in console in what order what selection has been made
  //console.log(selection);


  pop();


}
// here we have set it so when left click is pressed the canvas is cleared
function mousePressed() {
  clear();
 background(22);
}



//reset canvas on button click
