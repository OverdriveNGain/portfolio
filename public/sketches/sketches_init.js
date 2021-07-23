/* eslint-disable no-unused-vars */

class DustManager {
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
            let nfp = new Dust(x, y, maxvel * 2 * Math.random() - maxvel, maxvel * 2 * Math.random() - maxvel);
            this.points.push(nfp);
        };
    }
    step() {
        for (let i = 0; i < this.pointCount; i++) {
            let point = this.points[i];

            point.x += point.vx;
            point.y += point.vy;

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
class Dust {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
}

class ParticleManager {
    constructor(width, height, gaussianFunction, colTop, colBot) {
        this.frame = 0;
        this.particles = [];
        this.randomSplashOnFrame = this.randomSplashInterval();
        this.width = width;
        this.height = height;
        this.gaussian = gaussianFunction;
        this.colTop = colTop;
        this.colBot = colBot;
    }
    step() {
        this.frame++;
        if (this.frame === this.randomSplashOnFrame) {
            this.splash();
            this.randomSplashOnFrame = this.randomSplashOnFrame + this.randomSplashInterval();
        }

        for (let i = 0; i < this.particles.length; i++) {
            let particle = this.particles[i];

            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vx += particle.accx;
            particle.vy += particle.accy;
            particle.rad -= 0.3;

            if (particle.startvy < 0) {
                if (particle.y > particle.starty && particle.vy > 0)
                    particle.rad -= 0.8;
            }
            else {
                if (particle.y < particle.starty && particle.vy < 0)
                    particle.rad -= 0.8;
            }

            if (particle.rad < 0.8) {
                this.particles.splice(i, 1);
                i--;
            }
        }
    }

    splash(mouseX, mouseY, pmouseX, pmouseY, upMultiplier, downMultiplier) {
        let col, velydif;
        if (mouseX === undefined) {
            mouseX = Math.random() * this.width;
            pmouseX = mouseX + (Math.random() * 5);
            if (Math.random() > 0.5) {
                mouseY = this.height / 2 - 12;
                pmouseY = this.height / 2 + 12;
                col = this.colTop;
            }
            else {
                mouseY = this.height / 2 + 12;
                pmouseY = this.height / 2 - 12;
                col = this.colBot;
            }
            velydif = mouseY - pmouseY
        }
        else {
            velydif = mouseY - pmouseY;
            col = velydif > 0 ? this.colBot : this.colTop;
        }
        let speed = Math.min(Math.hypot(mouseX - pmouseX, mouseY - pmouseY) * 0.1, 10);
        let angle = Math.atan2(mouseY - pmouseY, mouseX - pmouseX)
        const particleCount = Math.min(60, Math.floor(speed * 15));
        for (let i = 0; i < particleCount; i++) {
            let randomizedAngle = angle + (Math.PI * this.gaussian() * 0.2);
            let velMod = Math.abs(this.gaussian());
            let velx = Math.cos(randomizedAngle) * velMod * speed;
            let vely = Math.sin(randomizedAngle) * velMod * Math.min(speed, this.height * 0.02);
            if (vely > 0) {
                vely *= downMultiplier ?? 1;
            }
            else
                vely *= upMultiplier ?? 1;
            let rad = i * 1.5;
            let posy = (this.height + (velydif > 0 ? -rad : rad)) * 0.5;
            let particle = new Particle(pmouseX + this.gaussian() * 10, posy, velx, vely, col, rad);
            this.particles.push(particle);
        }
    }

    randomSplashInterval() {
        return 20;
    }
}
class Particle {
    constructor(x, y, vx, vy, col, rad) {
        const r1 = Math.random() * 0.03 + 0.01;
        const r2 = Math.random() * 0.03 + 0.01;
        this.starty = y;
        this.startvy = vy;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        // this.accx = -vx * sketch.random(0.01, 0.04);
        // this.accy = -vy * sketch.random(0.01, 0.04);
        this.accx = -vx * r1;
        this.accy = -vy * r2;
        this.col = col;
        this.rad = rad;
    }
}