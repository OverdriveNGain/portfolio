// FLOATING POINTS
const md_bp = 768;

let pointM = null;
let windowWidth = 500; // TODO: Deal with this
let windowHeight = 500; // TODO: Deal with this
let floatingPointsAreaHeight = null;
class PointManager {
  constructor(sketch) {
    this.pointCount = sketch.min(sketch.round(sketch.width * sketch.height * 0.00008), 30);
    this.points = [];
    this.regionCount = 4;
    this.regions = [];
    for (let i = 0; i < this.regionCount * this.regionCount; i++) {
      this.regions.push([]);
    }
  }

  frame(sketch) {
    sketch.stroke(0);
    pointM.step(sketch);
    pointM.draw(sketch);
    sketch.noStroke();
  }

  init(sketch) {
    const velMax = 1;
    const xUnit = (windowWidth / this.regionCount);
    const yUnit = (windowHeight / this.regionCount);
    this.points = [];
    for (let i = 0; i < this.pointCount; i++) {
      // let x = random(0, windowWidth);
      let x = sketch.random(0, windowWidth / 2);
      let y = sketch.random(0, windowHeight);
      this.points.push(new Point(x, y, sketch.random(-velMax, velMax), sketch.random(-velMax, velMax)));
      this.regions[sketch.floor(y / yUnit) * this.regionCount + sketch.floor(x / xUnit)] = i;
    };
  }

  draw(sketch) {
    if (windowWidth > md_bp) {
      for (let i = 0; i < this.pointCount; i++) {
        sketch.stroke(255 + -35 * ((sketch.abs(this.points[i].posx * 2 - sketch.windowWidth) * sketch.windowHeightRep)));
        // this.points[i].draw(i);
        sketch.strokeWeight(1);
        this.points[i].drawConnections(sketch, i, this.points);
      };
    }
    else {
      for (let i = 0; i < this.pointCount; i++) {
        sketch.stroke(255 + -35 * ((sketch.abs(this.points[i].posy * 2 - sketch.windowHeight) / sketch.windowWidth)));
        // this.points[i].draw(i);
        sketch.strokeWeight(1);
        this.points[i].drawConnections(sketch, i, this.points);
      };
    }
  }

