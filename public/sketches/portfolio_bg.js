// eslint-disable-next-line no-unused-vars
var portfolioBgStop;

var portfolioBgFunction = (sketch) => {
    let shouldRemove = false;
    portfolioBgStop = (remove) => {
        shouldRemove = true;
    }

    let element;
    let bubbleM;
    sketch.setup = () => {
        element = document.getElementById("portfolio-bg");
        if (element === null) {
            sketch.noLoop();
            return;
        }
        const canv = sketch.createCanvas(sketch.round(element.offsetWidth), sketch.round(element.offsetHeight));
        canv.parent('portfolio-bg');
        sketch.rectMode(sketch.CORNERS);
        sketch.noStroke();

        // eslint-disable-next-line no-undef
        bubbleM = new BubbleManager(sketch.width, sketch.height, 25);
    }

    sketch.windowResized = () => {
        element = document.getElementById("portfolio-bg");
        if (element === null) {
            sketch.noLoop();
            return;
        }
        sketch.resizeCanvas(sketch.round(element.offsetWidth), sketch.round(element.offsetHeight));
        // eslint-disable-next-line no-undef
        bubbleM.resize(sketch.width, sketch.height);
    }

    sketch.draw = () => {
        if (element === null)
            return;
        else if (shouldRemove) {
            sketch.remove();
            return;
        }
        sketch.background(255, 255, 255);
        sketch.fill(0, 0, 255, 10);

        bubbleM.step();
        for (let i = 0; i < bubbleM.count; i++) {
            let bubble = bubbleM.bubbles[i];
            sketch.circle(bubble.x, bubble.y, bubble.r, bubble.r);
        }
        sketch.fill(0);
        sketch.text(sketch.round(sketch.frameRate()), 30, 150);
    }
};
// eslint-disable-next-line no-unused-vars
var p5_portfolio_bg =
    // eslint-disable-next-line no-undef
    new p5(portfolioBgFunction);