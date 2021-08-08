// // eslint-disable-next-line no-unused-vars
// var portfolioBgStop;

// var portfolioBgFunction = (sketch) => {
//     const fontFile = "sketches/fonts/Montserrat-Regular.otf";

//     let shouldRemove = false;
//     portfolioBgStop = (remove) => {
//         shouldRemove = true;
//     }

//     let element;
//     let bubbleM;
//     let debugFont;

//     sketch.preload = () => {
//         debugFont = sketch.loadFont(fontFile, () => { }, (e) => { console.log(e) });
//     }

//     sketch.setup = () => {
//         element = document.getElementById("portfolio-bg");
//         if (element === null) {
//             sketch.noLoop();
//             return;
//         }
//         const canv = sketch.createCanvas(sketch.round(element.offsetWidth), sketch.round(element.offsetHeight), sketch.WEBGL);
//         canv.parent('portfolio-bg');
//         sketch.rectMode(sketch.CORNERS);
//         sketch.noStroke();

//         // eslint-disable-next-line no-undef
//         bubbleM = new BubbleManager(sketch.width, sketch.height, 25);

//         sketch.textFont(debugFont);
//     }

//     sketch.windowResized = () => {
//         if (element == null)
//             return;
//         element = document.getElementById("portfolio-bg");
//         if (element === null) {
//             sketch.noLoop();
//             return;
//         }
//         sketch.resizeCanvas(sketch.round(element.offsetWidth), sketch.round(element.offsetHeight));
//         // eslint-disable-next-line no-undef
//         bubbleM.resize(sketch.width, sketch.height);
//     }

//     sketch.draw = () => {
//         if (element === null)
//             return;
//         else if (shouldRemove) {
//             sketch.remove();
//             return;
//         }
//         sketch.translate(-sketch.width / 2, -sketch.height / 2);
//         sketch.background(255, 255, 255);

//         bubbleM.step();
//         for (let i = 0; i < bubbleM.count; i++) {
//             let bubble = bubbleM.bubbles[i];
//             sketch.fill(0, 0, 255, Math.min(Math.round(8 * bubble.life), 8));
//             sketch.circle(bubble.x, bubble.y, bubble.r, bubble.r);
//         }
//         // sketch.fill(0);
//         // sketch.translate(0, 0, 10);
//         // sketch.text(sketch.round(sketch.frameRate()), 30, 150);
//     }
// };
// // eslint-disable-next-line no-unused-vars
// var p5_portfolio_bg =
//     // eslint-disable-next-line no-undef
//     new p5(portfolioBgFunction);