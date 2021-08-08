import useResize from "../hooks/useResize";
import Landing3, { Landing3Hover } from "./sketches/Landing3";

const About4 = () => {
    const { breakpointSelector } = useResize();

    const landingServicesHoverHandler = (e, value) => {
        Landing3Hover(e, value);
    }

    const tiles = [];
    const tileIcon = ["bi bi-brush", "bi bi-globe2", "bi bi-phone"];
    const tileTitle = ["     Graphic Design", "     Website Development", "     Mobile App Development"]
    const tileDesc = [
        "Graphic eye-candy to catch viewer's attention, and to present your information, profesionally.",
        "Fast and responsive websites for your business, built with modern designs and tools to deliver intuitive user interactions.",
        "Mobile software to bring convenience your brand can provide, to you audience's pocket."
    ]
    const tileTools = [
        "Adobe Illustrator • Adobe Photoshop • p5.js • Processing • Python",
        "HTML • CSS • Javascript • SASS • React • Flutter • Firebase • Bootstrap 5 • git • GitHub",
        "React • Flutter • Adobe XD • Firebase • Unity 3D • git • GitHub"
    ]
    for (let i = 0; i < 3; i++) {
        tiles.push(<div key={i} className="col-12 col-md-4">
            <a href="/" className="link-no-underline"><div className="card border-0 rounded rounded-on-md shadow mx-1 mx-md-0" onMouseOver={(e) => landingServicesHoverHandler(e, i)} onMouseOut={(e) => landingServicesHoverHandler(e, -1)}>
                <div className="card-body text-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-2 col-md-8"><i className={`${tileIcon[i]} display-1 text-secondary d-none d-md-inline`}></i></div>
                        <div className="col-12">
                            <h5 className="card-title no-underline text-secondary">
                                <i className={`${tileIcon[i]} text-secondary d-inline d-md-none`}></i>{tileTitle[i]}</h5>
                            <p className="card-text text-dark">{tileDesc[i]}</p>
                            <small className="text-muted">{tileTools[i]}</small>
                        </div>
                    </div>
                </div>
            </div></a>
        </div>)
    }
    return (
        <div id="about4">
            <Landing3 />
            <div style={{ padding: `${breakpointSelector(60, null, null, 80, 100, 120)}px 0px` }}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="display-1 font-title text-white mb-3 mb-md-5 text-center">Skills & Services</div>
                        <div className="row g-3 align-items-center">
                            {tiles}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About4;