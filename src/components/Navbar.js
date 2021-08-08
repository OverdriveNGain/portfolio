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
            default:
                if (scrollTop <= 50)
                    isBgTransparent = true;
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
        if (navToggle.getAttribute("aria-expanded") === "true")
            navToggle.click();
        setNavbarExpanded(false);
    }

    const navbarTogglerHandler = () => {
        const navToggle = document.getElementById('nav-toggle');
        setNavbarExpanded(navToggle.getAttribute("aria-expanded") === "true");
    }

    const getNavLinks = () => {
        const routes = ["/aboutme", "/projects", "/cv", "/contact"];
        const titles = ["About Me", "Projects", "CV", "Contact Me"];
        const navs = [];
        for (let i = 0; i < titles.length; i++) {
            navs.push(breakpointSelector(
                <Link key={i} className={`nav-link px-3 ${getNavbarLinkColor(location, routes[i])}`}
                    onClick={() => { navbarLinkClick(); }} to={routes[i]}>{titles[i]}</Link>, null, null,
                <Link key={i} className={`nav-link px-3 ${getNavbarLinkColor(location, routes[i])}`}
                    to={routes[i]}>{titles[i]}</Link>))
        }
        return (
            <div className="navbar-nav">
                {navs}
            </div>
        );
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
                    {getNavLinks()}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;