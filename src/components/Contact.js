import { useEffect, useState } from "react";
import useResize from '../hooks/useResize';
import axios from 'axios';
import 'dotenv/config';

const Contact = () => {
    const [formEmail, setFormEmail] = useState('');
    const [formName, setFormName] = useState('');
    const [formBody, setFormBody] = useState('');

    const [modalMessage, setModalMessage] = useState(null);
    const [sendButtonLabel, setSendButtonLabel] = useState("Send");

    const { breakpointSelector } = useResize();

    const onNameChange = (e) => {
        setFormName(e.target.value);
    }
    const onEmailChange = (e) => {
        setFormEmail(e.target.value);
    }
    const onBodyChange = (e) => {
        setFormBody(e.target.value);
    }

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

            // TODO: test if still working
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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const getOtherInfoPanel = (part) => {
        if (part === "right") {
            return breakpointSelector(null, null, null, null,
                (
                    <div className="col-xl-5 col-xxl-4 bg-light p-5" >
                        <p className="d-xl-block p-5" />
                        <div className="pb-4">
                            <i className="bi bi-envelope-fill pe-3"></i>
                            <span className="">jeremyamon@gmail.com</span>
                        </div>
                        <div className="pb-4">
                            <i className="bi bi-linkedin pe-3"></i>
                            <span className=""><a href="https://www.linkedin.com/in/jeremy-amon-b0548a124/">Jeremy Amon on LinkedIn</a></span>
                        </div>
                        <div className="pb-4">
                            <i className="bi bi-github pe-3"></i>
                            <span className=""><a href="https://github.com/OverdriveNGain">Jeremy Amon on Github</a></span>
                        </div>
                        <div className="pb-4">
                            <i className="bi bi-phone-fill pe-3"></i>
                            <span className="">+63 995 963 2500</span>
                        </div>
                    </div>));
        }
        if (part === "bot")
            return breakpointSelector(
                (
                    <div className="bg-light">
                        <div className="container p-4 text-center">
                            <div className="row px-3 ps-sm-0 justify-content-center">
                                <div className="pb-4 col-12 col-md-6">
                                    <i className="bi bi-envelope-fill pe-3"></i>
                                    <span className="">jeremyamon@gmail.com</span>
                                </div>
                                <div className="pb-4 col-12 col-md-6">
                                    <i className="bi bi-phone-fill pe-3"></i>
                                    <span className="">+63 995 963 2500</span>
                                </div>
                                <div className="pb-4 col-12 col-md-6">
                                    <i className="bi bi-linkedin pe-3"></i>
                                    <span className=""><a href="https://www.linkedin.com/in/jeremy-amon-b0548a124/">Jeremy Amon on LinkedIn</a></span>
                                </div>
                                <div className="col-12 col-md-6">
                                    <i className="bi bi-github pe-3"></i>
                                    <span className=""><a href="https://github.com/OverdriveNGain">Jeremy Amon on Github</a></span>
                                </div>
                            </div>
                        </div>
                    </div>), null, null, null, <div></div>);
    }
    return (
        <div>
            {getModal()}
            <div className="container">
                <div className="px-xl-5">
                    <div className="row" style={{minHeight:"85vh"}}>
                        <div className="col-12 col-xl-7 col-xxl-8 px-4">
                            <p className="py-5" />
                            <p className="display-1 font-title text-primary">Contact Me</p>
                            <div className="lead text-primary pb-4">I would love to hear from you!</div>
                            <div className="align-middle text-center d-flex flex-column justify-content-center align-items-stretch pb-5">
                                <div className="">
                                    <form onSubmit={(e) => { submitCallback(e) }}>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="contactEmail" placeholder="Your Email" name="email" value={formEmail} onChange={onEmailChange} />
                                        </div>
                                        <div className="mb-3">
                                            <input type="name" className="form-control" id="contactName" placeholder="Your Name" name="fname" value={formName} onChange={onNameChange} />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" id="contactMessage" placeholder="Type your message here..." rows="15" name="message" value={formBody} onChange={onBodyChange} ></textarea>
                                        </div>
                                        <div className="text-center"><button className="btn btn-primary text-light" disabled={sendButtonLabel !== "Send"} type="submit"><i className="bi bi-envelope-fill pe-2"></i>{sendButtonLabel}</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {getOtherInfoPanel("right")}
                    </div>
                </div>
            </div>
            {getOtherInfoPanel("bot")}
        </div>
    );
}

export default Contact;