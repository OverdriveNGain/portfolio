import Sketch from "react-p5";
import { BubbleManager } from "./Managers";

let p5;
let bubbleM;

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
    }, 500);
}

const GenericBackground = () => {
    const setup = (sketch, canvasParentRef) => {
        p5 = sketch;
        const canvas = p5.createCanvas(p5.round(window.innerWidth), p5.round(window.innerHeight), sketch.WEBGL);
        canvas.parent('portfolio-bg');
        p5.rectMode(p5.CORNERS);
        p5.noStroke();

        bubbleM = new BubbleManager(p5.width, p5.height, 25);
    };

    const windowResized = () => debounce(() => {
        p5.resizeCanvas(p5.round(window.innerWidth), p5.round(window.innerHeight));
        bubbleM.resize(p5.width, p5.height);
    })

    const draw = () => {
        p5.translate(-p5.width / 2, -p5.height / 2);
        p5.background(255, 255, 255);

        bubbleM.step();
        for (let i = 0; i < bubbleM.count; i++) {
            const bubble = bubbleM.bubbles[i];
            p5.fill(0, 100, 255, Math.min(Math.round(8 * bubble.life), 8));
            p5.circle(bubble.x, bubble.y, bubble.r, bubble.r);
        }
    };

    return <div id="portfolio-bg" style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        zIndex: "-1"
    }}>
        <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </div>;
}

export default GenericBackground;