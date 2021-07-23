import useScript from '../hooks/useScript';

const AboutMe = () => {
    useScript('sketches/landing.js');
    useScript('sketches/landing2.js');
    return (
        <div id="about-me">
            <div id="about1">
                <div id="sketch-floating-nodes" />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center">
                    <div className="display-6 pt-5 pb-2 d-inline-block">So let me introduce myself...</div>
                    <div className="display-2 pb-3 d-inline-block">My name is Jeremy,</div>
                    <div className="display-6 pb-2 d-inline-block">and I am a full-stack software engineer.</div>
                </div>
            </div>
            <div id="about2">
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center text-light">
                    <div className="display-1 m-3">About Me</div>
                    <div className="lead">I create mobile apps, websites, web apps, Unity games to be played on multiple platforms.</div>
                    <p> I highly believe that the mastery of a certain framework requires the mastery of all skills relevant to that framework. Thus, I take understanding of a certain project very seriously. In any case, whether it be a website for your aspiring business, or a mobile app that unites your entire customer base,</p>
                    <p>I get the job done, and more.</p>
                </div>
            </div>
            <div id="about3">
                <div id="landing2" />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center align-items-stretch border-0">
                    <div className="display-1 text-primary my-5">Projects</div>
                    <div className="row mx-xs-2 mx-md-5">
                        <div className="col-12 col-md-6 mb-4">
                            <a href="/"><div className="card">
                                <div className="card-body m-1 m-md-4">
                                    <h5 className="card-title no-underline">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></a>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <a href="/"><div className="card">
                                <div className="card-body m-1 m-md-4">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
                    <div className="row mx-xs-2 mx-md-5">
                        <div className="col-12 col-md-6 mb-4">
                            <a href="/"><div className="card">
                                <div className="card-body m-1 m-md-4">
                                    <h5 className="card-title no-underline">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></a>
                        </div>
                        <div className="d-none d-md-flex col-8 col-md-6 mb-4">
                            <a href="/"><div className="card">
                                <div className="card-body m-1 m-md-4">
                                    <h5 className="card-title">Last Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></a>
                        </div>
                    </div>

                    <button className="btn btn-primary align-self-center m-3">See More Projects</button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;