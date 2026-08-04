import { useEffect } from "react";
import { Nbspify } from "../helpers/Nbsp";
import useResize from "../hooks/useResize";
import SkillBadgesRow from "./SkillBadgesRow";

const Portfolio = () => {
    const { dimensions } = useResize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toWorkHeader = (t, location) => {
        if (dimensions.width < 576)
            return (<div className="mt-4">
                <div className="text-secondary mt-3 h4">{t}</div>
            </div>);
        return (<div className="mt-4">
            <span className="text-secondary h4 mt-3 text-start">{t}</span>
            <span className="mx-2 text-muted opacity-50 h4">- {location}</span>
        </div>);
    }

    const toPositionDetails = (position, timeSpan) => {
        if (dimensions.width < 576)
            return (<div className="mb-2">
                <span className="mt-3 text-center">{position}</span>
            </div>);
        return (<div className="mb-2">
            <span className="mt-3 text-start">{position}</span>
            <span className="mx-2 text-muted opacity-50">{timeSpan}</span>
        </div>);
    }

    const toOtherDetailsOnMobile = (text) => (dimensions.width < 576)
        ? (<p className="small text-muted">{text}</p>)
        : (<div />);

    const toSkillsBullet = (p, level) => {
        if (level == null)
            level = 0;
        const leftIndent = [];
        for (let i = 0; i < level; i++) {
            leftIndent.push(<p key={i} className="ms-3 ms-md-5 me-2"></p>);
        }
        return (<div className="d-flex flex-row align-items-start">
            {
                leftIndent
            }
            <p className="ms-1 ms-sm-3 ms-md-5 me-2">•</p>
            <div className="flex-fill">
                <p className="d-inline-block"> {p}</p>
            </div>
        </div>);
    }
    const toHeader = (t) => {
        const dStyle = {
            padding: "10px 0px",
        };
        return (
            <div style={dStyle}>
                <p className="text-muted h5 opacity-50 fw-bold text-center">{t}</p>
            </div>
        );

    }

    return (
        <div className="portfolio">
            <div className="container" align="center">
                <div className="px-1 px-sm-0">
                    <p className="py-5" />
                    <p className="display-1 font-title text-primary text-center mb-4">CV</p>
                    <p className="my-5">Hello! If you're hiring for your company, feel free to download a copy <a href="https://firebasestorage.googleapis.com/v0/b/online-portfolio-jeremy.appspot.com/o/Jeremy%20Amon%20-%20Resume%2012.pdf?alt=media&token=9699ef16-59da-4ff7-84c4-1f605bcf4c9d">here</a>, which includes a more comprehensive list of languages, frameworks, web services and tools that I am capable of using. </p>
                    <div className="bg-white rounded-3 shadow-lg p-2 p-sm-4 mb-5">
                        <div className="d-flex flex-column flex-md-row justify-content-center ">
                            <div className="text-center">
                                <img src="https://lh3.googleusercontent.com/d/1loAxdY7O_G8VAt7qxsRlIqoggvXEbIU6" className="rounded-circle portfolio-pic m-3" alt="Jeremy" />
                            </div>
                            <div className="flex-fill mx-3 my-0 my-sm-3 px-0">
                                <div className="flex-fill text-center text-md-start">
                                    <label className="text-secondary h6 mb-0">Name</label>
                                    <p>Jeremy Mattheu D. Amon</p>
                                    <label className="text-secondary h6 mb-0">Mobile</label>
                                    <p>+63 995 963 2500</p>
                                    <label className="text-secondary h6 mb-0">Email</label>
                                    <p><a href="mailto:dev@jeremyamon.com">dev@jeremyamon.com</a></p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-2 px-md-5">
                            {toHeader("Professional Goals")}
                            <p className="text-center">Software Engineer & Flutter Expert specializing in fintech. I architect robust, data-driven systems that provide companies with the digital means to connect with their customers through high-impact mobile experiences.</p>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-2 px-md-5" style={{ textAlign: ((dimensions.width > 576) ? "justify" : "start") }}>
                            {toHeader("Work Experience")}
                            <div className="">
                                {toWorkHeader(Nbspify("Maya Philippines Inc."), "Mandaluyong")}
                                {toPositionDetails("Software Engineer", "( September 2023 - Present )")}
                                {toOtherDetailsOnMobile("Mandaluyong (Sept. 2022 - Present)")}
                                <SkillBadgesRow skills="Flutter, Swift, Appian, Python, SQL"/>
                                {toSkillsBullet("Engineered the front-end validation logic for a ₱2.75 billion loan channeling partnership with WeFund and Tala, ensuring data integrity and regulatory compliance for high-volume financial transactions.")}
                                {toSkillsBullet("Integrated the Google Mobile Ads SDK using Swift and developed reusable components for cross-team integration, enabling programmatic revenue expansion across native and Flutter screens.")}
                                {toSkillsBullet("Developed front-end modules for the Landers and Maya Black Credit Card reward programs, translating backend API specifications into responsive, high-performance Flutter screens.")}
                                {toSkillsBullet("Implemented event tracking on Flutter credit and reward screens to enable funnel and user behavior analysis.")}
                                {toSkillsBullet("Built a Python pipeline to aggregate regional socio-economic data for internal merchant segmentation projects.")}

                                {toWorkHeader(Nbspify("Technomancer"), "Quezon City")}
                                {toPositionDetails("Part Time Web Developer", "( March 2022 - October 2022 )")}
                                {toOtherDetailsOnMobile("Quezon City (Mar. 2022 - Oct. 2022)")}
                                <SkillBadgesRow skills="React JS, VBA, SQL, Laravel"/>
                                {toSkillsBullet("Managed an SQL Server Database for Kimbel International, delivering continuous updates to company accountancy forms through Microsoft Access using VBA.")}
                                {toSkillsBullet("Developed web applications for international clients with multi-language support and responsive design.")}
                                {toSkillsBullet("Worked on internal website servers that delivers client website content.")}

                                {toWorkHeader(Nbspify("Azeus Systems Limited"), "Pasig")}
                                {toPositionDetails("Backend Developer Intern", "( July 2022 - August 2022 )")}
                                {toOtherDetailsOnMobile("Pasig (July 2022 - Aug. 2022)")}
                                <SkillBadgesRow skills="Docker, Nginx, Python"/>
                                {toSkillsBullet("Served as the team leader for an examination module development team who worked on the backend of a recruitment process server, hosted on a company Linux server.")}
                                {toSkillsBullet("Collaborated with other teams to synchronize weekly development tasks and application updates.")}

                                {toWorkHeader(Nbspify("Colegio de Santo Cristo de Burgos"), "Sariaya (Remote)")}
                                {toPositionDetails("Freelance Database Administrator & Developer", "( July 2021 - Present )")}
                                {toOtherDetailsOnMobile("Sariaya - Remote (July 2021 - Present)")}
                                <SkillBadgesRow skills="React JS, Flutter, Firebase, Tailwind CSS"/>
                                {toSkillsBullet("Built a student management database that manages student information, documents, and enrollment data of more than 2500 students.")}
                                {toSkillsBullet("Developed an online enrollment system that sends form information to the integrated student database.")}
                                {toSkillsBullet("Continued to deliver updates to the database system such as audit logs on all accounting and enrollment data, database integrity reports, built-in account management, accounting functions and summarization of payments.")}

                                {toWorkHeader(Nbspify("The Coding School"), "San Juan (Remote)")}
                                {toPositionDetails("Part Time Teaching Coach", "( July 2020 - June 2021 )")}
                                {toOtherDetailsOnMobile("San Juan - Remote (July 2020 - June 2021)")}
                                <SkillBadgesRow skills="Unity 3D, C#, Python, Java"/>
                                {toSkillsBullet("Worked part time at the Coding School Philippines, while educating children and teens on the following courses:")}
                                {toSkillsBullet("Make Your Own Game with Unity 1 & 2", 1)}
                                {toSkillsBullet("Python For Kids 1 & 2", 1)}
                                {toSkillsBullet("Python For Teens 1 & 2", 1)}
                                {toSkillsBullet("Intro to C# Programming", 1)}
                                {toSkillsBullet("Intro to Google Apps", 1)}
                                {toSkillsBullet("Revamped and restructured the 'Intro to C# Programming' 10-hour programming course for children and teenagers.")}
                                {toSkillsBullet("Co-managed the 2021 TCS Coding Masters Coding Competition")}
                            </div>
                        </div>
                        <hr className="mb-0 mt-4" /><div className="content pb-3 pt-2 px-2 px-md-5 text-start">
                            {toHeader("Academic History")}
                            <h6 className="h4 text-secondary mb-0 mt-4">University of the Philippines Diliman</h6>
                            <p className="text-muted mb-1">2018-2024</p>
                            <p className="ms-4 mb-1">• BS Computer Science</p>
                            <p className="ms-4 magna_cum_laude">• Magna Cum Laude</p>
                            <h6 className="h4 text-secondary mb-0 mt-4">Trinity University of Asia</h6>
                            <p className="text-muted mb-1">2012-2018</p>
                            <p className="ms-4 ">• Junior High School and Senior High School STEM Track</p>
                            <h6 className="h4 text-secondary mb-0 mt-4">Asian College of Technology</h6>
                            <p className="text-muted mb-1">2004-2012</p>
                            <p className="ms-4 ">• Elementary Education</p>
                        </div>
                        <hr className="mb-0 mt-4" />
                        <div className="content pt-2 px-2 px-md-5 text-start">
                            {toHeader("University Affiliations")}
                            <h6 className="h4 text-secondary mb-1">UP CREST</h6>
                            <p className="ms-4 mb-0">• <span className="">President</span> <i className="opacity-50">(2022 - 2023)</i></p>
                            <p className="ms-4 mb-0">• <span className="">Publicity</span> Committee Director <i className="opacity-50">(February 2022 to May 2022)</i></p>
                            <p className="ms-4 mb-0">• <span className="">Publicity Committee Associate</span> <i className="opacity-50">(November 2021 to January 2022)</i></p>
                            <h6 className="h4 text-secondary mb-1 mt-4">UP CURSOR</h6>
                            <p className="ms-4 mb-0">• <span className="">Member</span> <i className="opacity-50">(2019-2023)</i></p>
                        </div>
                        <hr className="mb-0 mt-4" />
                        <div className={"content pt-2 px-2 px-md-5" + (dimensions.width <= 576 ? "" : " text-start")}>
                            {toHeader("Professional References")}
                            <p className="text-center"><i>Professional references available upon request.</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;