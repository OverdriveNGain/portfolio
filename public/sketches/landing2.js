var landing2Function = (sketch) => {
    // BORDER
    class ParticleManager {
        frame(sketch) {
            sketch.fill(sketch.col1);
            sketch.rectMode(sketch.CORNERS);
            sketch.rect(0, 0, sketch.width, sketch.height * 0.5);
            const pbelow = sketch.pmouseY > sketch.height - sketch.height * 0.5;
            const below = sketch.mouseY > sketch.height - sketch.height * 0.5;
            if (pbelow && !below) {
                sketch.borderM.splash(sketch, sketch.col2);
                // particleM.splash(color(255, 0, 255));
            }
            else if (!pbelow && below) {
                sketch.borderM.splash(sketch, sketch.col1);
                // particleM.splash(color(0, 255, 255));
            }
            sketch.borderM.draw(sketch);
            sketch.borderM.step(sketch);
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
                let vely = sketch.sin(randomizedAngle) * velMod * sketch.min(speed, sketch.height * 0.02);
                vely *= 0.2;
                let rad = i * 1.5;
                let posy = sketch.height - sketch.height * 0.5 + (velydif > 0 ? -rad : rad) * 0.5;
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

    sketch.col1 = [199, 0, 0];
    sketch.col2 = [255, 255, 255];
    sketch.borderM = null;
    sketch.randomSplashOnFrame = null;

    sketch.setup = () => {
        const e = document.getElementById("landing2");
        let canv = sketch.createCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));

        sketch.borderM = new ParticleManager(sketch);
        sketch.col1 = sketch.color(sketch.col1[0], sketch.col1[1], sketch.col1[2]);
        sketch.col2 = sketch.color(sketch.col2[0], sketch.col2[1], sketch.col2[2]);

        sketch.noStroke();
        canv.parent('landing2');
    }

    sketch.windowResized = () => {
        const e = document.getElementById("landing2");
        sketch.resizeCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));

        sketch.borderM = new ParticleManager(sketch);
    }

    sketch.draw = () => {
        sketch.background(255);
        sketch.borderM.frame(sketch);

        sketch.fill(0);
        sketch.text(sketch.round(sketch.frameRate()), 50, sketch.height - 300);
    }
};
// eslint-disable-next-line no-unused-vars
let p5_landing2 =
    // eslint-disable-next-line no-undef
    new p5(landing2Function);