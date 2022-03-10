import { useEffect } from "react";
import Nbsp, { Nbspify } from "../helpers/Nbsp";
import useResize from "../hooks/useResize";

const Portfolio = () => {
    const { dimensions } = useResize();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toSkillsHeader = (t) => {
        if (dimensions.width < 576)
            return <div className="text-secondary h4 mt-3 text-center">{t}</div>;
        return <div className="text-secondary h4 mt-3 text-start">{t}</div>;
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
            case "tailwindcss":
                return { backgroundColor: "rgb(11, 182, 212)", color: "white" };
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
                <div className="px-1 px-sm-5">
                    <p className="py-5" />
                    <p className="display-1 font-title text-primary text-center mb-4">CV</p>
                    <div className="bg-white rounded-3 shadow-lg p-2 p-sm-4 mb-5">
                        <div className="d-flex flex-column flex-md-row justify-content-center ">
                            <div className="text-center">
                                <img src="https://drive.google.com/uc?id=1-JhEApFN6ssYHG04MLXmYd1wWhEx7UiR" className="rounded-circle portfolio-pic m-3" alt="Jeremy" />
                            </div>
                            <div className="flex-fill mx-3 my-0 my-sm-3 px-0">
                                <div className="flex-fill text-center text-md-start">
                                    <label className="text-secondary h6 mb-0">Name</label>
                                    <p>Jeremy Mattheu D. Amon</p>
                                    <label className="text-secondary h6 mb-0">Mobile</label>
                                    <p>+63 995 963 2500</p>
                                    <label className="text-secondary h6 mb-0">Email</label>
                                    <p>jeremyamon@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-2 px-md-5">
                            {toHeader("Professional Goals")}
                            <p className="text-center">I am aiming to be a professional software engineer, to allow for more innovative solutions and new technological advances in the future of different businesses in our country, today.</p>
                        </div>
                        <hr className="my-0" />
                        <div className={"content pb-3 pt-2 px-2 px-md-5" + (dimensions.width <= 576 ? "" : " text-start")}>
                            {toHeader("Educational History")}
                            {/* {toSkillsHeader("University of the Philippines Diliman")} */}
                            <h6 className="text-secondary mb-0">University of the Philippines Diliman</h6>
                            <p>BS Computer Science | 2023 (Expected Graduation Date)</p>
                            {/* {toSkillsHeader("Trinity University of Asia")} */}
                            <h6 className="text-secondary mb-0">Trinity University of Asia</h6>
                            <p>Junior High School and Senior High School STEM Track | 2012-2018</p>
                            {/* {toSkillsHeader("Asian College of Technology")} */}
                            <h6 className="text-secondary mb-0">Asian College of Technology</h6>
                            <p>Elementary Education | 2004-2012</p>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-2 px-md-5" style={{ textAlign: ((dimensions.width > 576) ? "justify" : "start") }}>
                            {toHeader("Skills & Experience")}
                            <div className="">
                                {toSkillsHeader(Nbspify("Mobile and Web App Developer"))}
                                {toSkillBadges("React JS, Flutter, Unity 3D, Firebase, Git + Github, HTML, CSS, Javascript, SASS, Bootstrap, Webflow, tailwindcss")}
                                {toSkillsBullet("Uses Flutter for Android, IOs app development, as well as web applications.")}
                                {toSkillsBullet("Created a student management database for the Colegio de Santo Cristo de Burgos school within the Flutter framework with a Firebase backend.")}
                                {toSkillsBullet("Managed in updating the Kairos Core NFT Minting Launch frontend layout for better responsive design, better element interactivity, and dynamic JavaScript countdown timer")}
                                {toSkillsBullet("Experienced with Mobile App/Web App development including optional Firebase integration, including website hosting and Google cloud functions. ")}
                                {toSkillsBullet("Developed an online portfolio from scratch using a react framework together with a Bootstrap + SASS format structure")}
                                {toSkillsBullet("Experienced uploading to the Google Play Store with a Google Play developer account, while having uploaded multiple Unity 3D games")}

                                {toSkillsHeader(Nbspify("Digital Artist and Illustrator"))}
                                {toSkillBadges("Adobe Illustrator, Adobe Photoshop, Processing, p5.js, Inkscape")}
                                {toSkillsBullet("Creates digital designs to be made into products such as stickers, magnets, and vector art for Just Crafts PH, an online sticker shop, where 90% of all social media pubs, and 100% of all sticker designs are developed by him using Adobe Illustrator")}
                                {toSkillsBullet("Sketches and constructs digital shirt designs and ID lace designs for Trinity University of Asia")}
                                {toSkillsBullet("Created billboards and publications for the Colegio de Santo Cristo de Burgos school, as well as designed the school's yearbooks from 2014 to 2020")}
                                {toSkillsBullet("Creates computerized digital media using Processing, an open-source graphical library that enables programmers to produce computer-driven digital arts and simulations")}

                                {toSkillsHeader(Nbspify("Educator and Education Content Creator"))}
                                {toSkillBadges("Unity 3D, C#, Python, Java")}
                                {toSkillsBullet("Worked part time at the Coding School Philippines, while educating children and teens on the following courses:")}
                                {toSkillsBullet("Make Your Own Game with Unity 1 & 2", 1)}
                                {toSkillsBullet("Python For Kids 1 & 2", 1)}
                                {toSkillsBullet("Python For Teens 1 & 2", 1)}
                                {toSkillsBullet("Intro to C# Programming", 1)}
                                {toSkillsBullet("Intro to Google Apps", 1)}
                                {toSkillsBullet("Revamped and structured the 'Intro to C# Programming' 10-hour programming course")}
                                {toSkillsBullet("Comanaged the 2021 TCS Coding Masters Coding Competition")}
                                {toSkillsBullet("Teached part time in Colegio de Santo Cristo de Burgos, teaching and creating course material for different Information Technology and Computer Science subjects, including the following:")}
                                {toSkillsBullet("Computer Programming 1", 1)}
                                {toSkillsBullet("Object-Oriented Programming", 1)}
                                {toSkillsBullet("Data Structures and Algorithms", 1)}

                                {toSkillsHeader("Game Developer")}
                                {toSkillBadges("Unity 3D, C#")}
                                {toSkillsBullet("Creates 2D as well as 3D android games using Unity Game Engine, uploads to the Google Play store under the developer name Jeremy Develops")}
                                {toSkillsBullet("Self produces all assets used for all games made including sprites and sound files")}
                                {toSkillsBullet("Utilizes C# in writing video game scripts and behaviors")}

                                {toSkillsHeader("General Programmer")}
                                {toSkillBadges("Python, C#, Git + Github")}
                                {toSkillsBullet("Writes specific software that can help in a multitude of bulk operations including (but not limited) to the manufacturing of sticker graphics, bulk data manipulation, online website data scraping, etc.")}
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className={"content pt-2 px-2 px-md-5" + (dimensions.width <= 576 ? "" : " text-start")}>
                            {toHeader("University Affiliations")}
                            {/* {toSkillsHeader("UP CURSOR")} */}
                            <h6 className="text-secondary mb-0">UP CURSOR</h6>
                            <p>Member since December 2019</p>
                            {/* {toSkillsHeader("UP CREST")} */}
                            <h6 className="text-secondary mb-0">UP CREST</h6>
                            <p>Member since November 2021</p>
                        </div>
                    </div>
                    <p className="my-5 pt-sm-5"> Alternatively, you can download a pdf<Nbsp />version<Nbsp /><a href="https://firebasestorage.googleapis.com/v0/b/online-portfolio-jeremy.appspot.com/o/Jeremy%20Amon%20-%20Resume%203.pdf?alt=media&token=2da4bc86-b2fb-49a8-a5a9-b32d0f3aeb97">here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;