/* eslint no-undef: 0 */

let pointManager = null;
let windowWidthRep = null;
let windowHeightRep = null;

class PointManager {
  constructor() {
    this.pointCount = round(windowWidth * windowHeight * 0.000217);
    this.points = [];
    this.regionCount = 4;
    this.regions = [];
    for (let i = 0; i < this.regionCount * this.regionCount; i++) {
      this.regions.push([]);
    }
  }

  init() {
    const velMax = 1;
    const xUnit = (windowWidth / this.regionCount);
    const yUnit = (windowHeight / this.regionCount);
    this.points = [];
    for (let i = 0; i < this.pointCount; i++) {
      let x = random(0, windowWidth);
      let y = random(0, windowHeight);
      this.points.push(new Point(x, y, random(-velMax, velMax), random(-velMax, velMax)));
      this.regions[floor(y / yUnit) * this.regionCount + floor(x / xUnit)] = i;
    };
  }

  draw() {
    if (windowWidth > windowHeight) {
      for (let i = 0; i < this.pointCount; i++) {
        stroke(255 + -30 * ((abs(this.points[i].posx * 2 - windowWidth) * windowHeightRep)));
        this.points[i].draw(i);
        strokeWeight(1);
        this.points[i].drawConnections(i, this.points);
      };
    }
    else {
      for (let i = 0; i < this.pointCount; i++) {
        stroke(255 + -30 * ((abs(this.points[i].posy * 2 - windowHeight) * windowWidthRep)));
        this.points[i].draw(i);
        strokeWeight(1);
        this.points[i].drawConnections(i, this.points);
      };
    }
  }

  step() {
    for (let i = 0; i < this.pointCount; i++) {
      this.points[i].step();
    };
  }
}

class Point {
  constructor(posx, posy, velx, vely) {
    this.posx = posx;
    this.posy = posy;
    this.velx = velx;
    this.vely = vely;
    this.upperNeighbors = []
  }

  static distSquared(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return dx * dx + dy * dy;
  }

  drawConnections(thisI, points) {
    for (let i = thisI + 1; i < points.length; i++) {
      if (abs(this.posx - points[i].posx) < 100 && abs(this.posy - points[i].posy) < 100)
        // if (Point.distSquared(this.posx, this.posy, points[i].posx, points[i].posy) < (10000))
        line(this.posx, this.posy, points[i].posx, points[i].posy);
    }
  }

  draw(thisI) {
    strokeWeight(noise(thisI, frameCount * 0.01) * 4);
    point(this.posx, this.posy);
  }

  step() {
    this.posx += this.velx;
    this.posy += this.vely;
    const margin = 50;
    if (this.posx < -margin)
      this.posx += windowWidth + margin * 2;
    else if (this.posx > windowWidth + margin)
      this.posx -= windowWidth - margin * 2;
    if (this.posy < -margin)
      this.posy += windowHeight + margin * 2;
    else if (this.posy > windowHeight + margin)
      this.posy -= windowHeight - margin * 2;
  }
}

function setup() {
  let sketch = createCanvas(windowWidth, windowHeight);
  pointManager = new PointManager();
  frameRate(30);

  pointManager.init();
  windowWidthRep = 1 / windowWidth;
  windowHeightRep = 1 / windowHeight;

  sketch.parent('sketch-floating-nodes');
}
function draw() {
  background(255);
  pointManager.step();
  pointManager.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pointManager.init();
  windowWidthRep = 1 / windowWidth;
  windowHeightRep = 1 / windowHeight;
}