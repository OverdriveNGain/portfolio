import { useEffect, useState } from 'react';

const Navbar = () => {
    const [transparent, setTransparent] = useState(true);

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
        "background-color": (transparent ? "transparent" : "rgba(255, 255, 255, 0.92)"),
        "backdrop-filter": (transparent ? "none" : "blur(6px)")
    };
    console.log(transparent ? "white" : "background-color: rgba(255, 0, 255, 0.212)");
    return (
        <nav className={"navbar navbar-expand-md navbar-light fixed-top"} style={inlineNavbarStyle}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="fw-bold text-primary b-0">Jeremy Mattheu D. Amon</div>
                    <small>Full-Stack Software Engineer</small>
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