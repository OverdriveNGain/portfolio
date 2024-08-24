import useResize from "../hooks/useResize";
import Landing2 from './sketches/Landing2';
import Landing3, { Landing3Hover } from "./sketches/Landing3";
import {
    Link,
} from "react-router-dom";
import Nbsp from "../helpers/Nbsp";
import { useState } from "react";
import axios from 'axios';
import 'dotenv/config';
import { getProject } from "../projects.js";

const About4 = () => {
    const { breakpointSelector } = useResize();

    const landingServicesHoverHandler = (e, value) => {
        Landing3Hover(e, value);
    }

    const tiles = [];
    const tileIcon = ["bi bi-brush", "bi bi-globe2", "bi bi-phone"];
    const tileTitle = ["     Graphic Design", "     Software Development", "     Data Science"]
    const tileDesc = [
        "Visual emphasis to support your business's brand and identity.",
        "Leveraging desktop, web, and mobile platforms to optimize business operations and productivity.",
        "Using data and automation to drive process throughput and business outcomes."
    ]
    const tileTools = [
        "Adobe Illustrator • Adobe Photoshop • p5.js • Processing • Python",
        "Flutter • Firebase • React JS • SASS • Bootstrap 5 • git",
        "Python • Dart • Flutter • "
    ]
    for (let i = 0; i < 3; i++) {
        tiles.push(<div key={i} className="col-12 col-md-4">
            <div className="card border-0 rounded rounded-on-md shadow mx-1 mx-md-0" onMouseOver={(e) => landingServicesHoverHandler(e, i)} onMouseOut={(e) => landingServicesHoverHandler(e, -1)}>
                <div className="card-body text-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-2 col-md-8"><i className={`${tileIcon[i]} display-1 text-secondary d-none d-md-inline`}></i></div>
                        <div className="col-12">
                            <h5 className="card-title no-underline text-secondary">
                                <i className={`${tileIcon[i]} text-secondary d-inline d-md-none`}/>{tileTitle[i]}</h5>
                            <p className="card-text text-dark">{tileDesc[i]}</p>
                            <small className="text-muted">{tileTools[i]}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
    return (
        <div id="about4">
            <Landing3 />
            <div style={{ padding: `${breakpointSelector(60, null, null, 80, 100, 120)}px 0px` }}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="display-1 font-title text-white mb-3 mb-md-5 text-center">Skills & Services</div>
                        <div className="row g-3 align-items-center">
                            {tiles}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const LandingProjectsSection = () => {
    const { breakpointSelector } = useResize();

    const getProjectTile = (id) => {
        const proj = getProject(id);
        return (<div className="col-12 mb-2">
            <Link to={`/projects/${id}`} className="link-no-underline"><div className="card animated-all-quick">
                <div className="card-body m-1 hover:bg-primary">
                    <h5 className="card-title no-underline text-secondary">{proj.title}</h5>
                    <p className="card-text text-dark">{proj.descShort}</p>
                </div>
            </div></Link>
        </div>);
    }

    return (
        <div id="landingProjectsSection">
            <div style={{ padding: `${breakpointSelector(10, 30, null, 80, 100, 120)}px 0px` }}>
                <Landing2 />
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center align-items-stretch border-0 h-100">
                    <div className="display-1 text-primary m-3 font-title">Projects</div>
                    <div className="row mx-xs-2 mx-md-5 gx-2">
                        {getProjectTile('pay-up-or-else')}
                        {getProjectTile('i-cant-decide')}
                        {getProjectTile('cdscdb-database')}
                        {getProjectTile('up-crest-25')}
                    </div>
                    <Link to="/projects">
                        <button className="btn btn-primary align-self-center m-3 text-light">See More Projects ❯</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

const About6 = () => {
    const [formEmail, setFormEmail] = useState('');
    const [formName, setFormName] = useState('');
    const [formBody, setFormBody] = useState('');

    const [modalMessage, setModalMessage] = useState(null);
    const [sendButtonLabel, setSendButtonLabel] = useState("Send");

    const submitCallback = (e) => {
        const openModal = () => {
            document.getElementById("modalButton").click();
        }
        e.preventDefault();
        if (formEmail.trim().length === 0) {
            setModalMessage("Please enter an email");
            openModal();
        }
        else if (formName.trim().length === 0) {
            setModalMessage("Please enter your name");
            openModal();
        }
        else if (formBody.trim().length === 0) {
            setModalMessage("Please enter your message");
            openModal();
        }
        else {
            setSendButtonLabel("Please wait...");
            console.log({
                email: formEmail,
                name: formName,
                body: formBody
            });
            axios.post(`${process.env.REACT_APP_API_ENDPOINT}sendmail`, null, {
                params: {
                    email: formEmail,
                    name: formName,
                    body: formBody
                }
            }).then((response) => {
                setModalMessage("Message successfully sent!");
                setSendButtonLabel("Send");
                openModal();
            })
        }
    }

    const onNameChange = (e) => {
        setFormName(e.target.value);
    }
    const onEmailChange = (e) => {
        setFormEmail(e.target.value);
    }
    const onBodyChange = (e) => {
        setFormBody(e.target.value);
    }

    const getModal = () => {
        return <div>
            <button id="modalButton" type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#sendConfirmModal" />
            <div className="modal fade" id="sendConfirmModal" tabIndex="-1" aria-labelledby="sendConfirmModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center my-5">
                                {modalMessage}
                            </div>
                            <div className="text-center mt-3">
                                <button type="button" className="btn btn-primary text-white" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }


    return (
        <div id="about6" className="">
            {getModal()}
            <div className="align-middle container px-0 py-3 text-center d-flex flex-column 
                justify-content-center align-items-stretch px-4 py-5">
                <div className="display-6 text-muted">Need to get something<Nbsp />done?</div>
                <div className="display-3 text-primary mb-4 font-title">Let’s Talk!</div>
                <div className="row justify-content-center">
                    <div className="col col-sm-7 text-start">
                        <form onSubmit={(e) => { submitCallback(e) }}>
                            <div className="mb-3">
                                <label htmlFor="contactEmail" className="form-label fw-bold text-secondary">Email</label>
                                <input type="email" value={formEmail} className="form-control" id="contactEmail" placeholder="name@example.com" name="email" onChange={onEmailChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactName" className="form-label fw-bold text-secondary">Name</label>
                                <input type="name" value={formName} className="form-control" id="contactName" placeholder="John Doe" name="fname" onChange={onNameChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactMessage" className="form-label fw-bold text-secondary">Message</label>
                                <textarea className="form-control" value={formBody} id="contactMessage" rows="8" name="message" onChange={onBodyChange}></textarea>
                            </div>
                            <div className="text-center"><button className="btn btn-primary text-light" disabled={sendButtonLabel !== "Send"} type="submit"><i className="bi bi-envelope-fill pe-2"></i>{sendButtonLabel}</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export { LandingProjectsSection, About4, About6 };