import { useEffect, useState } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import useResize from '../hooks/useResize';
import NavbarBrand from './NavbarComponents';

const Navbar = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [navbarExpanded, setNavbarExpanded] = useState(false);
    const { breakpointSelector } = useResize();

    const location = useLocation();
    const refreshScrollTop = () => {
        setScrollTop(document.documentElement.scrollTop);
    }

    useEffect(() => {
        refreshScrollTop();

        window.addEventListener("scroll", refreshScrollTop);

        return () => {
            return window.removeEventListener("scroll", refreshScrollTop);
        };
    }, []);


    const getInlineNavbarStyle = () => {
        let isBgTransparent = false;
        switch (location.pathname) {
            case "/":
                if (scrollTop <= 150)
                    isBgTransparent = true;
                break;
            case "/cv":
                if (scrollTop <= 50)
                    isBgTransparent = true;
                break;
            default:
                break;
        }

        if (navbarExpanded)
            isBgTransparent = false;

        return {
            "backgroundColor": (isBgTransparent ? "transparent" : "rgba(255, 255, 255, 0.92)"),
            "backdropFilter": (isBgTransparent ? "none" : "blur(3px)")
        };
    }

    const getNavbarLinkColor = (locationObject, targetPath) => {
        return locationObject.pathname.includes(targetPath) ? "text-secondary" : "text-primary";
    }

    const navbarLinkClick = () => {
        const navToggle = document.getElementById('nav-toggle');
        if (navbarExpanded)
            navToggle.click();
        setNavbarExpanded(false);
    }

    const navbarTogglerHandler = () => {
        setNavbarExpanded(!navbarExpanded);
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top animated-background-color" style={getInlineNavbarStyle()}>
            <div className="container px-4">
                <NavbarBrand location={location} scrollTop={scrollTop} navbarLinkClick={navbarLinkClick} />
                <button className="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" id="nav-toggle" aria-expanded="false">
                    <span className="navbar-toggler-icon" onClick={() => { navbarTogglerHandler(); }}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {breakpointSelector(
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/aboutme")}`}
                                onClick={navbarLinkClick} to="/aboutme">About Me</Link>, null, null,
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/aboutme")}`}
                                to="/aboutme" >About Me</Link>)}
                        {breakpointSelector(
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/projects")}`}
                                onClick={navbarLinkClick} to="/projects">Projects</Link>, null, null,
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/projects")}`}
                                to="/projects">Projects</Link>)}
                        {breakpointSelector(
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/cv")}`}
                                onClick={navbarLinkClick} to="/cv">CV</Link>, null, null,
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/cv")}`}
                                to="/cv">CV</Link>)}
                        {breakpointSelector(
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/contact")}`}
                                onClick={navbarLinkClick} to="/contact">Contact</Link>, null, null,
                            <Link className={`nav-link px-3 ${getNavbarLinkColor(location, "/contact")}`}
                                to="/contact">Contact</Link>)}

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;