
import { useEffect, useLayoutEffect } from 'react';
import useScript from '../hooks/useScript';
import useResize from '../hooks/useResize';
import Nbsp from "../helpers/Nbsp";

const Landing = () => {
    const { dimensions, breakpointSelector } = useResize();
    useScript('sketches/landing.js');
    useScript('sketches/landing2.js');
    useScript('sketches/landing_services.js');

    useEffect(() => {
        const refreshLoopStates = () => {
            if (document.getElementById('landing_services') === null)
                return;

            try {
                // eslint-disable-next-line no-undef
                landing1FunctionSetVisible();
                // eslint-disable-next-line no-undef
                landing2FunctionSetVisible();
                // eslint-disable-next-line no-undef
                landingServicesSetVisible();
            } catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
                else
                    return false;
            }
        }

        let running = false;
        const debounce = (func) => {
            if (running)
                return;
            running = true;
            func();
            setTimeout(() => {
                running = false;
            }, 300);
        }

        const waitUntilInit = async () => {
            let temp;
            temp = window.setInterval(() => {
                if (refreshLoopStates() === false) {
                }
                else {
                    window.addEventListener('scroll', () => {
                        debounce(() => {
                            refreshLoopStates();
                        });
                    });
                    window.clearInterval(temp);
                }
            }, 10);
        }

        window.scrollTo(0, 0);

        waitUntilInit();
        return () => {
            window.removeEventListener('scroll', function () {
                refreshLoopStates();
            });
            try {
                // eslint-disable-next-line no-undef
                landing1FunctionSetVisible(true);
                // eslint-disable-next-line no-undef
                landing2FunctionSetVisible(false);
                // eslint-disable-next-line no-undef
                landingServicesSetVisible(false);
            } catch (e) {
                if (!(e instanceof ReferenceError))
                    throw e;
            }
        };
    }, [])

    useLayoutEffect(() => {
        try {
            // eslint-disable-next-line no-undef
            landing1FunctionResize();
            // eslint-disable-next-line no-undef
            landing2FunctionResize();
            // eslint-disable-next-line no-undef
            landing3ServicesResize();
        } catch (e) {
            if (!(e instanceof ReferenceError))
                throw e;
        }
    }, [dimensions])

    const submitCallback = (e) => {
        e.preventDefault();
        console.log(e);
    }

    const landingServicesHoverHandler = (e, value) => {
        try {
            /*eslint-disable-next-line no-undef*/
            landing_services_hover(e, value);
        } catch (e) {
            if (!(e instanceof ReferenceError))
                throw e;
        }
    }

    const about4 = (
        <div id="about4">
            <div id="landing_services" className=" w-100 behind" />
            <div style={{ padding: `${breakpointSelector(60, null, null, 80, 100, 120)}px 0px` }}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="display-1 font-title text-white mb-3 mb-md-5 text-center">Skills & Services</div>
                        <div className="row g-3 align-items-center">
                            <div className="col-12 col-md-4">
                                {/*eslint-disable-next-line no-undef*/}
                                <a href="/" className="link-no-underline"><div className="card border-0 rounded rounded-on-md shadow mx-1 mx-md-0" onMouseOver={(e) => landingServicesHoverHandler(e, 0)} onMouseOut={(e) => landingServicesHoverHandler(e, -1)}>
                                    <div className="card-body m-1 m-md-4 text-center p-2 p-sm-4">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-2 col-md-8"><i className="bi bi-brush display-1 text-secondary d-none d-md-inline"></i></div>
                                            <div className="col-12">
                                                <h5 className="card-title no-underline text-secondary">
                                                    <i className="bi bi-brush text-secondary d-inline d-md-none"></i>     Graphic Design</h5>
                                                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <small className="text-muted">Adobe Illustrator • Adobe Photoshop • p5.js • Processing • Python</small>
                                            </div>
                                        </div>
                                    </div>
                                </div></a>
                            </div>
                            <div className="col-12 col-md-4">
                                {/*eslint-disable-next-line no-undef*/}
                                <a href="/" className="link-no-underline"><div className="card border-0 rounded rounded-on-md shadow mx-1 mx-md-0" onMouseOver={(e) => landingServicesHoverHandler(e, 1)} onMouseOut={(e) => landingServicesHoverHandler(e, -1)}>
                                    <div className="card-body m-1 m-md-4 text-center p-2 p-sm-4">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-2 col-md-8"><i className="bi bi-globe2 display-1 text-secondary d-none d-md-inline"></i></div>
                                            <div className="col-12 text-md-center">
                                                <h5 className="card-title no-underline text-secondary">
                                                    <i className="bi bi-globe2 text-secondary d-inline d-md-none"></i>     Website Development</h5>
                                                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <small className="text-muted">HTML • CSS • Javascript • SASS • React • Flutter • Firebase • Bootstrap 5 • git • GitHub</small>
                                            </div>
                                        </div>
                                    </div>
                                </div></a>
                            </div>
                            <div className="col-12 col-md-4">
                                {/*eslint-disable-next-line no-undef*/}
                                <a href="/" className="link-no-underline"><div className="card border-0 rounded rounded-on-md shadow mx-1 mx-md-0" onMouseOver={(e) => landingServicesHoverHandler(e, 2)} onMouseOut={(e) => landingServicesHoverHandler(e, -1)}>
                                    <div className="card-body m-1 m-md-4 text-center p-2 p-sm-4">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-2 col-md-8"><i className="bi bi-phone display-1 text-secondary d-none d-md-inline"></i></div>
                                            <div className="col-12 text-md-center">
                                                <h5 className="card-title no-underline text-secondary">
                                                    <i className="bi bi-phone text-secondary d-inline d-md-none"></i>     Mobile App Development</h5>
                                                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <small className="text-muted">React • Flutter • Adobe XD • Firebase • Unity 3D • git • GitHub</small>
                                            </div>
                                        </div>
                                    </div>
                                </div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div id="about-me">
            <div id="about1" style={{ height: breakpointSelector("80vh", null, null, "90vh") }}>
                <div id="landing1" />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center h-100">
                    <div className="display-6 pt-5 pb-2 d-inline-block text-muted fs-5 fs-md-4">So let me introduce myself...</div>
                    <div className="display-4 px-3 pb-3 d-inline-block">My name is <span className="text-primary">Jeremy</span>, and I am a <span className="text-secondary">full-stack software<Nbsp />engineer</span>.</div>
                </div>
            </div>
            <div id="about2">
                <div style={{ padding: `${breakpointSelector(30, 60, null, 80, 100, 120)}px 0px` }}>
                    <div className="align-middle container py-3 text-center text-light h-100 px-3 px-sm-5">
                        <div className="display-1 m-3 font-title">About Me</div>
                        <div className="mb-3">I create mobile apps, websites, web apps, Unity games to be played on multiple platforms.</div>
                        <p> I highly believe that the mastery of a certain framework requires the mastery of all skills relevant to that framework. Thus, I take understanding of a certain project very seriously. In any case, whether it be a website for your aspiring business, or a mobile app that unites your entire customer base,</p>
                        <p className="lead fw-bold">I get the job done, and more.</p>
                    </div>
                </div>
            </div>
            <div id="about3">
                <div style={{ padding: `${breakpointSelector(10, 30, null, 80, 100, 120)}px 0px` }}>
                    <div id="landing2" />
                    <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center align-items-stretch border-0 h-100">
                        <div className="display-1 text-primary m-3 font-title">Projects</div>
                        <div className="row mx-xs-2 mx-md-5">
                            <div className="col-12 col-md-6 mb-2 mb-sm-4">
                                <a href="/" className="link-no-underline"><div className="card">
                                    <div className="card-body m-1 m-md-4">
                                        <h5 className="card-title no-underline text-secondary">Card title</h5>
                                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div></a>
                            </div>
                            <div className="col-12 col-md-6 mb-2 mb-sm-4">
                                <a href="/" className="link-no-underline"><div className="card">
                                    <div className="card-body m-1 m-md-4">
                                        <h5 className="card-title text-secondary">Card title</h5>
                                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div></a>
                            </div>
                        </div>
                        <div className="row mx-xs-2 mx-md-5">
                            <div className="col-12 col-md-6 mb-2 mb-sm-4">
                                <a href="/" className="link-no-underline"><div className="card">
                                    <div className="card-body m-1 m-md-4">
                                        <h5 className="card-title no-underline text-secondary">Card title</h5>
                                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div></a>
                            </div>
                            <div className="d-none d-md-flex col-8 col-md-6 mb-4">
                                <a href="/" className="link-no-underline"><div className="card">
                                    <div className="card-body m-1 m-md-4">
                                        <h5 className="card-title text-secondary">Last Card title</h5>
                                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div></a>
                            </div>
                        </div>

                        <button className="btn btn-primary align-self-center m-3 text-light">See More Projects</button>
                    </div>

                </div>
            </div>
            {about4}
            <div id="about5">
                <div className="align-middle container px-0 my-5 text-center d-flex flex-column justify-content-center align-items-stretch h-100">
                    <div className="display-1 text-primary mb-5 font-title">Testimonials</div>
                    <div className="px-5">
                        <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam magni adipisci neque vero! Odit ab, expedita repellat aliquam magnam, vitae sed totam ea sequi eaque, laborum accusantium minima officiis."</blockquote>
                        <div className="rounded-circle border mx-auto border-secondary border-2 my-4" id="testimonial-portrait-holder">
                            <img src="https://previews.123rf.com/images/gladkov/gladkov1312/gladkov131200051/24403725-closeup-portrait-of-young-man-call-center-employee-with-a-headset-isolated-on-white-background.jpg" alt="Testimonial Person Portrait" />
                        </div>
                        <div className="fw-bold">Firstname M. Last</div>
                        <p className="text-muted">President of Cuba</p>
                    </div>
                </div>
            </div>
            <div id="about6" className="bg-light">
                <div className="align-middle container px-0 py-3 text-center d-flex flex-column 
                justify-content-center align-items-stretch px-4 py-5">
                    <div className="display-6 text-muted">Need to get something<Nbsp />done?</div>
                    <div className="display-3 text-primary mb-4 font-title">Let’s Talk!</div>
                    <div className="row justify-content-center">
                        <div className="col col-sm-7 text-start">
                            <form onSubmit={(e) => { submitCallback(e) }}>
                                <div className="mb-3">
                                    <label htmlFor="contactName" className="form-label fw-bold text-secondary">Name</label>
                                    <input type="name" className="form-control" id="contactName" placeholder="John Doe" name="fname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactEmail" className="form-label fw-bold text-secondary">Email</label>
                                    <input type="email" className="form-control" id="contactEmail" placeholder="name@example.com" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactMessage" className="form-label fw-bold text-secondary">Message</label>
                                    <textarea className="form-control" id="contactMessage" rows="3" name="message"></textarea>
                                </div>
                                <div className="text-center"><button className="btn btn-primary text-light" type="submit"><i className="bi bi-envelope-fill pe-2"></i>Send</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

