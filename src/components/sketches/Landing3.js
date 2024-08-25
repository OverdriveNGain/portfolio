import React from "react";
import Sketch from "react-p5";
import { SnowManager } from "./Managers";

const md_bp = 768;

let choiceIndex = -1;
let p5;
let snowM;
let containerWidth;
let boundsArray = [];
let shouldRemove;
let element;

const setupBoundsArray = () => {
    const startPoint = (p5.width - containerWidth) * 0.5;
    const choiceWidth = containerWidth * 0.333;
    boundsArray = [
        [startPoint + choiceWidth * 0, startPoint + choiceWidth * 1],
        [startPoint + choiceWidth * 1, startPoint + choiceWidth * 2],
        [startPoint + choiceWidth * 2, startPoint + choiceWidth * 3],
    ];
}
const drawChoiceIndicators = () => {
    if (choiceIndex !== -1) {
        p5.fill(255, 255, 255, 40);
        p5.rect(boundsArray[choiceIndex][0], 0, boundsArray[choiceIndex][1], p5.height);
    }
}
const drawSnow = () => {
    p5.fill(255);
    for (let i = 0; i < snowM.snow.length; i++) {
        let snow = snowM.snow[i];
        p5.circle(snow.x, snow.y, snow.rad, snow.rad);
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

let Landing3Hover = (e, newIndex) => {
    choiceIndex = newIndex;
}

let Landing3RefreshState = (remove) => {
    if (p5 == null)
        return;
    if (remove === undefined) {
        const element = document.getElementById('landing3');
        if (element == null) {
            shouldRemove = true;
            return;
        }
        let position = element.getBoundingClientRect();
        const isVisible = (position.top < window.innerHeight && position.bottom >= 0);
        if (isVisible)
            p5.loop();
        else
            p5.noLoop();
    }
    else if (remove)
        shouldRemove = true;
}

const Landing3 = () => {
    const setup = (sketch) => {
        shouldRemove = false;

        p5 = sketch;
        element = document.getElementById("landing3");
        if (element === null) {
            shouldRemove = true;
            return;
        }
        const about4 = document.getElementById("about4");
        const canv = p5.createCanvas(p5.round(about4.offsetWidth), p5.round(about4.offsetHeight));
        containerWidth = getContainerWidthModified(p5.width);
        setupBoundsArray();
        canv.parent('landing3');
        p5.rectMode(p5.CORNERS);
        p5.noStroke();

        snowM = new SnowManager(p5.width, p5.height, 250);
    }

    const windowResized = () => {
        if (element == null)
            return;
        element = document.getElementById("landing3");
        if (element === null) {
            p5.noLoop();
            return;
        }
        const about4 = document.getElementById("about4");
        p5.resizeCanvas(p5.round(about4.offsetWidth), p5.round(about4.offsetHeight));
        containerWidth = getContainerWidthModified(p5.width);
        // eslint-disable-next-line no-undef
        snowM.resize(p5.width, p5.height);
        setupBoundsArray();
    }

    const draw = () => {
        if (shouldRemove) {
            p5.remove();
            return;
        }
        else if (element === null)
            return;
        // p5.translate(-p5.width / 2, -p5.height / 2);
        p5.background(255);
        p5.fill(41, 141, 255); //78, 104, 255
        p5.rect(0, 0, p5.width, p5.height);
        p5.fill(255);
        if (choiceIndex > -1 && p5.width > md_bp) {
            drawChoiceIndicators();
            snowM.step(boundsArray[choiceIndex][0], boundsArray[choiceIndex][1]);
        }
        else
            snowM.step(null, null);
        drawSnow();

        p5.strokeWeight(5.0);
        p5.stroke(255);
        p5.noFill();
        p5.rect(-15, 15, p5.width + 15, p5.height - 15);
        p5.noStroke();
    }

    return (
        <div id="landing3" className=" w-100 behind" style={{ position: "absolute", zIndex: "-1" }}>
            <Sketch setup={setup} draw={draw} windowResized={windowResized} />
        </div>
    );
}

export { Landing3Hover, Landing3RefreshState };
export default Landing3;