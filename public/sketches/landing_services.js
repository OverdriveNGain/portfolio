// eslint-disable-next-line no-unused-vars
var landing_services_hover;
// eslint-disable-next-line no-unused-vars
var landingServicesSetVisible;
// eslint-disable-next-line no-unused-vars
var landing3ServicesResize;

var landingServicesFunction = (sketch) => {

    const md_bp = 768;
    const fontFile = "sketches/fonts/Montserrat-Regular.otf";

    let choiceIndex = -1;
    let snowM;
    let containerWidth;
    let boundsArray = [];
    let shouldRemove = false;
    let element;
    let debugFont;

    sketch.preload = () => {
        debugFont = sketch.loadFont(fontFile, () => { }, (e) => { console.log(e) });
    }

    sketch.setup = () => {
        element = document.getElementById("landing_services");
        if (element === null) {
            sketch.noLoop();
            return;
        }
        const about4 = document.getElementById("about4");
        const canv = sketch.createCanvas(sketch.round(about4.offsetWidth), sketch.round(about4.offsetHeight), sketch.WEBGL);
        containerWidth = getContainerWidthModified(sketch.width);
        setupBoundsArray();
        canv.parent('landing_services');
        sketch.rectMode(sketch.CORNERS);
        sketch.noStroke();

        // eslint-disable-next-line no-undef
        snowM = new SnowManager(sketch.width, sketch.height, 250);

        landing_services_hover = (e, newIndex) => {
            choiceIndex = newIndex;
        }

        sketch.textFont(debugFont);
    }

    sketch.windowResized = () => {
        element = document.getElementById("landing_services");
        if (element === null) {
            sketch.noLoop();
            return;
        }
        const about4 = document.getElementById("about4");
        sketch.resizeCanvas(sketch.round(about4.offsetWidth), sketch.round(about4.offsetHeight));
        containerWidth = getContainerWidthModified(sketch.width);
        // eslint-disable-next-line no-undef
        snowM.resize(sketch.width, sketch.height);
        setupBoundsArray();
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
        sketch.fill(78, 104, 255);
        sketch.rect(0, 0, sketch.width, sketch.height);
        sketch.fill(255);
        if (choiceIndex > -1 && sketch.width > md_bp) {
            drawChoiceIndicators();
            snowM.step(boundsArray[choiceIndex][0], boundsArray[choiceIndex][1]);
        }
        else
            snowM.step(null, null);
        drawSnow();

        sketch.strokeWeight(5.0);
        sketch.stroke(255);
        sketch.noFill();
        sketch.rect(-15, 15, sketch.width + 15, sketch.height - 15);
        sketch.noStroke();


        sketch.fill(0);
        sketch.translate(0, 0, 10);
        sketch.text(Math.round(sketch.frameRate()), 50, 50);
    }

    landingServicesSetVisible = (remove) => {
        if (remove === undefined) {
            const element = document.getElementById('landing_services');
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
    landing3ServicesResize = () => {
        sketch.windowResized();
    }

    const setupBoundsArray = () => {
        const startPoint = (sketch.width - containerWidth) * 0.5;
        const choiceWidth = containerWidth * 0.333;
        boundsArray = [
            [startPoint + choiceWidth * 0, startPoint + choiceWidth * 1],
            [startPoint + choiceWidth * 1, startPoint + choiceWidth * 2],
            [startPoint + choiceWidth * 2, startPoint + choiceWidth * 3],
        ];
    }
    const drawChoiceIndicators = () => {
        if (choiceIndex !== -1) {
            sketch.fill(255, 255, 255, 40);
            sketch.rect(boundsArray[choiceIndex][0], 0, boundsArray[choiceIndex][1], sketch.height);
        }
    }
    const drawSnow = () => {
        sketch.fill(255);
        for (let i = 0; i < snowM.snow.length; i++) {
            let snow = snowM.snow[i];
            sketch.circle(snow.x, snow.y, snow.rad, snow.rad);
        }
    }
    const getContainerWidthModified = (windowWidth) => {
        if (windowWidth < 576)
            return windowWidth;
        if (windowWidth < 768)
            return 540;
        if (windowWidth < 992)
            return 720;
        if (windowWidth < 1200)
            return 960;
        if (windowWidth < 1400)
            return 1140;
        return 1320;
    }
};
// eslint-disable-next-line no-unused-vars
var p5_landing_services =
    // eslint-disable-next-line no-undef
    new p5(landingServicesFunction);