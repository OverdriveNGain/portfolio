import { useEffect } from "react";

const Contact = () => {
    const submitCallback = (e) => {

    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-md-10 px-4">
                    <p className="py-5" />
                    <p className="display-1 font-title text-primary text-center">Contact Me</p>
                    <div className="my-5">
                        <div className="lead text-center">I would love to hear from you!</div>
                        <div className="row text-center bg-light p-4 m-4">
                            <div className="col mb-3">
                                <div className="text-secondary fw-bold">Email</div>
                                <div className="display-6">jeremyamon@gmail.com</div>
                            </div>
                            <div className="col mb-3">
                                <div className="text-secondary fw-bold">LinkedIn</div>
                                <div className="display-6"><a href="">Jeremy Amon</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="lead text-center">You can also reach me directly through this form:</div>
                    <div className="align-middle container px-0 py-3 text-center d-flex flex-column 
                justify-content-center align-items-stretch px-4 pt-4 pb-5">
                        <div className="row justify-content-center">
                            <div className="col col-7 text-start">
                                <div className="p-5 shadow rounded-3 bg-light">
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
                                            <textarea className="form-control" id="contactMessage" rows="10" name="message"></textarea>
                                        </div>
                                        <div className="text-center"><button className="btn btn-primary text-light" type="submit"><i className="bi bi-envelope-fill pe-2"></i>Send</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;