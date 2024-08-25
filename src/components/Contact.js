import { useEffect, useState } from "react";
import useResize from '../hooks/useResize';
import axios from 'axios';
import 'dotenv/config';
import Dialog from './Dialog.js'

const Contact = () => {
    const [formEmail, setFormEmail] = useState('');
    const [formName, setFormName] = useState('');
    const [formBody, setFormBody] = useState('');

    const [dialogData, setDialogData] = useState(null);
    // Can be null
    // {title: string, message: string}

    const [sendButtonLoading, setSendButtonLoading] = useState(false);

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
        e.preventDefault();
        setSendButtonLoading(true);
        axios.post(`${process.env.REACT_APP_API_ENDPOINT}sendmail`, null, {
            params: {
                email: formEmail,
                name: formName,
                body: formBody
            }
        }).then((response) => {
            setDialogData({ message: "Message successfully sent!", title: "Success" });;
            setSendButtonLoading(false);
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sendButtonEnabled = formEmail.trim().length > 0 && formName.trim().length > 0 && formBody.trim().length > 0 && !sendButtonLoading;

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
            {dialogData && <Dialog
                title={dialogData.title}
                description={dialogData.message}
                onClose={() => { setDialogData(null) }}
                buttonData={[{ label: "Close", callback: () => { setDialogData(null) } }]} />}
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
                                            <textarea className="form-control" id="contactMessage" placeholder="Type your message here..." rows="15" name="message" value={formBody} onChange={onBodyChange} />
                                        </div>
                                        <div className="text-center"><button className="btn btn-primary text-light" disabled={!sendButtonEnabled} type="submit"><i className="bi bi-envelope-fill pe-2"></i>{sendButtonLoading ? "Loading..." : "Send"}</button></div>
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