import { useEffect, useState } from 'react';

const Navbar = () => {
    const [transparent, setTransparent] = useState(null); // null means not yet set

    useEffect(() => {
        setTransparent(document.documentElement.scrollTop <= 100);
    }, []);
    useEffect(() => {
        const onScroll = e => {
            setTransparent(e.target.documentElement.scrollTop <= 100);
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            return window.removeEventListener("scroll", onScroll);
        };
    }, [transparent]);


    const inlineNavbarStyle = {
        "backgroundColor": (transparent ?? (document.documentElement.scrollTop <= 100) ?
            "transparent" : "rgba(255, 255, 255, 0.92)"),
        "backdropFilter": (transparent ?? (document.documentElement.scrollTop <= 100) ?
            "none" : "blur(6px)")
    };
    return (
        <nav className={"navbar navbar-expand-md navbar-light fixed-top"} style={inlineNavbarStyle}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="fw-bold text-primary b-0">Jeremy Mattheu D. Amon</div>
                    <small className="text-muted">Full-Stack Software Engineer</small>
                </a>
                <button className="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link px-3 text-primary" href="/">About Me</a>
                        <a className="nav-link px-3 text-primary" href="/">Portfolio</a>
                        <a className="nav-link px-3 text-primary" href="/">Testimonials</a>
                        <a className="nav-link px-3 text-primary" href="/">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;