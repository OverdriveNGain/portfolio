// import FloatingPointManager from "./sketches_init";

class FloatingPointManager {
  constructor(pointCount, width, height, maxvel) {
    this.pointCount = pointCount;
    this.points = [];
    this.regionCount = 4;
    this.width = width;
    this.height = height;
    this.points = [];
    for (let i = 0; i < this.pointCount; i++) {
      let x = Math.random() * this.width;
      let y = Math.random() * this.height;
      this.points.push(new FloatingPoint(x, y, maxvel * 2 * Math.random() - maxvel, maxvel * 2 * Math.random() - maxvel));
    };
  }
  step() {
    for (let i = 0; i < this.pointCount; i++) {
      let point = this.points[i];

      point.x += this.vx;
      point.y += this.vy;

      if (point.y < 0)
        point.y += (this.height - 0.1);
      else if (point.y > this.height)
        point.y -= (this.height - 0.1);
      if (point.x < 0)
        point.x += (this.width - 0.1);
      else if (point.x > this.width)
        point.x -= (this.width - 0.1);
    };
  }
}
class FloatingPoint {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }
}

var landing1Function = (sketch) => {

  const floatingPointArea = 2 / 3;
  const borderArea = 2 / 3;
  const md_bp = 768;
  let floatingPointM;

  const drawFloatingPoints = (sketch) => {
    if (sketch.width > md_bp) {
      for (let i = 0; i < floatingPointM.points.length; i++) {
        sketch.stroke(255 + -140 * ((sketch.abs(floatingPointM.points[i].posx * 2 - sketch.width) / sketch.width)));
        // sketch.stroke(255, 0, 0);
        // this.points[i].draw(i);
        sketch.strokeWeight(1);
        floatingPointM.points[i].drawConnections(sketch, i, floatingPointM.points);
      };
    }
    else {
      const pointsHeight = sketch.height * floatingPointArea;
      for (let i = 0; i < floatingPointM.points.length; i++) {
        sketch.stroke(255 + -140 * ((sketch.abs(floatingPointM.points[i].posy * 2 - pointsHeight) / pointsHeight)));
        // sketch.stroke(255, 0, 255);
        // this.points[i].draw(i);
        sketch.strokeWeight(1);
        drawConnections(sketch, i, floatingPointM.points);
      };
    }
  }

  const drawConnections = (sketch, thisI, points) => {
    for (let i = thisI + 1; i < points.length; i++) {
      let point = floatingPointM.points[i];
      if (sketch.abs(point.posx - points[i].posx) < 100 && sketch.abs(point.posy - points[i].posy) < 100) {
        sketch.line(point.posx, point.posy, points[i].posx, points[i].posy);
        sketch.line(sketch.width - point.posx, point.posy, sketch.width - points[i].posx, points[i].posy);
      }
    }
  }

  // BORDER
  class ParticleManager {
    frame(sketch) {
      sketch.fill(sketch.col1);
      sketch.rectMode(sketch.CORNERS);
      sketch.rect(0, sketch.height - (sketch.borderHeight * 0.5), sketch.width, sketch.height);
      const pbelow = sketch.pmouseY > sketch.height - sketch.borderHeight * 0.5;
      const below = sketch.mouseY > sketch.height - sketch.borderHeight * 0.5;
      if (pbelow && !below) {
        sketch.borderM.splash(sketch, sketch.col1);
        // particleM.splash(color(255, 0, 255));
      }
      else if (!pbelow && below) {
        sketch.borderM.splash(sketch, sketch.col2);
        // particleM.splash(color(0, 255, 255));
      } else if (sketch.frameCount > sketch.randomSplashOnFrame) {
        sketch.borderM.splash(sketch);
        sketch.randomSplashOnFrame = sketch.borderM.getNextRandomSplash(sketch);
      }
      sketch.borderM.draw(sketch);
      sketch.borderM.step(sketch);
    }

    constructor() {
      this.particles = [];
    }

    splash(sketch, col) {
      // If only 1 argument is passed, assume a random splash
      let mouseX, mouseY, pmouseX, pmouseY;
      if (col === undefined) {
        mouseX = sketch.random() * sketch.width;
        pmouseX = mouseX + (sketch.random() * 5);
        if (sketch.random() > 0.5) {
          mouseY = sketch.height / 2 - 12;
          pmouseY = sketch.height / 2 + 12;
          col = sketch.col1;
        }
        else {
          mouseY = sketch.height / 2 + 12;
          pmouseY = sketch.height / 2 - 12;
          col = sketch.col2;
        }
        // col = sketch.color(255, 0, 255);
      }
      else {
        mouseX = sketch.mouseX;
        mouseY = sketch.mouseY;
        pmouseX = sketch.pmouseX;
        pmouseY = sketch.pmouseY;
      }
      let velydif = mouseY - pmouseY;
      let speed = sketch.min(sketch.dist(mouseX, mouseY, pmouseX, pmouseY) * 0.1, 10);
      let angle = sketch.atan2(mouseY - pmouseY, mouseX - pmouseX)
      const particleCount = sketch.min(60, sketch.floor(speed * 15));
      for (let i = 0; i < particleCount; i++) {
        let randomizedAngle = angle + (sketch.PI * sketch.randomGaussian() * 0.2);
        let velMod = sketch.abs(sketch.randomGaussian(0, 1));
        let velx = sketch.cos(randomizedAngle) * velMod * speed;
        let vely = sketch.sin(randomizedAngle) * velMod * sketch.min(speed, sketch.borderHeight * 0.02);
        if (vely > 0) {
          vely *= 0.4;
        }
        let rad = i * 1.5;
        let posy = sketch.height - sketch.borderHeight * 0.5 + (velydif > 0 ? -rad : rad) * 0.5;
        let particle = new Particle(sketch, pmouseX + sketch.randomGaussian() * 10, posy, velx, vely, col, rad);
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

    getNextRandomSplash(sketch) {
      return sketch.frameCount + 20;
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

  sketch.col1 = [199, 0, 0];
  sketch.col2 = [255, 255, 255];
  sketch.borderM = null;
  sketch.borderHeight = null;
  sketch.randomSplashOnFrame = null;

  sketch.setup = () => {
    const e = document.getElementById("landing1");
    let canv = sketch.createCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));
    // sketch.floatingPointsAreaHeight = sketch.round(e.offsetHeight) * 0.66666;
    sketch.borderHeight = sketch.round(e.offsetHeight) * 0.66666;

    // sketch.pointM = new PointManager(sketch);
    floatingPointM = new FloatingPointManager(100, sketch.width, Math.floor(sketch.height * floatingPointArea), 1);
    // sketch.pointM.init(sketch);
    sketch.borderM = new ParticleManager(sketch);
    sketch.randomSplashOnFrame = sketch.borderM.getNextRandomSplash(sketch);
    sketch.col1 = sketch.color(sketch.col1[0], sketch.col1[1], sketch.col1[2]);
    sketch.col2 = sketch.color(sketch.col2[0], sketch.col2[1], sketch.col2[2]);

    canv.parent('landing1');
  }

  sketch.windowResized = () => {
    const e = document.getElementById("landing1");
    sketch.resizeCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));
    // sketch.floatingPointsAreaHeight = sketch.round(e.offsetHeight) * 0.66666;
    sketch.borderHeight = sketch.round(e.offsetHeight) * 0.66666;

    sketch.pointM.init(sketch);

    sketch.borderM = new ParticleManager(sketch);

    sketch.randomSplashOnFrame = sketch.borderM.getNextRandomSplash(sketch);
  }

  sketch.draw = () => {
    sketch.background(255);

    floatingPointM.step()
    drawFloatingPoints(sketch);

    sketch.noStroke();
    sketch.borderM.frame(sketch);

    sketch.fill(0);
    sketch.text(sketch.round(sketch.frameRate()), 50, sketch.height - 300);
  }
};
// eslint-disable-next-line no-unused-vars
let p5_landing =
  // eslint-disable-next-line no-undef
  new p5(landing1Function);




  // FLOATING POINTS
  // class PointManager {
  //   constructor(sketch) {
  //     this.pointCount = sketch.min(sketch.round(sketch.width * sketch.height * 0.00008), 30);
  //     this.points = [];
  //     this.regionCount = 4;
  //   }

  //   frame(sketch) {
  //     sketch.stroke(0);
  //     sketch.pointM.step(sketch);
  //     sketch.pointM.draw(sketch);
  //     sketch.noStroke();
  //   }

  //   init(sketch) {
  //     const velMax = 1;
  //     this.points = [];
  //     for (let i = 0; i < this.pointCount; i++) {
  //       let x = sketch.random(0, sketch.width / 2);
  //       let y = sketch.random(0, sketch.height);
  //       this.points.push(new Point(x, y, sketch.random(-velMax, velMax), sketch.random(-velMax, velMax)));
  //     };
  //   }

  //   draw(sketch) {
  //     if (sketch.width > md_bp) {
  //       for (let i = 0; i < this.pointCount; i++) {
  //         sketch.stroke(255 + -140 * ((sketch.abs(this.points[i].posx * 2 - sketch.width) / sketch.width)));
  //         // sketch.stroke(255, 0, 0);
  //         // this.points[i].draw(i);
  //         sketch.strokeWeight(1);
  //         this.points[i].drawConnections(sketch, i, this.points);
  //       };
  //     }
  //     else {
  //       const pointsHeight = (sketch.height - sketch.borderHeight * 0.5);
  //       for (let i = 0; i < this.pointCount; i++) {
  //         sketch.stroke(255 + -140 * ((sketch.abs(this.points[i].posy * 2 - pointsHeight) / pointsHeight)));
  //         // sketch.stroke(255, 0, 255);
  //         // this.points[i].draw(i);
  //         sketch.strokeWeight(1);
  //         this.points[i].drawConnections(sketch, i, this.points);
  //       };
  //     }
  //   }

  //   step(sketch) {
  //     for (let i = 0; i < this.pointCount; i++) {
  //       this.points[i].step(sketch);
  //     };
  //   }
  // }
  // class Point {
  //   constructor(posx, posy, velx, vely) {
  //     this.posx = posx;
  //     this.posy = posy;
  //     this.velx = velx;
  //     this.vely = vely;
  //     this.upperNeighbors = []
  //   }

  //   static distSquared(x1, y1, x2, y2) {
  //     let dx = x2 - x1;
  //     let dy = y2 - y1;
  //     return dx * dx + dy * dy;
  //   }

  //   drawConnections(sketch, thisI, points) {
  //     for (let i = thisI + 1; i < points.length; i++) {
  //       if (sketch.abs(this.posx - points[i].posx) < 100 && sketch.abs(this.posy - points[i].posy) < 100) {
  //         sketch.line(this.posx, this.posy, points[i].posx, points[i].posy);
  //         sketch.line(sketch.width - this.posx, this.posy, sketch.width - points[i].posx, points[i].posy);
  //       }
  //     }
  //   }

  //   draw(sketch, thisI) {
  //     sketch.strokeWeight(sketch.noise(thisI, sketch.frameCount * 0.01) * 4);
  //     sketch.point(this.posx, this.posy);
  //     sketch.point(sketch.width - this.posx, this.posy);
  //   }

  //   step(sketch) {
  //     this.posx += this.velx;
  //     this.posy += this.vely;
  //     const margin = 50;
  //     if (sketch.width > md_bp) {
  //       if (this.posx < -margin)
  //         this.posx += sketch.width * 0.5 + margin;
  //       else if (this.posx > sketch.width * 0.5)
  //         this.posx -= sketch.width * 0.5 - margin;
  //     }
  //     else {
  //       if (this.posx < -margin)
  //         this.posx += sketch.width + margin * 2;
  //       else if (this.posx > sketch.width + margin)
  //         this.posx -= sketch.width - margin * 2;
  //     }

  //     if (this.posy < -margin)
  //       this.posy += sketch.floatingPointsAreaHeight + margin * 2;
  //     else if (this.posy > sketch.floatingPointsAreaHeight + margin)
  //       this.posy -= sketch.floatingPointsAreaHeight + margin * 2;
  //   }
  // }