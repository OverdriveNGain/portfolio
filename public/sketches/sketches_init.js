/* eslint-disable no-unused-vars */

class DustManager {
    constructor(pointCount, width, height, maxvel) {
        this.pointCount = pointCount;
        this.points = [];
        this.regionCount = 4;
        this.width = width;
        this.height = height;
        this.points = [];
        this.quadtree = new QuadTree(5, new Rect(width / 2, height / 2, width, height));
        for (let i = 0; i < this.pointCount; i++) {
            let x = Math.random() * this.width;
            let y = Math.random() * this.height;
            let nfp = new Dust(x, y, maxvel * 2 * Math.random() - maxvel, maxvel * 2 * Math.random() - maxvel);
            this.points.push(nfp);
        };
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.quadtree = new QuadTree(5, new Rect(width / 2, height / 2, width, height));
    }
    step() {
        this.quadtree.clear();
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

            this.quadtree.insert(new QtPoint(point.x, point.y, i, null));
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
    constructor(width, height, topAreaHeight, gaussianFunction, colTop, colBot, upMultiplier, downMultiplier) {
        this.frame = 0;
        this.particles = [];
        this.topAreaHeight = topAreaHeight;
        this.randomSplashOnFrame = this.randomSplashInterval();
        this.width = width;
        this.height = height;
        this.gaussian = gaussianFunction;
        this.colTop = colTop;
        this.colBot = colBot;
        this.upMultiplier = upMultiplier;
        this.downMultiplier = downMultiplier;
    }
    resize(width, height, topAreaHeight) {
        this.topAreaHeight = topAreaHeight;
        this.width = width;
        this.height = height;
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
                if (particle.y > particle.starty)
                    particle.rad -= 2.0;
            }
            else {
                if (particle.y < particle.starty)
                    particle.rad -= 2.0;
            }

            if (particle.rad < 0.8) {
                this.particles.splice(i, 1);
                i--;
            }
        }
    }

    splash(mouseX, mouseY, pmouseX, pmouseY) {
        let col, velydif;
        if (mouseX === undefined) {
            mouseX = Math.random() * this.width;
            pmouseX = mouseX + (Math.random() * 5);
            if (Math.random() > 0.5) {
                mouseY = this.topAreaHeight - 12;
                pmouseY = this.topAreaHeight + 12;
                col = this.colTop;
            }
            else {
                mouseY = this.topAreaHeight + 12;
                pmouseY = this.topAreaHeight - 12;
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
                vely *= this.downMultiplier;
            }
            else {
                vely *= this.upMultiplier;
            }
            let rad = i * 1.5;
            let posy = this.topAreaHeight + ((velydif > 0 ? -rad : rad)) * 0.5;
            let particle = new Particle(pmouseX + this.gaussian() * 10, posy, velx, vely, col, rad);
            this.particles.push(particle);
        }
    }

    randomSplashInterval() {
        return 40;
    }
}
class Particle {
    constructor(x, y, vx, vy, col, rad) {
        const r1 = Math.random() * 0.06 + 0.03;
        const r2 = Math.random() * 0.06 + 0.03;
        this.starty = y;
        this.startvy = vy;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        // this.accx = -vx * sketch.random(0.01, 0.04);
        // this.accy = -vy * sketch.random(0.01, 0.04);
        this.accx = 0;
        this.accy = -vy * r2;
        this.col = col;
        this.rad = rad;
    }
}
class QuadTree {
    constructor(capacity, rect) {
        this.capacity = capacity;
        this.rect = rect;
        this.points = [];
        this.hasDivisions = false;
    }

    clear() {
        this.points = [];
        this.hasDivisions = false;
    }

    query(rect, arr) {
        for (let point of this.points) {
            if (rect.containsPoint(point))
                arr.push(point);
        }
        if (this.hasDivisions) {
            this.nw.query(rect, arr);
            this.ne.query(rect, arr);
            this.sw.query(rect, arr);
            this.se.query(rect, arr);
        }
    }

    queryUppers(rect, arr, value) {
        for (let point of this.points) {
            if (rect.containsPoint(point) && point.i > value)
                arr.push(point);
        }
        if (this.hasDivisions) {
            this.nw.queryUppers(rect, arr, value);
            this.ne.queryUppers(rect, arr, value);
            this.sw.queryUppers(rect, arr, value);
            this.se.queryUppers(rect, arr, value);
        }
    }

