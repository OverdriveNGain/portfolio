// eslint-disable-next-line no-unused-vars
var landing2FunctionSetVisible;

var landing2Function = (sketch) => {

    let col2 = [78, 104, 255];
    let col1 = [255, 255, 255];
    let borderM;
    let shouldRemove = false;
    let element;

    sketch.setup = () => {
        element = document.getElementById("landing2");
        if (element === null) {
            sketch.noLoop();
            return;
        }
        const about2 = document.getElementById("about2");
        const about3 = document.getElementById("about3");
        element.style.top = `calc(-0.5 * ${about2.offsetHeight}px)`;
        const canv = sketch.createCanvas(
            sketch.round(about2.offsetWidth),
            sketch.round((about2.offsetHeight + about3.offsetHeight) / 2)
        );

        col1 = sketch.color(col1[0], col1[1], col1[2]);
        col2 = sketch.color(col2[0], col2[1], col2[2]);

        // eslint-disable-next-line no-undef
        borderM = new ParticleManager(
            sketch.width,
            sketch.height,
            () => { return sketch.randomGaussian(); },
            col1,
            col2);

        sketch.noStroke();
        canv.parent('landing2');
    }

    sketch.windowResized = () => {
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

        // eslint-disable-next-line no-undef
        borderM = new ParticleManager(
            sketch.width,
            sketch.height,
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
        borderM.step();
        borderWaveSplashCheck();
        drawBorderWaves();

        sketch.fill(0);
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

    const drawBorderWaves = () => {
        sketch.fill(col2);
        sketch.rectMode(sketch.CORNERS);
        sketch.rect(0, 0, sketch.width, sketch.height * 0.5);
        for (let i = borderM.particles.length - 1; i >= 0; i--) {
            // this.particles[i].draw(sketch);
            let particle = borderM.particles[i];
            sketch.fill(particle.col);
            sketch.circle(particle.x, particle.y, particle.rad)
        }
    }

    const borderWaveSplashCheck = () => {
        const pbelow = sketch.pmouseY > sketch.height - sketch.height * 0.5;
        const below = sketch.mouseY > sketch.height - sketch.height * 0.5;
        if (pbelow && !below) {
            borderM.splash(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY, 0.4, 0.4);
        }
        else if (!pbelow && below) {
            borderM.splash(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY, 0.4, 0.4);
        }
    }
};
// eslint-disable-next-line no-unused-vars
var p5_landing2 =
    // eslint-disable-next-line no-undef
    new p5(landing2Function);