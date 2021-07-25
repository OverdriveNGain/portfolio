/* eslint-disable no-undef */
import { useEffect } from 'react';
import useScript from '../hooks/useScript';
// import { useEffect } from 'react';
// import landing_services_hover from 'public/sketches/landing_sketches.js';

const AboutMe = () => {
    useScript('sketches/landing.js');
    useScript('sketches/landing2.js');
    useScript('sketches/landing_services.js');

    useEffect(() => {
        const waitUntilInit = async () => {
            let temp;
            temp = window.setInterval(() => {
                try {
                    if (landing1FunctionSetVisible || landing2FunctionSetVisible || landingServicesSetVisible);
                } catch (e) {
                    if (e instanceof ReferenceError) {
                        return;
                    }
                }
                const refreshLoopStates = () => {
                    let position = document.getElementById('landing1').getBoundingClientRect();
                    landing1FunctionSetVisible(position.top < window.innerHeight && position.bottom >= 0);
                    position = document.getElementById('landing2').getBoundingClientRect();
                    landing2FunctionSetVisible(position.top < window.innerHeight && position.bottom >= 0);
                    position = document.getElementById('landing_services').getBoundingClientRect();
                    landingServicesSetVisible(position.top < window.innerHeight && position.bottom >= 0);
                }
                refreshLoopStates()
                window.addEventListener('scroll', function () {
                    refreshLoopStates();
                });
                window.clearInterval(temp);
            }, 10);
        }
        waitUntilInit();
    }, [])

    const submitCallback = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div id="about-me">
            <div id="about1">
                <div id="landing1" />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center">
                    <div className="display-6 pt-5 pb-2 d-inline-block text-muted">So let me introduce myself...</div>
                    <div className="display-2 pb-3 d-inline-block">My name is Jeremy,</div>
                    <div className="display-6 pb-2 d-inline-block">and I am a full-stack software engineer.</div>
                </div>
            </div>
            <div id="about2">
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center text-light">
                    <div className="display-1 m-3 font-title">About Me</div>
                    <div className="lead">I create mobile apps, websites, web apps, Unity games to be played on multiple platforms.</div>
                    <p> I highly believe that the mastery of a certain framework requires the mastery of all skills relevant to that framework. Thus, I take understanding of a certain project very seriously. In any case, whether it be a website for your aspiring business, or a mobile app that unites your entire customer base,</p>
                    <p>I get the job done, and more.</p>
                </div>
            </div>
            <div id="about3">
                <div id="landing2" />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center align-items-stretch border-0">
                    <div className="display-1 text-primary mb-5 font-title">Projects</div>
                    <div className="row mx-xs-2 mx-md-5">
                        <div className="col-12 col-md-6 mb-4">
                            <a href="/"><div className="card">
                                <div className="card-body m-1 m-md-4">
                                    <h5 className="card-title no-underline">Card title</h5>
                                    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></a>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <a href="/"><div className="card">
                                <div className="card-body m-1 m-md-4">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
                    <div className="row mx-xs-2 mx-md-5">
                        <div className="col-12 col-md-6 mb-4">
                            <a href="/"><div className="card">
                                <div className="card-body m-1 m-md-4">
                                    <h5 className="card-title no-underline">Card title</h5>
                                    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></a>
                        </div>
                        <div className="d-none d-md-flex col-8 col-md-6 mb-4">
                            <a href="/"><div className="card">
                                <div className="card-body m-1 m-md-4">
                                    <h5 className="card-title">Last Card title</h5>
                                    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div></a>
                        </div>
                    </div>

                    <button className="btn btn-primary align-self-center m-3 text-light">See More Projects</button>
                </div>
            </div>
            <div id="about4">
                <div id="landing_services" />
                <div className="align-middle container px-0 py-3 text-center d-flex flex-column justify-content-center align-items-stretch">
                    <div className="display-1 text-primary mb-5 font-title text-white">Skills & Services</div>
                    <div className="row mx-md-5 g-3">
                        <div className="col-12 col-md-4">
                            <a href="/"><div className={`card border-0 rounded rounded-on-md shadow`}
                                onMouseOver={(e) => landing_services_hover(e, 0)} onMouseOut={(e) => landing_services_hover(e, -1)}>
                                <div className="card-body m-1 m-md-4">
                                    <i className="bi bi-brush display-1"></i>
                                    <h5 className="card-title no-underline">Graphic Design</h5>
                                    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <small className="text-muted">Adobe Illustrator • Adobe Photoshop • p5.js • Processing • Python</small>
                                </div>
                            </div></a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a href="/"><div className="card border-0 rounded rounded-on-md shadow" onMouseOver={(e) => landing_services_hover(e, 1)} onMouseOut={(e) => landing_services_hover(e, -1)}>
                                <div className="card-body m-1 m-md-4">
                                    <i className="bi bi-globe2 display-1"></i>
                                    <h5 className="card-title">Website Development</h5>
                                    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <small className="text-muted">HTML • CSS • Javascript • SASS • React • Flutter • Firebase • Bootstrap 5 • git • GitHub</small>
                                </div>
                            </div></a>
                        </div>
                        <div className="col-12 col-md-4">
                            <a href="/"><div className="card border-0 rounded rounded-on-md shadow" onMouseOver={(e) => landing_services_hover(e, 2)} onMouseOut={(e) => landing_services_hover(e, -1)}>
                                <div className="card-body m-1 m-md-4">
                                    <i className="bi bi-phone display-1"></i>
                                    <h5 className="card-title">Mobile App Development</h5>
                                    <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <small className="text-muted">React • Flutter • Adobe XD • Firebase • Unity 3D • git • GitHub</small>
                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>

            </div>
            <div id="about5">
                <div className="align-middle container px-0 py-3 text-center d-flex flex-column justify-content-center align-items-stretch">
                    <div className="display-1 text-primary mb-5 font-title">Testimonials</div>
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-7">
                            <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam magni adipisci neque vero! Odit ab, expedita repellat aliquam magnam, vitae sed totam ea sequi eaque, laborum accusantium minima officiis."</blockquote>
                            <div className="rounded-circle border mx-auto border-primary border-2 my-4" id="testimonial-portrait-holder">
                                <img src="https://previews.123rf.com/images/gladkov/gladkov1312/gladkov131200051/24403725-closeup-portrait-of-young-man-call-center-employee-with-a-headset-isolated-on-white-background.jpg" alt="Testimonial Person Portrait" />
                            </div>
                            <div className="fw-bold">Firstname M. Last</div>
                            <p className="text-muted">President of Cuba</p>
                        </div></div>
                </div>
            </div>
            <div id="about6" className="bg-light">
                <div className="align-middle container px-0 py-3 text-center d-flex flex-column 
                justify-content-center align-items-stretch px-4 py-5">
                    <div className="display-6 text-primary">Need to get something done?</div>
                    <div className="display-3 text-primary mb-4 font-title">Let’s Talk!</div>
                    <div className="row justify-content-center">
                        <div className="col col-7 text-start">
                            <form onSubmit={(e) => { submitCallback(e) }}>
                                <div className="mb-3">
                                    <label htmlFor="contactName" className="form-label fw-bold text-primary">Name</label>
                                    <input type="name" className="form-control" id="contactName" placeholder="John Doe" name="fname" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactEmail" className="form-label fw-bold text-primary">Email</label>
                                    <input type="email" className="form-control" id="contactEmail" placeholder="name@example.com" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactMessage" className="form-label fw-bold text-primary">Message</label>
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

export default AboutMe;