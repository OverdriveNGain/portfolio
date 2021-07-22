import useScript from '../hooks/useScript';

const AboutMe = () => {
    useScript('sketches/sketch.js');
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
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center text-light bg-warning">
                    <div className="display-1">About Me</div>
                    <div className="leading-3">I create mobile apps, websites, web apps, mobile games across virtually any platform. I highly believe that the mastery of a certain framework requires the mastery of all skills relevant to that framework. Thus, I take understanding of a certain project very seriously.</div>
                    <p>In any case, whether it be a website for your aspiring business, or a mobile app that unites your entire customer base,</p>
                    <p>I get the job done, and more.</p>
                </div>
            </div>
            <div id="about3">
                <div className="align-middle container py-3 text-center d-flex flex-column justify-content-center text-light bg-success">
                    <div className="display-1">About Me</div>
                    <div className="leading-3">I create mobile apps, websites, web apps, mobile games across virtually any platform. I highly believe that the mastery of a certain framework requires the mastery of all skills relevant to that framework. Thus, I take understanding of a certain project very seriously.</div>
                    <p>In any case, whether it be a website for your aspiring business, or a mobile app that unites your entire customer base,</p>
                    <p>I get the job done, and more.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;