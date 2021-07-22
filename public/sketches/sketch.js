/* eslint no-undef: 0 */

// FLOATING POINTS
const md_bp = 768;

let pointM = null;
let windowWidthRep = null;
let windowHeightRep = null;
let floatingPointsAreaHeight = null;
class PointManager {
  constructor() {
    this.pointCount = round(width * height * 0.00008);
    this.points = [];
    this.regionCount = 4;
    this.regions = [];
    for (let i = 0; i < this.regionCount * this.regionCount; i++) {
      this.regions.push([]);
    }
  }

  frame() {
    stroke(0);
    pointM.step();
    pointM.draw();
    noStroke();
  }

  init() {
    const velMax = 1;
    const xUnit = (windowWidth / this.regionCount);
    const yUnit = (windowHeight / this.regionCount);
    this.points = [];
    for (let i = 0; i < this.pointCount; i++) {
      // let x = random(0, windowWidth);
      let x = random(0, windowWidth / 2);
      let y = random(0, windowHeight);
      this.points.push(new Point(x, y, random(-velMax, velMax), random(-velMax, velMax)));
      this.regions[floor(y / yUnit) * this.regionCount + floor(x / xUnit)] = i;
    };
  }

  draw() {
    if (windowWidth > md_bp) {
      for (let i = 0; i < this.pointCount; i++) {
        stroke(255 + -35 * ((abs(this.points[i].posx * 2 - windowWidth) * windowHeightRep)));
        // this.points[i].draw(i);
        strokeWeight(1);
        this.points[i].drawConnections(i, this.points);
      };
    }
    else {
      for (let i = 0; i < this.pointCount; i++) {
        stroke(255 + -35 * ((abs(this.points[i].posy * 2 - windowHeight) * windowWidthRep)));
        // this.points[i].draw(i);
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
      if (abs(this.posx - points[i].posx) < 100 && abs(this.posy - points[i].posy) < 100) {
        line(this.posx, this.posy, points[i].posx, points[i].posy);
        line(width - this.posx, this.posy, width - points[i].posx, points[i].posy);
      }
    }
  }

  draw(thisI) {
    strokeWeight(noise(thisI, frameCount * 0.01) * 4);
    point(this.posx, this.posy);
    point(width - this.posx, this.posy);
  }

  step() {
    this.posx += this.velx;
    this.posy += this.vely;
    const margin = 50;
    if (width > md_bp) {
      if (this.posx < -margin)
        this.posx += width * 0.5 + margin;
      else if (this.posx > width * 0.5)
        this.posx -= width * 0.5 - margin;
    }
    else {
      if (this.posx < -margin)
        this.posx += width + margin * 2;
      else if (this.posx > width + margin)
        this.posx -= width - margin * 2;
    }

    if (this.posy < -margin)
      this.posy += floatingPointsAreaHeight + margin * 2;
    else if (this.posy > floatingPointsAreaHeight + margin)
      this.posy -= floatingPointsAreaHeight + margin * 2;
  }
}

// BORDER
let col1 = [199, 0, 0];
let col2 = [255, 255, 255];
let borderM = null;
let borderHeight = null;
let randomSplashOnFrame = null;
class ParticleManager {

  frame() {
    fill(col1);
    rectMode(CORNERS);
    rect(0, height - (borderHeight * 0.5), width, height);
    const pbelow = pmouseY > height - borderHeight * 0.5;
    const below = mouseY > height - borderHeight * 0.5;
    if (pbelow && !below) {
      borderM.splash(col1);
      // particleM.splash(color(255, 0, 255));
    }
    else if (!pbelow && below) {
      borderM.splash(col2);
      // particleM.splash(color(0, 255, 255));
    }
    borderM.draw();
    borderM.step();
  }

  constructor() {
    this.particles = [];
  }

  splash(col) {
    let velydif = mouseY - pmouseY;
    let speed = min(dist(mouseX, mouseY, pmouseX, pmouseY) * 0.1, 10);
    let angle = atan2(mouseY - pmouseY, mouseX - pmouseX)
    const particleCount = min(60, floor(speed * 15));
    for (let i = 0; i < particleCount; i++) {
      let randomizedAngle = angle + (PI * randomGaussian() * 0.2);
      let velMod = abs(randomGaussian(0, 1));
      let velx = cos(randomizedAngle) * velMod * speed;
      let vely = sin(randomizedAngle) * velMod * min(speed, borderHeight * 0.02);
      if (vely > 0) {
        vely *= 0.4;
      }
      let rad = i * 1.5;
      let posy = height - borderHeight * 0.5 + (velydif > 0 ? -rad : rad) * 0.5;
      let particle = new Particle(pmouseX + randomGaussian() * 10, posy, velx, vely, col, rad);
      this.particles.push(particle);
    }
  }

  draw() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].draw();
    }
  }

  step() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].step();
      if (this.particles[i].rad < 0.8) {
        this.particles.splice(i, 1);
        i--;
      }
    }
  }
}
class Particle {
  constructor(posx, posy, velx, vely, col, rad) {
    this.startposy = posy;
    this.startvely = vely;
    this.posx = posx;
    this.posy = posy;
    this.velx = velx;
    this.vely = vely;
    this.accx = -velx * random(0.01, 0.04);
    this.accy = -vely * random(0.01, 0.04);
    this.col = col;
    this.rad = rad;
  }

  draw() {
    fill(this.col);
    circle(this.posx, this.posy, this.rad)
  }
  step() {
    this.posx += this.velx;
    this.posy += this.vely;
    this.velx += this.accx;
    this.vely += this.accy;
    this.rad -= 0.3;

    if (this.startvely < 0) {
      if (this.posy > this.startposy && this.vely > 0)
        this.rad -= 0.8;
    }
    else {
      if (this.posy < this.startposy && this.vely < 0)
        this.rad -= 0.8;
    }
  }
}

function setup() {
  const e = document.getElementById("sketch-floating-nodes");
  let sketch = createCanvas(round(e.offsetWidth), round(e.offsetHeight));
  floatingPointsAreaHeight = round(e.offsetHeight) * 0.66666;
  borderHeight = round(e.offsetHeight) * 0.66666;

  pointM = new PointManager();

  pointM.init();
  windowWidthRep = 1 / windowWidth;
  windowHeightRep = 1 / windowHeight;

  borderM = new ParticleManager();
  col1 = color(col1[0], col1[1], col1[2]);
  col2 = color(col2[0], col2[1], col2[2]);

  sketch.parent('sketch-floating-nodes');
}


function draw() {
  background(255);

  pointM.frame()
  borderM.frame();

  fill(0);
  text(round(frameRate()), 50, height - 300);
}

function windowResized() {
  const e = document.getElementById("sketch-floating-nodes");
  resizeCanvas(round(e.offsetWidth), round(e.offsetHeight));
  floatingPointsAreaHeight = round(e.offsetHeight) * 0.66666;
  borderHeight = round(e.offsetHeight) / 3;

  pointM.init();
  windowWidthRep = 1 / windowWidth;
  windowHeightRep = 1 / windowHeight;

  borderM = new ParticleManager();

  col1 = color(col1[0], col1[1], col1[2]);
  col2 = color(col2[0], col2[1], col2[2]);

  sketch.parent('sketch-floating-nodes');
}