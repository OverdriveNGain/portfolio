// eslint-disable-next-line no-unused-vars
var landing1FunctionSetVisible;

var landing1Function = (sketch) => {
  const DUSTNEIGHBORMAXDIST = 100;
  const floatingPointArea = 2 / 3;
  const md_bp = 768;
  let dustM;

  let shouldRemove = false;
  landing1FunctionSetVisible = (remove) => {
    if (remove === undefined) {
      const element = document.getElementById('landing1');
      let position = element.getBoundingClientRect();
      const isVisible = (position.top < window.innerHeight && position.bottom >= 0);
      if (isVisible)
        sketch.loop();
      else
        sketch.noLoop();
    }
    else {
      if (remove) {
        shouldRemove = true;
      }
    }
  }

  let element;
  sketch.setup = () => {
    element = document.getElementById("landing1");
    if (element === null) {
      sketch.noLoop();
      return;
    }
    const canv = sketch.createCanvas(sketch.round(element.offsetWidth), sketch.round(element.offsetHeight));

    col1 = sketch.color(col1[0], col1[1], col1[2]);
    col2 = sketch.color(col2[0], col2[1], col2[2]);

    // eslint-disable-next-line no-undef
    dustM = new DustManager(Math.round(getDustCount(sketch.height * sketch.width)), sketch.width, Math.floor(sketch.height * floatingPointArea), 1);
    // eslint-disable-next-line no-undef
    borderM = new ParticleManager(
      sketch.width,
      sketch.height * borderArea,
      () => { return sketch.randomGaussian(); },
      col1,
      col2);

    canv.parent('landing1');
  }

  sketch.windowResized = () => {
    element = document.getElementById("landing1");
    if (element === null) {
      sketch.noLoop();
      return;
    }
    sketch.resizeCanvas(sketch.round(element.offsetWidth), sketch.round(element.offsetHeight));
    // eslint-disable-next-line no-undef
    dustM = new DustManager(Math.round(getDustCount(sketch.height * sketch.width)), sketch.width, Math.floor(sketch.height * floatingPointArea), 1);
    // eslint-disable-next-line no-undef
    borderM = new ParticleManager(
      sketch.width,
      sketch.height * borderArea,
      () => { return sketch.randomGaussian(); },
      col1,
      col2);

  }

  sketch.draw = () => {
    if (element === null)
      return;
    else if (shouldRemove) {
      sketch.remove();
      return;
    }
    sketch.background(255);

    dustM.step()
    drawFloatingPoints();

    if (sketch.frameCount < 85) {
      sketch.fill(255, 255, 255, 255 - sketch.frameCount * 3);
      sketch.rect(0, 0, sketch.width, sketch.height);
    }

    borderM.step();
    borderWaveSplashCheck();
    drawBorderWaves();

    sketch.fill(0);
    sketch.noStroke();
    sketch.text(sketch.round(sketch.frameRate()), 50, sketch.height - 300);
  }

  const drawFloatingPoints = () => {
    let totalLength, property;
    sketch.strokeWeight(1);
    if (sketch.width > md_bp) {
      totalLength = sketch.width;
      property = "x";
    }
    else {
      totalLength = sketch.height * floatingPointArea;
      property = "y";
    }

    for (let i = 0; i < dustM.points.length; i++) {
      const point = dustM.points[i];
      sketch.stroke(255 + -140 * ((sketch.abs(point[property] * 2 - totalLength) / totalLength)));
      // eslint-disable-next-line no-undef
      let neighborRect = new Rect(point.x, point.y, DUSTNEIGHBORMAXDIST, DUSTNEIGHBORMAXDIST);
      let neighbors = [];
      dustM.quadtree.queryUppers(neighborRect, neighbors, i);
      for (let neighbor of neighbors) {
        sketch.line(point.x, point.y, neighbor.x, neighbor.y);
      }
    };
  }

  let col1 = [78, 104, 255];
  let col2 = [255, 255, 255];
  const borderArea = 2 / 3;
  let borderM;

  const drawBorderWaves = () => {
    sketch.push();
    sketch.translate(0, sketch.height * (1 - borderArea));
    sketch.noStroke();
    sketch.fill(col1);
    sketch.rectMode(sketch.CORNERS);
    const bheight = sketch.height * borderArea;
    sketch.rect(0, bheight * 0.5, sketch.width, bheight);
    for (let i = borderM.particles.length - 1; i >= 0; i--) {
      // this.particles[i].draw(sketch);
      let particle = borderM.particles[i];
      sketch.fill(particle.col);
      sketch.circle(particle.x, particle.y, particle.rad)
    }
    sketch.pop();
  }

  const borderWaveSplashCheck = () => {
    const pbelow = sketch.pmouseY > (sketch.height - sketch.height * borderArea * 0.5);
    const below = sketch.mouseY > (sketch.height - sketch.height * borderArea * 0.5);
    if (pbelow !== below) {
      borderM.splash(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY, 1, 0.4);
    }
  }

  const getDustCount = (area) => {
    return area * 0.00008 + 16;
  }

};
// eslint-disable-next-line no-unused-vars
var p5_landing =
  // eslint-disable-next-line no-undef
  new p5(landing1Function);