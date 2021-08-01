import { useEffect, useState } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";

const Navbar = () => {
    const [transparentBrand, setTransparentBrand] = useState(true);
    const [transparentBg, setTransparentBg] = useState(true);
    const transparentBrandThreshold = 300;
    const transparentBgThreshold = 150;

    const location = useLocation();

    const refreshTransparency = () => {
        setTransparentBrand(document.documentElement.scrollTop <= transparentBrandThreshold);
        setTransparentBg(document.documentElement.scrollTop <= transparentBgThreshold);
    };
    useEffect(() => {
        refreshTransparency();
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", refreshTransparency);

        return () => {
            return window.removeEventListener("scroll", refreshTransparency);
        };
    }, [transparentBrand, transparentBg]);

    let transparentCheck = transparentBg && location.pathname === "/";
    const inlineNavbarStyle = {
        "backgroundColor": (transparentCheck ? "transparent" : "rgba(255, 255, 255, 0.92)"),
        "backdropFilter": (transparentCheck ? "none" : "blur(3px)")
    };
    const expandBgNavSmall = {
        "backgroundColor": (!transparentCheck ? "transparent" : "rgba(255, 255, 255, 1)"),
    }

    const getNavbarLinkColor = (locationObject, targetPath) => {
        return locationObject.pathname === targetPath ? "text-secondary" : "text-primary";
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top animated-background-color" style={inlineNavbarStyle}>
            <div className="container px-4">
                <Link className={"animated-opacity navbar-brand" + (transparentBrand && location.pathname === "/" ? " opacity-0" : "")} to="/">
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

                        <Link className={`nav-link px-3 d-none d-md-block bg-md-success ${getNavbarLinkColor(location, "/projects")}`} to="/">Projects</Link>
                        <Link className={`nav-link px-3 d-md-none ${getNavbarLinkColor(location, "/projects")}`} to="/" style={expandBgNavSmall}>Projects</Link>

                        <Link className={`nav-link px-3 d-none d-md-block bg-md-success ${getNavbarLinkColor(location, "/portfolio")}`} to="/">Portfolio</Link>
                        <Link className={`nav-link px-3 d-md-none ${getNavbarLinkColor(location, "/portfolio")}`} to="/" style={expandBgNavSmall}>Portfolio</Link>

                        <Link className={`nav-link px-3 d-none d-md-block bg-md-success ${getNavbarLinkColor(location, "/contact")}`} to="/">Contact</Link>
                        <Link className={`nav-link px-3 d-md-none ${getNavbarLinkColor(location, "/contact")}`} to="/" style={expandBgNavSmall}>Contact</Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;