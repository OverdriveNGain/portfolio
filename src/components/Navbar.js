import { useEffect, useState } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import useResize from '../hooks/useResize';
import NavbarBrand from './NavbarComponents';

const Navbar = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const { breakpointSelector } = useResize();

    const location = useLocation();
    const refreshScrollTop = () => {
        setScrollTop(document.documentElement.scrollTop);
    }
    const getBgTransparency = () => {
        switch (location.pathname) {
            case "/":
                return scrollTop <= 150;
            case "/portfolio":
                return scrollTop <= 50;
            default:
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

    const navbarLinkClick = () => {
        document.getElementById('nav-toggle').click();
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top animated-background-color" style={inlineNavbarStyle}>
            <div className="container px-4">
                <NavbarBrand location={location} scrollTop={scrollTop} />
                <button className="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" id="nav-toggle">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {breakpointSelector(
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/aboutme")}`}
                                onClick={navbarLinkClick} to="/aboutme" style={expandBgNavSmall}>About Me</Link>, null, null,
                            <Link className={`nav-link px-3 bg-md-success ${getNavbarLinkColor(location, "/aboutme")}`}
                                to="/aboutme">About Me</Link>)}
                        {breakpointSelector(
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/projects")}`}
                                onClick={navbarLinkClick} to="/projects" style={expandBgNavSmall}>Projects</Link>, null, null,
                            <Link className={`nav-link px-3 bg-md-success ${getNavbarLinkColor(location, "/projects")}`}
                                to="/projects">Projects</Link>)}
                        {breakpointSelector(
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/portfolio")}`}
                                onClick={navbarLinkClick} to="/portfolio" style={expandBgNavSmall}>Portfolio</Link>, null, null,
                            <Link className={`nav-link px-3 bg-md-success ${getNavbarLinkColor(location, "/portfolio")}`}
                                to="/portfolio">Portfolio</Link>)}
                        {breakpointSelector(
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/contact")}`}
                                onClick={navbarLinkClick} to="/contact" style={expandBgNavSmall}>Contact</Link>, null, null,
                            <Link className={`nav-link px-3 bg-md-success ${getNavbarLinkColor(location, "/contact")}`}
                                to="/contact">Contact</Link>)}

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;