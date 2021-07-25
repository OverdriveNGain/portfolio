/* eslint-disable no-undef */

let landing_services_hover;
let landingServicesSetVisible;

var landingServicesFunction = (sketch) => {

    let choiceIndex = -1;
    let snowM;

    let containerWidth;
    let sidePadding = spacer * 3;
    let boundsArray = [];

    landingServicesSetVisible = (isVisible) => {
        if (isVisible) {
            sketch.loop();
        }
        else {
            sketch.noLoop();
        }
    }

    sketch.setup = () => {
        const e = document.getElementById("landing_services");
        let canv = sketch.createCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));
        containerWidth = getContainerWidth(sketch.width);
        setupBoundsArray();
        canv.parent('landing_services');
        sketch.rectMode(sketch.CENTER);
        sketch.noStroke();
        sketch.background(255);

        snowM = new SnowManager(sketch.width, sketch.height, 250);

        landing_services_hover = (e, newIndex) => {
            choiceIndex = newIndex;
        }
    }

    sketch.windowResized = () => {
        const e = document.getElementById("landing_services");
        sketch.resizeCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));
        containerWidth = getContainerWidth(sketch.width);
        setupBoundsArray();
    }

    sketch.draw = () => {
        sketch.background(255);
        sketch.fill(78, 104, 255);
        sketch.rect(sketch.width * 0.5, sketch.height * 0.5, containerWidth, sketch.height, 30);
        sketch.fill(255);
        if (choiceIndex > -1)
            snowM.step(boundsArray[choiceIndex][0], boundsArray[choiceIndex][1]);
        else
            snowM.step(null, null);
        drawSnow();
        sketch.fill(0);
        sketch.text(Math.round(sketch.frameRate()), 50, 50);
        drawChoiceIndicators();
    }
    const setupBoundsArray = () => {
        const startPoint = (sketch.width - containerWidth) * 0.5 + (sidePadding);
        const choiceWidth = (containerWidth - sidePadding * 2) * 0.333;
        boundsArray = [
            [startPoint + choiceWidth * 0, startPoint + choiceWidth * 1],
            [startPoint + choiceWidth * 1, startPoint + choiceWidth * 2],
            [startPoint + choiceWidth * 2, startPoint + choiceWidth * 3],
        ];
    }
    const drawChoiceIndicators = () => {
        if (choiceIndex !== -1) {
            sketch.push();
            sketch.rectMode(sketch.CORNERS);
            sketch.fill(255, 255, 255, 40);
            sketch.rect(boundsArray[choiceIndex][0], 0, boundsArray[choiceIndex][1], sketch.height);
            sketch.pop();
        }
        // sketch.fill(255, 0, 0);
        // let choiceWidth = (containerWidth - sidePadding * 2) * 0.333;
        // sketch.push();
        // sketch.translate(sketch.width * 0.5, 0);
        // sketch.rect(0, sketch.height * 0.5, choiceWidth - spacer, sketch.height);
        // sketch.rect(-choiceWidth, sketch.height * 0.5, choiceWidth - spacer, sketch.height);
        // sketch.rect(choiceWidth, sketch.height * 0.5, choiceWidth - spacer, sketch.height);
        // sketch.pop();
    }
    const drawSnow = () => {
        // console.log(snowM.snow.length);
        for (let i = 0; i < snowM.snow.length; i++) {
            let snow = snowM.snow[i];
            sketch.circle(snow.x, snow.y, snow.rad, snow.rad);
        }
    }
    const getContainerWidth = (windowWidth) => {
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
let p5_landing_services =
    // eslint-disable-next-line no-undef
    new p5(landingServicesFunction);