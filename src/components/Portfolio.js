import { useEffect } from "react";
import Nbsp, { Nbspify } from "../helpers/Nbsp";
import useResize from "../hooks/useResize";

const Portfolio = () => {
    const { dimensions } = useResize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toWorkHeader = (t, location) => {
        if (dimensions.width < 576)
            return (<div className="mt-4">
                <span className="text-secondary h4 mt-3 text-center">{t}</span>
                <span className="mx-2 text-muted opacity-50 h4">{location}</span>
            </div>);
        return (<div className="mt-4">
            <span className="text-secondary h4 mt-3 text-start">{t}</span>
            <span className="mx-2 text-muted opacity-50 h4">{location}</span>
        </div>);
    }

    const toPositionDetails = (position, timespan) => {
        if (dimensions.width < 576)
            return (<div className="mb-2">
                <span className="mt-3 text-center">{position}</span>
                <span className="mx-2 text-muted opacity-50 h4">{timespan}</span>
            </div>);
        return (<div className="mb-2">
            <span className="mt-3 text-start">{position}</span>
            <span className="mx-2 text-muted opacity-50">{timespan}</span>
        </div>);
    }

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
        const dstyle = {
            padding: "10px 0px",
        };
        return (
            <div style={dstyle}>
                <p className="text-muted h5 opacity-50 fw-bold text-center">{t}</p>
            </div>
        );

    }
    const getBadgeStyle = (b) => {
        switch (b) {
            case "Flutter":
                return { backgroundColor: "rgb(0, 180, 232)", color: "rgb(255, 255, 255)" };
            case "Unity 3D":
                return { backgroundColor: "rgb(240, 240, 240)", color: "rgb(30, 30, 30)" };
            case "Firebase":
                return { backgroundColor: "rgb(255, 202, 41)", color: "rgb(90, 90, 90)" };
            case "React JS":
                return { backgroundColor: "rgb(32, 34, 36)", color: "rgb(96, 216, 249)" };
            case "HTML":
                return { backgroundColor: "rgb(228, 77, 38)", color: "white" };
            case "CSS":
                return { backgroundColor: "rgb(55, 154, 214)", color: "white" };
            case "Javascript":
                return { backgroundColor: "rgb(247, 223, 30)", color: "black" };
            case "SASS":
                return { backgroundColor: "rgb(205, 102, 154)", color: "white" };
            case "Bootstrap":
                return { backgroundColor: "rgb(140, 19, 253)", color: "white" };
            case "C#":
                return { backgroundColor: "rgb(104, 33, 122)", color: "white" };
            case "Python":
                return { backgroundColor: "rgb(54, 110, 156)", color: "rgb(255, 226, 130)" };
            case "Adobe Illustrator":
                return { backgroundColor: "rgb(51, 0, 0)", color: "rgb(255, 154, 0)" };
            case "Processing":
                return { backgroundColor: "rgb(1, 37, 66)", color: "white" };
            case "p5.js":
                return { backgroundColor: "rgb(234, 37, 96)", color: "white" };
            case "Adobe Photoshop":
                return { backgroundColor: "rgb(0,30,54)", color: "rgb(49,168,255)" };
            case "Inkscape":
                return { backgroundColor: "rgb(224, 224, 224)", color: "black" };
            case "Webflow":
                return { backgroundColor: "rgb(67, 83, 255)", color: "white" };
            case "Tailwind CSS":
                return { backgroundColor: "rgb(11, 182, 212)", color: "white" };
            case "Docker":
                return { backgroundColor: "rgb(78, 150, 232)", color: "white" };
            case "Node.js":
                return { backgroundColor: "rgb(51, 51, 51)", color: "rgb(149, 201, 66)" };
            case "Figma":
                return { backgroundColor: "rgb(240, 240, 240)", color: "rgb(214, 89, 39)" };
            case "Laravel":
                return { backgroundColor: "rgb(232, 57, 44)", color: "white" };
            case "Nginx":
                return { backgroundColor: "rgb(0, 145, 55)", color: "white" };
            case "VBA":
                return { backgroundColor: "rgb(250, 237, 213)", color: "rgb(63, 80, 151)" };
            case "SQL":
                return { backgroundColor: "rgb(111, 147, 218)", color: "white" };
            case "Java":
                return { backgroundColor: "rgb(190, 73, 45)", color: "white" };
            case "Appian":
                return { backgroundColor: "rgb(33, 32, 232)", color: "white" };
            default:
                return { backgroundColor: "black", color: "white" };
        }
    }
    
    const toSkillBadges = (s) => {
        const skillsArray = s.split(",").map((s) => s.trim());
        const badges = [];
        for (let i = 0; i < skillsArray.length; i++) {
            badges.push(<span key={i} className="badge me-1 mb-1 fw-normal fw-bold" style={getBadgeStyle(skillsArray[i])}>{skillsArray[i]}</span>);
        }
        if (dimensions.width < 576)
            return (
                <div className="mb-3 text-center">
                    {badges}
                </div>
            );
        return (
            <div className="mb-3">
                {badges}
            </div>
        );
    }

    return (
        <div>
            <div className="container" align="center">
                <div className="px-1 px-sm-0">
                    <p className="py-5" />
                    <p className="display-1 font-title text-primary text-center mb-4">CV</p>
                    <p className="my-5">Hello! If you're hiring for your company, feel free to download my resume <a href="https://firebasestorage.googleapis.com/v0/b/online-portfolio-jeremy.appspot.com/o/Jeremy%20Amon%20-%20Resume%208.pdf?alt=media&token=deeba9d5-b9dc-4feb-a74b-2c505a345528">here</a>, which includes a more comprehensive list of languages, frameworks, web services and tools that I am capable of using. </p>
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
                                    <p><a href="mailto:jeremyamon@gmail.com">jeremyamon@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-2 px-md-5">
                            {toHeader("Professional Goals")}
                            <p className="text-center">I am a professional software developer that strives to give companies and businesses the means of digital tools and services for the extra competitive edge within a developing digital climate of ever-increasing complexity.</p>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-2 px-md-5" style={{ textAlign: ((dimensions.width > 576) ? "justify" : "start") }}>
                            {toHeader("Work Experience")}
                            <div className="">
                                {toWorkHeader(Nbspify("Maya Philippines Inc."), "- Mandaluyong")}
                                {toPositionDetails("Software Engineer", "( September 2023 - Present )")}
                                {toSkillBadges("Flutter, Appian, Python, SQL")}
                                {toSkillsBullet("Implemented data validation on a 2.75 billion peso loan channeling deal in cooperation with WeFund.")}
                                {toSkillsBullet("Worked on the user interface for the Landers rewards page of the Maya mobile application, as well as the integration to it's own backend service.")}
                                {toSkillsBullet("Integrated analytics events for application user analysis within the Maya inbox user journey.")}
                                {toSkillsBullet("Executed on a Feature Enrichment Data Science API, which aims to aid in the internal execution of a merchant segmentation data analysis project within Maya Philippines.")}

                                {toWorkHeader(Nbspify("Technomancer"), "- Quezon City")}
                                {toPositionDetails("Part Time Web Developer", "( March 2022 - October 2022 )")}
                                {toSkillBadges("React JS, VBA, SQL, Laravel")}
                                {toSkillsBullet("Managed an SQL Server Database for Kimbel International, delivering continuous updates to company accountancy forms through Microsoft Access using VBA.")}
                                {toSkillsBullet("Developed web applications for international clients with multi-language support and responsive design.")}
                                {toSkillsBullet("Worked on internal website servers that delivers client website content.")}

                                {toWorkHeader(Nbspify("Azeus Systems Limited"), "- Pasig")}
                                {toPositionDetails("Backend Developer Intern", "( July 2022 - August 2022 )")}
                                {toSkillBadges("Docker, Nginx, Python")}
                                {toSkillsBullet("Served as the team leader for an examination module development team who worked on the backend of a recruitment process server, hosted on a company Linux server.")}
                                {toSkillsBullet("Collaborated with other teams to synchronize weekly development tasks and application updates.")}

                                {toWorkHeader(Nbspify("Colegio de Santo Cristo de Burgos"), "- Sariaya (Remote)")}
                                {toPositionDetails("Freelance Database Administrator & Developer", "( July 2021 - Present )")}
                                {toSkillBadges("React JS, Flutter, Firebase, Tailwind CSS")}
                                {toSkillsBullet("Built a student management database that manages student information, documents, and enrollment data of more than 2500 students.")}
                                {toSkillsBullet("Developed an online enrollment system that sends form information to the integrated student database.")}
                                {toSkillsBullet("Continued to deliver updates to the database system such as audit logs on all accounting and enrollment data, database integrity reports, built-in account management, accounting functions and summarization of payments.")}

                                {/* {toWorkHeader(Nbspify("Educator & Education Content Creator"))} */}
                                {toWorkHeader(Nbspify("The Coding School"), "- San Juan (Remote)")}
                                {toPositionDetails("Part Time Teaching Coach", "( July 2020 - June 2021 )")}
                                {toSkillBadges("Unity 3D, C#, Python, Java")}
                                {toSkillsBullet("Worked part time at the Coding School Philippines, while educating children and teens on the following courses:")}
                                {toSkillsBullet("Make Your Own Game with Unity 1 & 2", 1)}
                                {toSkillsBullet("Python For Kids 1 & 2", 1)}
                                {toSkillsBullet("Python For Teens 1 & 2", 1)}
                                {toSkillsBullet("Intro to C# Programming", 1)}
                                {toSkillsBullet("Intro to Google Apps", 1)}
                                {toSkillsBullet("Revamped and restructured the 'Intro to C# Programming' 10-hour programming course for children and teenagers.")}
                                {toSkillsBullet("Comanaged the 2021 TCS Coding Masters Coding Competition")}
                                {/* {toSkillsBullet("Teached part time in Colegio de Santo Cristo de Burgos, teaching and creating course material for different Information Technology and Computer Science courses, including the following:")}
                                {toSkillsBullet("Computer Programming 1", 1)}
                                {toSkillsBullet("Object-Oriented Programming", 1)}
                                {toSkillsBullet("Data Structures and Algorithms", 1)} */}

                                {/* {toWorkHeader("Game Developer")}
                                {toSkillBadges("Unity 3D, C#")}
                                {toSkillsBullet("Creates 2D as well as 3D android games using Unity Game Engine, uploads to the Google Play store under the developer name Jeremy Develops, with self produced assets and resources")}

                                {toWorkHeader("General Programmer")}
                                {toSkillBadges("Python, C#, Git + Github")}
                                {toSkillsBullet("Writes specific software that can help in a multitude of bulk operations including (but not limited) to the manufacturing of sticker graphics, bulk data manipulation, online website data scraping, etc.")} */}
                            </div>
                        </div>
                        <hr className="mb-0 mt-4" /><div className={"content pb-3 pt-2 px-2 px-md-5" + (dimensions.width <= 576 ? "" : " text-start")}>
                            {toHeader("Academic History")}
                            {/* {toSkillsHeader("University of the Philippines Diliman")} */}
                            <h6 className="h4 text-secondary mb-2 mt-4">University of the Philippines Diliman</h6>
                            <p className="ms-4 mb-1">• BS Computer Science | 2018-2024</p>
                            <p className="ms-4">• Magna Cum Laude</p>
                            {/* {toSkillsHeader("Trinity University of Asia")} */}
                            <h6 className="h4 text-secondary mb-2 mt-4">Trinity University of Asia</h6>
                            <p className="ms-4 ">• Junior High School and Senior High School STEM Track | 2012-2018</p>
                            {/* {toSkillsHeader("Asian College of Technology")} */}
                            <h6 className="h4 text-secondary mb-2 mt-4">Asian College of Technology</h6>
                            <p className="ms-4 ">• Elementary Education | 2004-2012</p>
                        </div>
                        <hr className="mb-0 mt-4" />
                        <div className={"content pt-2 px-2 px-md-5" + (dimensions.width <= 576 ? "" : " text-start")}>
                            {toHeader("University Affiliations")}
                            {/* {toSkillsHeader("UP CREST")} */}
                            <h6 className="h4 text-secondary mb-1">UP CREST</h6>
                            <p className="ms-4 mb-0">• <span className="">President</span> <i className="opacity-50">(2022 - 2023)</i></p>
                            <p className="ms-4 mb-0">• <span className="">Publicity</span> Committee Director <i className="opacity-50">(February 2022 to May 2022)</i></p>
                            <p className="ms-4 mb-0">• <span className="">Publicity Committee Associate</span> <i className="opacity-50">(November 2021 to January 2022)</i></p>
                            {/* {toSkillsHeader("UP CURSOR")} */}
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