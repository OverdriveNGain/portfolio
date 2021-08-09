import useResize from "../hooks/useResize";
import Landing2 from './sketches/Landing2';
import Landing3, { Landing3Hover } from "./sketches/Landing3";
import {
    Link,
} from "react-router-dom";

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

const About3 = ({ response }) => {
    const { breakpointSelector } = useResize();

    const getProjectTile = (id) => {
        if (response == null)
            return (<div className="col-12 col-md-6 mb-2">
                <div className="card">
                    <div className="card-body m-1 m-md-4">
                        <h5 className="card-title no-underline text-secondary"> </h5>
                        <p className="card-text text-dark">Loading...</p>
                    </div>
                </div>
            </div>);
        const proj = response.find((p) => p.id === id);
        return (<div className="col-12 col-md-6 mb-2">
            <Link to={`/projects/${id}`} className="link-no-underline"><div className="card">
                <div className="card-body m-1 m-md-4">
                    <h5 className="card-title no-underline text-secondary">{proj.title}</h5>
                    <p className="card-text text-dark">{proj.descShort}</p>
                </div>
            </div></Link>
        </div>);
    }

    return (
        <div id="about3">
            <div style={{ padding: `${breakpointSelector(10, 30, null, 80, 100, 120)}px 0px` }}>
                <Landing2 />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center align-items-stretch border-0 h-100">
                    <div className="display-1 text-primary m-3 font-title">Projects</div>
                    <div className="row mx-xs-2 mx-md-5 gx-2">
                        {getProjectTile('loose-blocks')}
                        {getProjectTile('buwad-republic')}
                    </div>
                    <div className="row mx-xs-2 mx-md-5 gx-2">
                        {getProjectTile('simple-money-counter')}
                        {breakpointSelector(<span />, null, getProjectTile('cell-trace'))}
                    </div>

                    <Link to="/projects">
                        <button className="btn btn-primary align-self-center m-3 text-light">See More Projects ❯</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export { About3, About4 };