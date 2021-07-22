import { useEffect, useState } from 'react';

const Navbar = () => {
    const [transparent, setTransparent] = useState(true);

    useEffect(() => {
        const onScroll = e => {
            setTransparent(e.target.documentElement.scrollTop <= 100);
        };
        console.log("added");
        window.addEventListener("scroll", onScroll);

        return () => {
            console.log("removed");
            return window.removeEventListener("scroll", onScroll);
        };
    }, [transparent]);

    return (
        <nav className={"navbar navbar-expand-md navbar-light fixed-top " + (transparent ? "bg-transparent" : "bg-white")}>
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