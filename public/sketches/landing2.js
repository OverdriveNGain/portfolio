// eslint-disable-next-line no-unused-vars
var landing2FunctionSetVisible;
// eslint-disable-next-line no-unused-vars
var landing2FunctionResize;

var landing2Function = (sketch) => {

    const fontFile = "sketches/fonts/Montserrat-Regular.otf";

    let col2 = [78, 104, 255];
    let col1 = [255, 255, 255];
    let borderM;
    let shouldRemove = false;
    let element;
    let topAreaHeight;
    let debugFont;

    sketch.preload = () => {
        debugFont = sketch.loadFont(fontFile, () => { }, (e) => { console.log(e) });
    }

    sketch.setup = () => {
        element = document.getElementById("landing2");
        if (element === null) {
            shouldRemove = true;
            return;
        }
        const about2 = document.getElementById("about2");
        const about3 = document.getElementById("about3");
        element.style.top = `calc(-0.5 * ${about2.offsetHeight}px)`;
        const canv = sketch.createCanvas(
            sketch.round(about2.offsetWidth),
            sketch.round((about2.offsetHeight + about3.offsetHeight) / 2),
            sketch.WEBGL
        );
        // sketch.frameRate(30);
        topAreaHeight = about2.offsetHeight * 0.5;
        col1 = sketch.color(col1[0], col1[1], col1[2]);
        col2 = sketch.color(col2[0], col2[1], col2[2]);

        // eslint-disable-next-line no-undef
        borderM = new ParticleManager(
            sketch.width,
            sketch.height,
            topAreaHeight,
            () => { return sketch.randomGaussian(); },
            col1,
            col2,
            0.5, 0.5);

        sketch.noStroke();
        canv.parent('landing2');

        sketch.textFont(debugFont);
    }

    sketch.windowResized = () => {
        if (element == null)
            return;
        element = document.getElementById("landing2");
        if (element === null) {
            sketch.noLoop();
            return;
        }
        const about2 = document.getElementById("about2");
        const about3 = document.getElementById("about3");
        element.style.top = `calc(-0.5 * ${about2.offsetHeight}px)`;
        sketch.resizeCanvas(
            sketch.round(about2.offsetWidth),
            sketch.round((about2.offsetHeight + about3.offsetHeight) / 2)
        );
        topAreaHeight = about2.offsetHeight * 0.5;
        // eslint-disable-next-line no-undef
        borderM.resize(
            sketch.width,
            sketch.height,
            topAreaHeight);
    }

    sketch.draw = () => {
        if (shouldRemove) {
            sketch.remove();
            return;
        }
        else if (element === null)
            return;
        sketch.translate(-sketch.width / 2, -sketch.height / 2);
        sketch.background(255);
        borderM.step();
        borderWaveSplashCheck();
        drawBorderWaves();

        sketch.fill(0);
        sketch.translate(0, 0, 10);
        sketch.text(sketch.round(sketch.frameRate()), 50, sketch.height - 300);
    }

    landing2FunctionSetVisible = (remove) => {
        if (remove === undefined) {
            const element = document.getElementById('landing2');
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
    landing2FunctionResize = () => {
        sketch.windowResized();
    }

    const drawBorderWaves = () => {
        sketch.fill(col2);
        sketch.rectMode(sketch.CORNERS);
        sketch.rect(0, 0, sketch.width, topAreaHeight);
        for (let i = borderM.particles.length - 1; i >= 0; i--) {
            // this.particles[i].draw(sketch);
            let particle = borderM.particles[i];
            sketch.fill(particle.col);
            sketch.circle(particle.x, particle.y, particle.rad)
        }
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
var p5_landing2 =
    // eslint-disable-next-line no-undef
    new p5(landing2Function);