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
    step(sketch) {
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