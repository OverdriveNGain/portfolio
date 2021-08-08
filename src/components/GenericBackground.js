import { useEffect } from "react";
import useScript from "../hooks/useScript";

const GenericBackground = () => {
    useScript('sketches/portfolio_bg.js');

    useEffect(() => {
        window.scrollTo(0, 0);
        return (() => {
            try {
                // eslint-disable-next-line no-undef
                portfolioBgStop();
            } catch (e) {
                if (!(e instanceof ReferenceError))
                    throw e;
            }
        });
    }, []);

    return (
        <div id="portfolio-bg" />
    );
}

export default GenericBackground;