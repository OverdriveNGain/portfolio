// eslint-disable-next-line no-unused-vars
var landing1FunctionSetVisible;
// eslint-disable-next-line no-unused-vars
var landing1FunctionResize;

var landing1Function = (sketch) => {
  const DUSTNEIGHBORMAXDIST = 200;
  const floatingPointArea = 2 / 3;
  const md_bp = 768;
  const fontFile = "sketches/fonts/Montserrat-Regular.otf";
  const getDustCount = (area) => {
    return area * 0.00002 + 16;
  }

  let dustM;
  let shouldRemove = false;
  let element;
  let col1 = [78, 104, 255];
  let col2 = [255, 255, 255];
  let borderM;
  let topAreaHeight;
  let debugFont;

  sketch.preload = () => {
    debugFont = sketch.loadFont(fontFile, () => { }, (e) => { console.log(e) });
  }

  sketch.setup = () => {
    element = document.getElementById("landing1");
    if (element === null) {
      sketch.noLoop();
      return;
    }
    const about1 = document.getElementById("about1");
    const about2 = document.getElementById("about2");
    const canv = sketch.createCanvas(
      sketch.ceil(about1.offsetWidth),
      sketch.ceil(about1.offsetHeight + (about2.offsetHeight * 0.5)) + 5,
      sketch.WEBGL
    );
    // sketch.frameRate(30);
    topAreaHeight = about1.offsetHeight;
    col1 = sketch.color(col1[0], col1[1], col1[2]);
    col2 = sketch.color(col2[0], col2[1], col2[2]);

    // eslint-disable-next-line no-undef
    dustM = new DustManager(Math.round(getDustCount(sketch.height * sketch.width)), sketch.width, Math.floor(sketch.height * floatingPointArea), 1);
    // eslint-disable-next-line no-undef
    borderM = new ParticleManager(
      sketch.width,
      sketch.height - topAreaHeight * 0.5,
      topAreaHeight * 0.5,
      () => { return sketch.randomGaussian(); },
      col1,
      col2,
      1, 0.5);

    canv.parent('landing1');

    sketch.textFont(debugFont);
  }

  sketch.windowResized = () => {
    if (element == null)
      return;
    element = document.getElementById("landing1");
    if (element === null) {
      sketch.noLoop();
      return;
    }
    const about1 = document.getElementById("about1");
    const about2 = document.getElementById("about2");
    sketch.resizeCanvas(
      sketch.ceil(about1.offsetWidth),
      sketch.ceil(about1.offsetHeight + (about2.offsetHeight * 0.5))
    );
    topAreaHeight = about1.offsetHeight;
    // eslint-disable-next-line no-undef
    dustM.resize(sketch.width, Math.floor(sketch.height * floatingPointArea));
    // eslint-disable-next-line no-undef
    borderM.resize(
      sketch.width,
      sketch.height - topAreaHeight * 0.5,
      topAreaHeight * 0.5);
  }

  sketch.draw = () => {
    if (element === null)
      return;
    else if (shouldRemove) {
      sketch.remove();
      return;
    }
    sketch.translate(-sketch.width / 2, -sketch.height / 2);
    sketch.background(255);

    dustM.step()
    drawFloatingPoints();
    sketch.translate(0, 0, 10);
    if (sketch.frameCount < 85) {
      sketch.fill(255, 255, 255, 255 - sketch.frameCount * 3);
      sketch.rect(0, 0, sketch.width, sketch.height);
    }

    borderM.step();
    borderWaveSplashCheck();
    drawBorderWaves();

    sketch.fill(0);
    sketch.noStroke();
    sketch.text(sketch.round(sketch.frameRate()), 20, 100);
  }

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
    else if (remove)
      shouldRemove = true;
  }
  landing1FunctionResize = () => { sketch.windowResized(); }

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

    // sketch.strokeWeight(3);
    for (let i = 0; i < dustM.points.length; i++) {
      const point = dustM.points[i];
      sketch.stroke(255 + -50 * ((sketch.abs(point[property] * 2 - totalLength) / totalLength)));
      // eslint-disable-next-line no-undef
      let neighborRect = new Rect(point.x, point.y, DUSTNEIGHBORMAXDIST, DUSTNEIGHBORMAXDIST);
      let neighbors = [];
      dustM.quadtree.queryUppers(neighborRect, neighbors, i);
      let m = point.x;
      let n = point.y;
      for (let j = 0; j < neighbors.length; j++) {
        sketch.line(m, n, neighbors[j].x, neighbors[j].y);
      }
    };
  }

  const drawBorderWaves = () => {
    sketch.push();
    sketch.translate(0, topAreaHeight * 0.5);
    sketch.noStroke();
    sketch.fill(col1);
    sketch.rectMode(sketch.CORNERS);
    sketch.rect(0, topAreaHeight * 0.5, sketch.width, sketch.height);
    for (let i = borderM.particles.length - 1; i >= 0; i--) {
      let particle = borderM.particles[i];
      sketch.fill(particle.col);
      sketch.circle(particle.x, particle.y, particle.rad)
    }
    sketch.pop();
  }

  let pFrameMouseX = -1;
  let pFrameMouseY = -1;
  let lastMouseMoveOnFrame = -1;
  const borderWaveSplashCheck = () => {
    const pbelow = sketch.pmouseY > topAreaHeight;
    const below = sketch.mouseY > topAreaHeight;
    if (pbelow !== below) {
      if (Math.abs(sketch.frameCount - lastMouseMoveOnFrame) < 5) {
        borderM.splash(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
    }

    if (pFrameMouseX !== sketch.mouseX || pFrameMouseY !== sketch.mouseY) {
      lastMouseMoveOnFrame = sketch.frameCount;
    }

    pFrameMouseX = sketch.mouseX;
    pFrameMouseY = sketch.mouseY;
  }

};
// eslint-disable-next-line no-unused-vars
var p5_landing =
  // eslint-disable-next-line no-undef
  new p5(landing1Function);