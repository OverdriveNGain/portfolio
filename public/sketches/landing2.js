var landing2Function = (sketch) => {

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

    let col2 = [199, 0, 0];
    let col1 = [255, 255, 255];
    let borderM;

    sketch.setup = () => {
        const e = document.getElementById("landing2");
        let canv = sketch.createCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));

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
        const e = document.getElementById("landing2");
        sketch.resizeCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));

        // eslint-disable-next-line no-undef
        borderM = new ParticleManager(
            sketch.width,
            sketch.height,
            () => { return sketch.randomGaussian(); },
            col1,
            col2);
    }

    sketch.draw = () => {
        sketch.background(255);
        borderM.step();
        borderWaveSplashCheck();
        drawBorderWaves();

        sketch.fill(0);
        sketch.text(sketch.round(sketch.frameRate()), 50, sketch.height - 300);
    }
};
// eslint-disable-next-line no-unused-vars
let p5_landing2 =
    // eslint-disable-next-line no-undef
    new p5(landing2Function);