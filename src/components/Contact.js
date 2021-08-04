import { useEffect } from "react";
import useResize from '../hooks/useResize';

const Contact = () => {
    const { breakpointSelector } = useResize();
    const submitCallback = (e) => {

    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const getOtherInfoPanel = (part) => {
        if (part === "right") {
            return breakpointSelector(null, null, null,
                (
                    <div className="col-lg-4 bg-light p-5">
                        <p className="d-lg-block p-5" />
                        <div class="pb-4">
                            <i class="bi bi-envelope-fill pe-3"></i>
                            <span className="">jeremyamon@gmail.com</span>
                        </div>
                        <div class="pb-4">
                            <i class="bi bi-linkedin pe-3"></i>
                            <span className=""><a href="https://www.linkedin.com/in/jeremy-amon-b0548a124/">Jeremy Amon on LinkedIn</a></span>
                        </div>
                        <div class="pb-4">
                            <i class="bi bi-github pe-3"></i>
                            <span className=""><a href="https://github.com/OverdriveNGain">Jeremy Amon on Github</a></span>
                        </div>
                        <div class="pb-4">
                            <i class="bi bi-phone-fill pe-3"></i>
                            <span className="">+63 995 963 2500</span>
                        </div>
                    </div>));
        }
        if (part === "bot")
            return breakpointSelector(
                (
                    <div className="bg-light">
                        <div className="container p-4 text-center">
                            <div className="row ps-4 ps-sm-0 justify-content-center">
                                <div class="pb-4 col-12 col-sm-6">
                                    <i class="bi bi-envelope-fill pe-3"></i>
                                    <span className="">jeremyamon@gmail.com</span>
                                </div>
                                <div class="pb-4 col-12 col-sm-6">
                                    <i class="bi bi-phone-fill pe-3"></i>
                                    <span className="">+63 995 963 2500</span>
                                </div>
                                <div class="pb-4 col-12 col-sm-6">
                                    <i class="bi bi-linkedin pe-3"></i>
                                    <span className=""><a href="https://www.linkedin.com/in/jeremy-amon-b0548a124/">Jeremy Amon on LinkedIn</a></span>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <i class="bi bi-github pe-3"></i>
                                    <span className=""><a href="https://github.com/OverdriveNGain">Jeremy Amon on Github</a></span>
                                </div>
                            </div>
                        </div>
                    </div>), null, null, <div></div>);
    }
    return (
        <div>
            <div className="container">
                <div className="px-lg-5">
                    <div className="row">
                        <div className="col-12 col-lg-8 px-4">
                            <p className="py-5" />
                            <p className="display-1 font-title text-primary">Contact Me</p>
                            <div className="lead text-primary pb-4">I would love to hear from you!</div>
                            <div className="align-middle text-center d-flex flex-column justify-content-center align-items-stretch pb-5">
                                <div className="">
                                    <form onSubmit={(e) => { submitCallback(e) }}>
                                        <div className="mb-3">
                                            <input type="name" className="form-control" id="contactName" placeholder="Your Name" name="fname" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="contactEmail" placeholder="Your Email" name="email" />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" id="contactMessage" placeholder="Type your message here..." rows="10" name="message"></textarea>
                                        </div>
                                        <div className="text-center"><button className="btn btn-primary text-light" type="submit"><i className="bi bi-envelope-fill pe-2"></i>Send</button></div>
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