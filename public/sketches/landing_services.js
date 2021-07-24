let landing_services_hover;

var landingServicesFunction = (sketch) => {
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

    let number = 0;

    sketch.setup = () => {
        const e = document.getElementById("landing_services");
        let canv = sketch.createCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));
        canv.parent('landing_services');
        sketch.rectMode(sketch.CENTER);
        sketch.noStroke();

        landing_services_hover = (e, newNumber) => {
            console.log(e);
            number = newNumber;
        }
    }

    sketch.windowResized = () => {
        const e = document.getElementById("landing_services");
        sketch.resizeCanvas(sketch.round(e.offsetWidth), sketch.round(e.offsetHeight));
        console.log("WIDTH: " + getContainerWidth(sketch.width));
    }

    sketch.draw = () => {
        sketch.background(255);
        switch (number) {
            case 1:
                sketch.fill(255, 150, 150);
                break;
            case 2:
                sketch.fill(150, 255, 150);
                break;
            case 3:
                sketch.fill(150, 150, 255);
                break;
            default:
                sketch.fill(245);

        }
        sketch.rect(sketch.width * 0.5, sketch.height * 0.5, getContainerWidth(sketch.width), sketch.height, 30);
    }
};
// eslint-disable-next-line no-unused-vars
let p5_landing_services =
    // eslint-disable-next-line no-undef
    new p5(landingServicesFunction);