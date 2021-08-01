var portfolioBgStop;

var portfolioBgFunction = (sketch) => {
    let shouldRemove = false;
    portfolioBgStop = (remove) => {
        shouldRemove = true;
    }

    let element;
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
        snowM = new SnowManager(sketch.width, sketch.height, 250);
    }

    sketch.windowResized = () => {
        element = document.getElementById("portfolio-bg");
        if (element === null) {
            sketch.noLoop();
            return;
        }
        sketch.resizeCanvas(sketch.round(element.offsetWidth), sketch.round(element.offsetHeight));
        // eslint-disable-next-line no-undef
        snowM = new SnowManager(sketch.width, sketch.height, 250);
    }

    sketch.draw = () => {
        if (element === null)
            return;
        else if (shouldRemove) {
            sketch.remove();
            return;
        }
        sketch.background(255, 255, 255);
    }
};
// eslint-disable-next-line no-unused-vars
var p5_portfolio_bg =
    // eslint-disable-next-line no-undef
    new p5(portfolioBgFunction);