
import { useLayoutEffect } from 'react';
import useRequest from "../hooks/useRequest";
import useResize from '../hooks/useResize';
import Nbsp from "../helpers/Nbsp";
import {
    Link,
} from "react-router-dom";
import About4 from './LandingComponents';
import Landing1, { Landing1RefreshState } from './sketches/Landing1';
import Landing2, { Landing2RefreshState } from './sketches/Landing2';
import { Landing3RefreshState } from './sketches/Landing3';

const Landing = () => {
    const { dimensions, breakpointSelector } = useResize();
    const { response } = useRequest(`https://portfolio-api-jeremy.web.app/projects`, {
        alt: "http://localhost:3004/data"
    });

    useLayoutEffect(() => {
        const refreshLoopStates = () => {
            Landing1RefreshState();
            Landing2RefreshState();
            Landing3RefreshState();
        }

        let running = false;
        let promise = false;
        const debounce = (func) => {
            if (running) {
                promise = true;
                return;
            }
            running = true;
            func();
            setTimeout(() => {
                running = false;
                if (promise) {
                    promise = false;
                    debounce(func);
                }
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
            Landing1RefreshState(true);
            Landing2RefreshState(true);
            Landing3RefreshState(true);
        };
    }, [])

    useLayoutEffect(() => {
    }, [dimensions])

    const submitCallback = (e) => {
        e.preventDefault();
        console.log(e);
    }
    const getProjectTile = (id) => {
        if (response == null)
            return (<div className="col-12 col-md-6 mb-2">
                <div className="card">
                    <div className="card-body m-1 m-md-4">
                        <h5 className="card-title no-underline text-secondary"> </h5>
                        <p className="card-text text-dark">Loading...</p>
                    </div>
                </div>
            </div>);
        const proj = response.find((p) => p.id === id);
        return (<div className="col-12 col-md-6 mb-2">
            <Link to={`/projects/${id}`} className="link-no-underline"><div className="card">
                <div className="card-body m-1 m-md-4">
                    <h5 className="card-title no-underline text-secondary">{proj.title}</h5>
                    <p className="card-text text-dark">{proj.descShort}</p>
                </div>
            </div></Link>
        </div>);
    }

    return (
        <div id="about-me">
            <div id="about1" style={{ height: breakpointSelector("80vh", null, null, "90vh") }}>
                <Landing1 />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center h-100">
                    <div className="display-6 pt-5 pb-2 d-inline-block text-muted fs-5 fs-md-4">So let me introduce myself...</div>
                    <div className="display-4 px-3 pb-3 d-inline-block">My name is <span className="text-primary">Jeremy</span>, and I am a <span className="text-secondary">full&#8209;stack<Nbsp />developer</span></div>
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
                    <Landing2 />
                    <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center align-items-stretch border-0 h-100">
                        <div className="display-1 text-primary m-3 font-title">Projects</div>
                        <div className="row mx-xs-2 mx-md-5 gx-2">
                            {getProjectTile('loose-blocks')}
                            {getProjectTile('buwad-republic')}
                        </div>
                        <div className="row mx-xs-2 mx-md-5 gx-2">
                            {getProjectTile('simple-money-counter')}
                            {breakpointSelector(<span />, null, getProjectTile('cell-trace'))}
                        </div>

                        <Link to="/projects">
                            <button className="btn btn-primary align-self-center m-3 text-light">See More Projects ❯</button>
                        </Link>
                    </div>

                </div>
            </div>
            <About4 />
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