    insert(qt) {
        if (!this.rect.containsPoint(qt))
            return false

        if (this.points.length < this.capacity) {
            this.points.push(qt);
            return true;
        }
        else {

            if (!this.hasDivisions) {
                this.hasDivisions = true;
                this.nw = new QuadTree(this.capacity, new Rect(this.rect.x - this.rect.w * 0.25, this.rect.y - this.rect.h * 0.25, this.rect.w * 0.5, this.rect.h * 0.5));
                this.ne = new QuadTree(this.capacity, new Rect(this.rect.x + this.rect.w * 0.25, this.rect.y - this.rect.h * 0.25, this.rect.w * 0.5, this.rect.h * 0.5));
                this.sw = new QuadTree(this.capacity, new Rect(this.rect.x - this.rect.w * 0.25, this.rect.y + this.rect.h * 0.25, this.rect.w * 0.5, this.rect.h * 0.5));
                this.se = new QuadTree(this.capacity, new Rect(this.rect.x + this.rect.w * 0.25, this.rect.y + this.rect.h * 0.25, this.rect.w * 0.5, this.rect.h * 0.5));
            }

            if (!this.nw.insert(qt))
                if (!this.ne.insert(qt))
                    if (!this.sw.insert(qt))
                        this.se.insert(qt)
            return true;
        }
    }
}
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h
    }

    intersectsWithRect(rect) {
        return ((this.rect.x - rect.x) > ((this.rect.w + rect.w) * 0.5)) &&
            ((this.rect.y - rect.y) > ((this.rect.h + rect.h) * 0.5));
    }

    containsPoint(point) {
        if (Math.abs(point.x - this.x) > this.w * 0.5) {
            return false;
        }
        if (Math.abs(point.y - this.y) > this.h * 0.5) {
            return false;
        }
        return true;
    }
}
class QtPoint {
    constructor(x, y, i, data) {
        this.x = x;
        this.y = y;
        this.i = i;
        this.data = data;
    }
}
class SnowManager {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count
        this.snow = [];
        for (let i = 0; i < count; i++) {
            this.snow.push(new Snow(Math.random() * width, Math.random() * height, Math.random() * 5));
        }
    }
    resize(width, height,) {
        this.width = width;
        this.height = height;
    }
    step(leftBound, rightBound) {
        for (let i = 0; i < this.count; i++) {
            let snow = this.snow[i];
            snow.y += 1;
            if (!snow.isStatic) {
                snow.x += snow.velx;
                if (leftBound != null) {
                    if (snow.x < leftBound) {
                        snow.velx += 0.1 * snow.depth;
                    }
                    else if (snow.x > rightBound) {
                        snow.velx -= 0.1 * snow.depth;
                    }
                    else {
                        snow.velx *= 0.98;
                    }
                }
                else {
                    snow.velx *= 0.98;
                }
            }
            if (snow.y > this.height) {
                snow.y = -10;
                snow.x = Math.random() * this.width;
            }
        }
    }
}
class Snow {
    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.velx = 0;
        this.isStatic = Math.random() < 0.2;
        this.depth = Math.random();
    }
}
class BubbleManager {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
        this.bubbles = [];
        for (let i = 0; i < count; i++) {
            this.bubbles.push(new Bubble(width, height));
        }
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
    }
    step() {
        for (let i = 0; i < this.count; i++) {
            let bubble = this.bubbles[i];
            bubble.x += bubble.vx;
            bubble.y += bubble.vy;
            bubble.life += 0.01;
            if (bubble.x + bubble.r < 0 ||
                bubble.y + bubble.r < 0 || bubble.x - bubble.r > this.width ||
                bubble.y - bubble.r > this.height)
                bubble.reset(this.width, this.height);
        }
    }
}
class Bubble {
    constructor(width, height) {
        this.reset(width, height);
    }

    reset(width, height) {
        this.x = width / 2;
        this.y = height / 2;
        this.r = Math.random() * 200 + 30;
        let v = Math.random() * 2 + 1;
        let theta = Math.random() * 3.141592653 * 2;
        this.vx = Math.cos(theta) * v;
        this.vy = Math.sin(theta) * v;
        this.life = 0;
    }
}
