import { useEffect } from "react";

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-md-10 px-4">
                    <p className="py-5" />
                    <p className="display-1 font-title text-primary text-center">Portfolio</p>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;