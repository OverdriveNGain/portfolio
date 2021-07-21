import useScript from '../hooks/useScript';

const AboutMe = () => {
    useScript('sketches/sketch.js');
    return (
        <div id="about-me">
            <div id="sketch-floating-nodes">

            </div>
            <div id="about1">
                <div className="">
                    <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center align-items-md-start">
                        <div className="display-6 pt-5 pb-2 d-inline-block">So let me introduce myself...</div>
                        <div className="display-2 pb-3 d-inline-block ps-md-2">My name is Jeremy,</div>
                        <div className="display-6 pb-2 d-inline-block ps-md-5">and I am a full-stack software engineer.</div>
                    </div>
                </div>
            </div>
            <div id="about2">
                <div className="bg-light">
                    <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center">
                        <div className="lead d-inline-block px-5">I have a diverse set of skills that include mobile app and web app development, full-stack web development, and UI/UX design.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;