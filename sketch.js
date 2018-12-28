
let points;
let current;
let percent = 0.5;
let previous = [];
let n 
function setup() {
  createCanvas(windowWidth, windowHeight - 20);
  points = [];
  n = document.getElementById("select").value;

  for (let i = 0; i < n; i++) {
    // let v = createVector(random(width), random(height));
    let angle = i * TWO_PI / n;
    let v = p5.Vector.fromAngle(angle);
    v.mult(width / 4.3);
    v.add(width / 2, height / 2);
    points.push(v);
  }

  reset();
}

function reset() {
  current = createVector(random(width), random(height));
  background(0);
  stroke(255);
  strokeWeight(8);
  for (let p of points) {
    point(p.x, p.y);
  }
}

function draw() {

  for (let i = 0; i < 1000; i++) {
    strokeWeight(1);
    stroke(255);
    let next = random(points);

    if (n == 3){
      current.x = lerp(current.x, next.x, percent);
      current.y = lerp(current.y, next.y, percent);
      point(current.x, current.y);
    }
    if(n == 4){
      if(next !== previous[previous.length -1] && next !== previous[previous.length -3]){
        current.x = lerp(current.x, next.x, percent);
        current.y = lerp(current.y, next.y, percent);
        point(current.x, current.y);
      }
    }
    if(n == 5){
      if (next !== previous[previous.length - 1]) {
        current.x = lerp(current.x, next.x, percent);
        current.y = lerp(current.y, next.y, percent);
        point(current.x, current.y);
      }
    }
    
    if(n == 6 || n == 7){
      current.x = lerp(current.x, next.x, percent);
      current.y = lerp(current.y, next.y, percent);
      point(current.x, current.y);
    }

    if(n == 8 ){
      if(next !== previous[previous.length -1] && next !== previous[previous.length -3]){
        current.x = lerp(current.x, next.x, percent);
        current.y = lerp(current.y, next.y, percent);
        point(current.x, current.y);
      }
    }
    if(n == 9 ){
      if(next !== previous[previous.length - 1]) {
        current.x = lerp(current.x, next.x, percent);
        current.y = lerp(current.y, next.y, percent);
        point(current.x, current.y);
      }
    }
    if( n != 3 && n !=5){
      current.x = lerp(current.x, next.x, percent);
      current.y = lerp(current.y, next.y, percent);
      point(current.x, current.y);
    }


    previous.push(next)

  }
}