// if conditional statement ball bounce
// https://editor.p5js.org/whatmakeart/sketches/zADG89GZN
let x = 200;
let y = 200;
let speedX = 2;
let speedY = 3;
let ballSize = 50;
let allColors = [[227, 0, 34],[252, 194, 0],[0, 35, 149]];
let currentColor = 0;
let value = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(allColors[currentColor]);
}
function draw() {
  background(value, value, value);
  ellipse(x, y, ballSize, ballSize);
  x = x + speedX;
  y = y + speedY;
  // check if the currentColor is larger than the list of colors
  if (currentColor >= allColors.length) {
      currentColor = 0;
    }
  fill(allColors[currentColor]);
  
  
  // AND &&
  // OR ||
  if (x > width - ballSize / 2 || x < ballSize / 2) {
    currentColor = currentColor + 1
  
    //cycling through the values 0 -3
    console.log(x);
    speedX = speedX * -1;
  }
  if (y > height - ballSize / 2 || y < ballSize / 2) {
    currentColor = currentColor + 1
  
    //cycling through the values 0 -3
    console.log(y);
    speedY = speedY * -1;
  }
  if ((keyIsPressed === true) && (key === 'b')) {
  value = 0;
    allColors = [[0,227,193],[0,58,252],[149,114,0]];
  } else {
    value = 255;
    allColors = [[227, 0, 34],[252, 194, 0],[0, 35, 149]];
  } 
}
