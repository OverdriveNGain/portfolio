import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = () => {
    const [transparent, setTransparent] = useState(true);
    const transparentThreshold = 300;

    useEffect(() => {
        setTransparent(document.documentElement.scrollTop <= transparentThreshold);
    }, []);
    useEffect(() => {
        const onScroll = e => {
            setTransparent(e.target.documentElement.scrollTop <= transparentThreshold);
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            return window.removeEventListener("scroll", onScroll);
        };
    }, [transparent]);


    const inlineNavbarStyle = {
        "backgroundColor": (transparent ? "transparent" : "rgba(255, 255, 255, 0.92)"),
        "backdropFilter": (transparent ? "none" : "blur(6px)")
    };
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top animated-background-color" style={inlineNavbarStyle}>
            <div className="container px-4">
                <Link className={"animated-opacity navbar-brand" + (transparent ? " opacity-0" : "")} to="/">
                    <div className="fw-bold text-primary b-0">Jeremy Mattheu D. Amon</div>
                    <small className="text-muted">Full-Stack Software Engineer</small>
                </Link>
                <button className="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link px-3 text-primary" to="/aboutme">About Me</Link>
                        <Link className="nav-link px-3 text-primary" to="/">Portfolio</Link>
                        <Link className="nav-link px-3 text-primary" to="/">Testimonials</Link>
                        <Link className="nav-link px-3 text-primary" to="/">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;