  step(sketch) {
    for (let i = 0; i < this.pointCount; i++) {
      this.points[i].step(sketch);
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

  drawConnections(sketch, thisI, points) {
    for (let i = thisI + 1; i < points.length; i++) {
      if (sketch.abs(this.posx - points[i].posx) < 100 && sketch.abs(this.posy - points[i].posy) < 100) {
        sketch.line(this.posx, this.posy, points[i].posx, points[i].posy);
        sketch.line(sketch.width - this.posx, this.posy, sketch.width - points[i].posx, points[i].posy);
      }
    }
  }

  draw(sketch, thisI) {
    sketch.strokeWeight(sketch.noise(thisI, sketch.frameCount * 0.01) * 4);
    sketch.point(this.posx, this.posy);
    sketch.point(sketch.width - this.posx, this.posy);
  }

  step(sketch) {
    this.posx += this.velx;
    this.posy += this.vely;
    const margin = 50;
    if (sketch.width > md_bp) {
      if (this.posx < -margin)
        this.posx += sketch.width * 0.5 + margin;
      else if (this.posx > sketch.width * 0.5)
        this.posx -= sketch.width * 0.5 - margin;
    }
    else {
      if (this.posx < -margin)
        this.posx += sketch.width + margin * 2;
      else if (this.posx > sketch.width + margin)
        this.posx -= sketch.width - margin * 2;
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

  frame(sketch) {
    sketch.fill(col1);
    sketch.rectMode(sketch.CORNERS);
    sketch.rect(0, sketch.height - (borderHeight * 0.5), sketch.width, sketch.height);
    const pbelow = sketch.pmouseY > sketch.height - borderHeight * 0.5;
    const below = sketch.mouseY > sketch.height - borderHeight * 0.5;
    if (pbelow && !below) {
      borderM.splash(sketch, col1);
      // particleM.splash(color(255, 0, 255));
    }
    else if (!pbelow && below) {
      borderM.splash(sketch, col2);
      // particleM.splash(color(0, 255, 255));
    }
    borderM.draw(sketch);
    borderM.step(sketch);
  }

  constructor() {
    this.particles = [];
  }

  splash(sketch, col) {
    let velydif = sketch.mouseY - sketch.pmouseY;
    let speed = sketch.min(sketch.dist(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY) * 0.1, 10);
    let angle = sketch.atan2(sketch.mouseY - sketch.pmouseY, sketch.mouseX - sketch.pmouseX)
    const particleCount = sketch.min(60, sketch.floor(speed * 15));
    for (let i = 0; i < particleCount; i++) {
      let randomizedAngle = angle + (sketch.PI * sketch.randomGaussian() * 0.2);
      let velMod = sketch.abs(sketch.randomGaussian(0, 1));
      let velx = sketch.cos(randomizedAngle) * velMod * speed;
      let vely = sketch.sin(randomizedAngle) * velMod * sketch.min(speed, borderHeight * 0.02);
      if (vely > 0) {
        vely *= 0.4;
      }
      let rad = i * 1.5;
      let posy = sketch.height - borderHeight * 0.5 + (velydif > 0 ? -rad : rad) * 0.5;
      let particle = new Particle(sketch, sketch.pmouseX + sketch.randomGaussian() * 10, posy, velx, vely, col, rad);
      this.particles.push(particle);
    }
  }

  draw(sketch) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].draw(sketch);
    }
  }

  step(sketch) {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].step(sketch);
      if (this.particles[i].rad < 0.8) {
        this.particles.splice(i, 1);
        i--;
      }
    }
  }
}
class Particle {
  constructor(sketch, posx, posy, velx, vely, col, rad) {
    this.startposy = posy;
    this.startvely = vely;
    this.posx = posx;
    this.posy = posy;
    this.velx = velx;
    this.vely = vely;
    this.accx = -velx * sketch.random(0.01, 0.04);
    this.accy = -vely * sketch.random(0.01, 0.04);
    this.col = col;
    this.rad = rad;
  }

  draw(sketch) {
    sketch.fill(this.col);
    sketch.circle(this.posx, this.posy, this.rad)
  }
  step(sketch) {
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

const s = (sketch) => {

  sketch.setup = () => {
    const e = document.getElementById("sketch-floating-nodes");
    let canv = sketch.createCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));
    floatingPointsAreaHeight = sketch.round(e.offsetHeight) * 0.66666;
    borderHeight = sketch.round(e.offsetHeight) * 0.66666;

    pointM = new PointManager(sketch);

    pointM.init(sketch);
    // windowWidth = windowWidth;
    // windowHeight = windowHeight;

    borderM = new ParticleManager(sketch);
    col1 = sketch.color(col1[0], col1[1], col1[2]);
    col2 = sketch.color(col2[0], col2[1], col2[2]);

    canv.parent('sketch-floating-nodes');
  }


  sketch.draw = () => {
    sketch.background(255);

    pointM.frame(sketch)
    borderM.frame(sketch);

    sketch.fill(0);
    sketch.text(sketch.round(sketch.frameRate()), 50, sketch.height - 300);
  }

  sketch.windowResized = () => {
    const e = document.getElementById("sketch-floating-nodes");
    sketch.resizeCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));
    floatingPointsAreaHeight = sketch.round(e.offsetHeight) * 0.66666;
    borderHeight = sketch.round(e.offsetHeight) / 3;

    pointM.init(sketch);
    // windowWidthRep = 1 / windowWidth;
    // windowHeightRep = 1 / windowHeight;

    borderM = new ParticleManager(sketch);
  }
};
// eslint-disable-next-line no-unused-vars
let p5_landing =
  // eslint-disable-next-line no-undef
  new p5(s);