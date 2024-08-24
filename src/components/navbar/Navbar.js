import { useEffect, useState } from 'react';
import {
    useLocation
} from "react-router-dom";
import NavbarBrand from './NavbarBrand';
import NavbarLinks from './NavbarLinks';
import NavbarMobileLinks from './NavbarMobileLinks';

const Navbar = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [navbarExpanded, setNavbarExpanded] = useState(false);

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
            case "/contact":
                isBgTransparent = false;
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

    const linksData = [
        ["/aboutme", "About Me"],
        ["/projects", "Projects"],
        ["/cv", "CV"],
        ["/contact", "Contact Me"]
    ];

    return (
        <nav id="navbar-main" className="navbar navbar-expand-md navbar-light fixed-top animated-background-color" style={getInlineNavbarStyle()}>
            <div className="container px-4">
                <NavbarBrand location={location} scrollTop={scrollTop}/>
                <NavbarLinks linksData={linksData}/>
                <NavbarMobileLinks linksData={linksData}/>
            </div>
        </nav>
    );
}

export default Navbar;