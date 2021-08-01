import { useEffect, useState } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";

const Navbar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const location = useLocation();
    const refreshScrollTop = () => {
        // console.log(`Scroll top set to ${document.documentElement.scrollTop}`);
        setScrollTop(document.documentElement.scrollTop);
    }
    const getBgTransparency = () => {
        switch (location.pathname) {
            case "/":
                return scrollTop <= 150;
            case "/portfolio":
                return scrollTop <= 100;
            default:
                return false;
        }
    }
    const getBrandTransparency = () => {
        switch (location.pathname) {
            case "/":
                // console.log(location.pathname + ":"+ (scrollTop <= 300));
                return scrollTop <= 300;
            default:
                console.log(location.pathname + ":" + (scrollTop <= 300));
                return false;
        }
    }

    useEffect(() => {
        refreshScrollTop();

        window.addEventListener("scroll", refreshScrollTop);

        return () => {
            return window.removeEventListener("scroll", refreshScrollTop);
        };
    }, []);

    let isBgTransparent = getBgTransparency();
    let isBrandTransparent = getBrandTransparency();
    const inlineNavbarStyle = {
        "backgroundColor": (isBgTransparent ? "transparent" : "rgba(255, 255, 255, 0.92)"),
        "backdropFilter": (isBgTransparent ? "none" : "blur(3px)")
    };
    const expandBgNavSmall = {
        "backgroundColor": (!isBgTransparent ? "transparent" : "rgba(255, 255, 255, 1)"),
    }

    const getNavbarLinkColor = (locationObject, targetPath) => {
        return locationObject.pathname === targetPath ? "text-secondary" : "text-primary";
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top animated-background-color" style={inlineNavbarStyle}>
            <div className="container px-4">
                <Link className={"animated-opacity navbar-brand" + (isBrandTransparent && location.pathname === "/" ? " opacity-0" : "")} to="/">
                    <div className="fw-bold text-primary b-0">Jeremy Mattheu D. Amon</div>
                    <small className="text-muted">Full-Stack Software Engineer</small>
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={`nav-link px-3 d-none d-md-block bg-md-success ${getNavbarLinkColor(location, "/aboutme")}`} to="/aboutme">About Me</Link>
                        <Link className={`nav-link px-3 d-md-none ${getNavbarLinkColor(location, "/aboutme")}`} to="/aboutme" style={expandBgNavSmall}>About Me</Link>

                        <Link className={`nav-link px-3 d-none d-md-block bg-md-success ${getNavbarLinkColor(location, "/projects")}`} to="/projects">Projects</Link>
                        <Link className={`nav-link px-3 d-md-none ${getNavbarLinkColor(location, "/projects")}`} to="/projects" style={expandBgNavSmall}>Projects</Link>

                        <Link className={`nav-link px-3 d-none d-md-block bg-md-success ${getNavbarLinkColor(location, "/portfolio")}`} to="/portfolio">Portfolio</Link>
                        <Link className={`nav-link px-3 d-md-none ${getNavbarLinkColor(location, "/portfolio")}`} to="/portfolio" style={expandBgNavSmall}>Portfolio</Link>

                        <Link className={`nav-link px-3 d-none d-md-block bg-md-success ${getNavbarLinkColor(location, "/contact")}`} to="/contact">Contact</Link>
                        <Link className={`nav-link px-3 d-md-none ${getNavbarLinkColor(location, "/contact")}`} to="/contact" style={expandBgNavSmall}>Contact</Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;