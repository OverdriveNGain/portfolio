import React from "react";
import Sketch from "react-p5";
import { ParticleManager } from "./Managers";

const col2Vals = [41, 141, 255]; // [78, 104, 255];
const col1Vals = [255, 255, 255];

let p5;
let col2;
let col1;
let borderM;
let shouldRemove = false;
let element;
let topAreaHeight;

let pFrameMouseX = -1;
let pFrameMouseY = -1;
let lastMouseMoveOnFrame = -1;
const borderWaveSplashCheck = () => {
    const pbelow = p5.pmouseY > topAreaHeight;
    const below = p5.mouseY > topAreaHeight;
    if (pbelow !== below) {
        if (Math.abs(p5.frameCount - lastMouseMoveOnFrame) < 5) {
            borderM.splash(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
        }
    }

    if (pFrameMouseX !== p5.mouseX || pFrameMouseY !== p5.mouseY) {
        lastMouseMoveOnFrame = p5.frameCount;
    }

    pFrameMouseX = p5.mouseX;
    pFrameMouseY = p5.mouseY;
}

const drawBorderWaves = () => {
    p5.fill(col2);
    p5.rectMode(p5.CORNERS);
    p5.rect(0, 0, p5.width, topAreaHeight);
    for (let i = borderM.particles.length - 1; i >= 0; i--) {
        // this.particles[i].draw(sketch);
        let particle = borderM.particles[i];
        p5.fill(particle.col);
        p5.circle(particle.x, particle.y, particle.rad)
    }
}

let Landing2RefreshState = (remove) => {
    if (p5 == null)
        return;
    if (remove === undefined) {
        const element = document.getElementById('landing2');
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

const Landing2 = () => {
    const setup = (sketch) => {
        shouldRemove = false;
        p5 = sketch;
        element = document.getElementById("landing2");
        if (element === null) {
            shouldRemove = true;
            return;
        }
        const about2 = document.getElementById("about2");
        const landingProjectsSection = document.getElementById("landingProjectsSection");
        element.style.top = `calc(-0.5 * ${about2.offsetHeight}px)`;
        const canv = p5.createCanvas(
            p5.round(about2.offsetWidth),
            p5.round((about2.offsetHeight + landingProjectsSection.offsetHeight) / 2),
            // p5.WEBGL
        );
        topAreaHeight = about2.offsetHeight * 0.5;
        col1 = p5.color(col1Vals[0], col1Vals[1], col1Vals[2]);
        col2 = p5.color(col2Vals[0], col2Vals[1], col2Vals[2]);

        borderM = new ParticleManager(
            sketch.width,
            sketch.height,
            topAreaHeight,
            () => { return sketch.randomGaussian(); },
            col1,
            col2,
            0.5, 0.5);

        sketch.noStroke();
        canv.parent('landing2');
    }

    const windowResized = () => {
        if (element == null)
            return;
        element = document.getElementById("landing2");
        if (element === null) {
            p5.noLoop();
            return;
        }
        const about2 = document.getElementById("about2");
        const landingProjectsSection = document.getElementById("landingProjectsSection");
        element.style.top = `calc(-0.5 * ${about2.offsetHeight}px)`;
        p5.resizeCanvas(
            p5.round(about2.offsetWidth),
            p5.round((about2.offsetHeight + landingProjectsSection.offsetHeight) / 2)
        );
        topAreaHeight = about2.offsetHeight * 0.5;
        // eslint-disable-next-line no-undef
        borderM.resize(
            p5.width,
            p5.height,
            topAreaHeight);
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
        borderM.step();
        borderWaveSplashCheck();
        drawBorderWaves();
    }
    return (
        <div id="landing2" style={{ position: "absolute", zIndex: "-1" }}>
            <Sketch setup={setup} draw={draw} windowResized={windowResized} />
        </div>
    );
}

export { Landing2RefreshState };
export default Landing2;