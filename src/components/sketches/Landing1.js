import React from "react";
import Sketch from "react-p5";
import { ParticleManager, DustManager, Rect } from "./Managers";

const DUSTNEIGHBORMAXDIST = 200;
const floatingPointArea = 2 / 3;
let col1Vals = [78, 104, 255];
let col2Vals = [255, 255, 255];
const md_bp = 768;
const getDustCount = (area) => {
    return area * 0.00002 + 16;
}

let p5;
let shouldRemove = false;
let element;
let col1;
let col2;
let borderM;
let dustM;
let topAreaHeight;

const drawFloatingPoints = () => {
    let totalLength, property;
    p5.strokeWeight(1);
    if (p5.width > md_bp) {
        totalLength = p5.width;
        property = "x";
    }
    else {
        totalLength = p5.height * floatingPointArea;
        property = "y";
    }

    for (let i = 0; i < dustM.points.length; i++) {
        const point = dustM.points[i];
        p5.stroke(255 + -100 * ((p5.abs(point[property] * 2 - totalLength) / totalLength)));
        let neighborRect = new Rect(point.x, point.y, DUSTNEIGHBORMAXDIST, DUSTNEIGHBORMAXDIST);
        let neighbors = [];
        dustM.quadtree.queryUppers(neighborRect, neighbors, i);
        let m = point.x;
        let n = point.y;
        for (let j = 0; j < neighbors.length; j++) {
            p5.line(m, n, neighbors[j].x, neighbors[j].y);
        }
    };
}

const Landing1RefreshState = (remove) => {
    if (p5 == null)
        return;
    if (remove === undefined) {
        const element = document.getElementById('landing1');
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

const drawBorderWaves = () => {
    p5.push();
    p5.translate(0, topAreaHeight * 0.5);
    p5.noStroke();
    p5.fill(col1);
    p5.rectMode(p5.CORNERS);
    p5.rect(0, topAreaHeight * 0.5, p5.width, p5.height);
    for (let i = borderM.particles.length - 1; i >= 0; i--) {
        let particle = borderM.particles[i];
        p5.fill(particle.col);
        p5.circle(particle.x, particle.y, particle.rad)
    }
    p5.pop();
}

//{
let running = false;
let promise = false;
const debounce = (func) => {
    if (running) {
        promise = true;
        return;
    }
    running = true;
    func();
    setTimeout(() => {
        running = false;
        if (promise) {
            promise = false;
            debounce(func);
        }
    }, 1000);
}
//}

//{
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
//}

const Landing1 = () => {
    const setup = (sketch) => {
        shouldRemove = false;

        p5 = sketch;
        element = document.getElementById("landing1");
        if (element === null) {
            shouldRemove = true;
            return;
        }
        const about1 = document.getElementById("about1");
        const about2 = document.getElementById("about2");
        const canv = p5.createCanvas(
            p5.ceil(about1.offsetWidth),
            p5.ceil(about1.offsetHeight + (about2.offsetHeight * 0.6)),
            p5.WEBGL
        );
        topAreaHeight = about1.offsetHeight;
        col1 = p5.color(col1Vals[0], col1Vals[1], col1Vals[2]);
        col2 = p5.color(col2Vals[0], col2Vals[1], col2Vals[2]);

        dustM = new DustManager(Math.round(getDustCount(p5.height * p5.width)), p5.width, Math.floor(p5.height * floatingPointArea), 1);
        borderM = new ParticleManager(
            p5.width,
            p5.height - topAreaHeight * 0.5,
            topAreaHeight * 0.5,
            () => { return p5.randomGaussian(); },
            col1,
            col2,
            1, 0.5);

        canv.parent('landing1');
    }

    const windowResized = () => {
        debounce(() => {
            if (element == null)
                return;
            element = document.getElementById("landing1");
            if (element === null) {
                p5.noLoop();
                return;
            }
            const about1 = document.getElementById("about1");
            const about2 = document.getElementById("about2");
            p5.resizeCanvas(
                p5.ceil(about1.offsetWidth),
                p5.ceil(about1.offsetHeight + (about2.offsetHeight * 0.6))
            );
            topAreaHeight = about1.offsetHeight;
            dustM.resize(p5.width, Math.floor(p5.height * floatingPointArea));
            borderM.resize(
                p5.width,
                p5.height - topAreaHeight * 0.5,
                topAreaHeight * 0.5);
        })
    }

    const draw = () => {
        if (shouldRemove) {
            p5.remove();
            return;
        }
        else if (element === null)
            return;
        p5.translate(-p5.width / 2, -p5.height / 2);
        p5.background(255);

        dustM.step()
        drawFloatingPoints();
        p5.translate(0, 0, 10);
        if (p5.frameCount < 85) {
            p5.fill(255, 255, 255, 255 - p5.frameCount * 3);
            p5.rect(0, 0, p5.width, p5.height);
        }

        borderM.step();
        borderWaveSplashCheck();
        drawBorderWaves();
    }

    return (
        <div id="landing1" style={{ position: "absolute", zIndex: "-1" }}>
            <Sketch setup={setup} draw={draw} windowResized={windowResized} />
        </div>
    );
}

export { Landing1RefreshState };
export default Landing1;