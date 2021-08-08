import Sketch from "react-p5";
import { BubbleManager } from "./Managers";

let p5;
let shouldRemove = false;
let bubbleM;

let portfolioBgStop = (remove) => {
    shouldRemove = true;
};

const GenericBackground = () => {
    const setup = (sketch, canvasParentRef) => {
        p5 = sketch;
        const canv = p5.createCanvas(p5.round(window.innerWidth), p5.round(window.innerHeight), sketch.WEBGL);
        canv.parent('portfolio-bg');
        p5.rectMode(p5.CORNERS);
        p5.noStroke();

        bubbleM = new BubbleManager(p5.width, p5.height, 25);
    };

    const windowResized = () => {
        p5.resizeCanvas(p5.round(window.offsetWidth), p5.round(window.offsetHeight));
        // eslint-disable-next-line no-undef
        bubbleM.resize(p5.width, p5.height);
    }

    const draw = () => {
        if (shouldRemove) {
            p5.remove();
            return;
        }
        p5.translate(-p5.width / 2, -p5.height / 2);
        p5.background(255, 255, 255);

        bubbleM.step();
        for (let i = 0; i < bubbleM.count; i++) {
            let bubble = bubbleM.bubbles[i];
            p5.fill(0, 0, 255, Math.min(Math.round(8 * bubble.life), 8));
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

export { portfolioBgStop };
export default GenericBackground;