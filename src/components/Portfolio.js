import { useEffect } from "react";

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toSkillsHeader = (t) => {
        return <div className="text-secondary h4 mt-3">{t}</div>;
    }
    const toSkillsBullet = (p, level) => {
        level = level ?? 0;
        const leftIndent = [];
        for (let i = 0; i < level; i++) {
            leftIndent.push(<p key={i} className="ms-5 me-2"></p>);
        }
        return (<div className="d-flex flex-row align-items-start">
            {
                leftIndent
            }
            <p className="ms-5 me-2">•</p>
            <div className="flex-fill">
                <p className="d-inline-block"> {p}</p>
            </div>
        </div>);
    }
    const toHeader = (t) => {
        const dstyle = {
            top: "55px",
            padding: "10px 0px",
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(3px)"
        };
        return (
            <div style={dstyle} className="sticky-top">
                <p className="text-muted h1  opacity-50 fw-bold text-center">{t}</p>
            </div>
        );
    }
    const toSkillBadges = (s) => {
        const skillsArray = s.split(",").map((s) => s.trim());
        const badges = [];
        for (let i = 0; i < skillsArray.length; i++) {
            badges.push(<span key={i} className="badge bg-muted me-1 mb-1 fw-normal">{skillsArray[i]}</span>);
        }
        return (
            <div className="mb-3">
                {badges}
            </div>
        );
    }

    return (
        <div className="container bg-light">
            <div className="row justify-content-center">
                <div className="col col-md-10 px-4">
                    <p className="py-5" />
                    <p className="display-1 font-title text-primary text-center mb-5">Portfolio</p>
                    <div className="bg-white rounded-3 shadow-lg m-5 py-5 px-4">
                        <p className="h2 text-primary mb-5 text-center">Jeremy Mattheu D. Amon</p>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-5">
                            {toHeader("Professional Goals")}
                            <p className="text-center lead">I am aiming to be a professional software engineer, to allow for more innovative solutions and new technological advances in the future of different businesses in our country, today.</p>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-5">
                            {toHeader("Skills & Experience")}
                            <div className="">
                                {toSkillsHeader("Mobile and Web App Engineer")}
                                {toSkillBadges("Flutter, Unity 3D, Firebase, React JS, Git + Github, HTML, CSS, Javascript, SASS, Bootstrap")}
                                {toSkillsBullet("Uses Flutter for Android, IOs app development, as well as web applications.")}
                                {toSkillsBullet("Created a student management database for the Colegio de Santo Cristo de Burgos school within the Flutter framework with a Firebase backend.")}
                                {toSkillsBullet("Experienced with Mobile App/Web App development including optional Firebase integration, including website hosting and Google cloud functions. ")}
                                {toSkillsBullet("Capable of working SASS, which compiles to manageable and maintainable CSS")}
                                {toSkillsBullet("Developed an online portfolio from scratch using a react framework together with a Bootstrap + SASS format structure")}
                                {toSkillsBullet("Experienced uploading to the Google Play Store with a Google Play developer account, while having uploaded multiple Unity 3D games")}

                                {toSkillsHeader("Digital Artist and Illustrator")}
                                {toSkillBadges("Adobe Illustrator, Processing, Adobe Photoshop")}
                                {toSkillsBullet("Creates digital designs to be made into products such as stickers, magnets, and vector art for Just Crafts PH, an online sticker shop, where 90% of all social media pubs, and 100% of all sticker designs are developed by him using Adobe Illustrator")}
                                {toSkillsBullet("Sketches and constructs digital shirt designs and ID lace designs for Trinity University of Asia")}
                                {toSkillsBullet("Created billboards and publications for the Colegio de Santo Cristo de Burgosschool, as well as designed the school's yearbooks from 2014 to 2020")}
                                {toSkillsBullet("Produces own sprite assets for game development")}
                                {toSkillsBullet("Creates computerized digital media using Processing, an open-source graphical library that enables programmers to produce computer-driven digital arts and simulations")}

                                {toSkillsHeader("Game Developer")}
                                {toSkillBadges("Unity 3D, C#")}
                                {toSkillsBullet("Creates 2D as well as 3D android games using Unity Game Engine, uploads to the Google Play store under the developer name Jeremy Develops")}
                                {toSkillsBullet("Self produces all assets used for all games made including sprites and sound files")}
                                {toSkillsBullet("Utilizes C# in writing video game scripts and behaviors")}

                                {toSkillsHeader("General Programmer")}
                                {toSkillBadges("Python, C#, Git + Github")}
                                {toSkillsBullet("Writes specific software that can help in a multitude of bulk operations including (but not limited) to the manufacturing of sticker graphics, bulk data manipulation, online website data scraping, etc.")}

                                {toSkillsHeader("Educator and Education Content Creator")}
                                {toSkillBadges("Unity 3D, C#, Python")}
                                {toSkillsBullet("Worked part time at the Coding School Philippines, while educating children and teens on the following courses:")}
                                {toSkillsBullet("Make Your Own Game with Unity 1 & 2", 1)}
                                {toSkillsBullet("Python For Kids 1 & 2", 1)}
                                {toSkillsBullet("Python For Teens 1 & 2", 1)}
                                {toSkillsBullet("Intro to C# Programming", 1)}
                                {toSkillsBullet("Intro to Google Apps", 1)}
                                {toSkillsBullet("Revamped and structured the 'Intro to C# Programming' 10-hour programming course")}
                                {toSkillsBullet("Comanaged the 2021 TCS Coding Masters Coding Competition")}
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-5">
                            {toHeader("Academic History")}
                            <h6 className="text-secondary">University of the Philippines</h6>
                            <p>BS Computer Science | 2023 (Expected Graduation Date)</p>
                            <h6 className="text-secondary">Trinity University of Asia</h6>
                            <p>Junior High School and Senior High School STEM Track | 2012-2018</p>
                            <h6 className="text-secondary">Asian College of Technology</h6>
                            <p>Elementary Education | 2004-2012</p>
                        </div>
                        <hr className="my-0" />
                        <div className="content pb-3 pt-2 px-5">
                            {toHeader("University Affiliations")}
                            <h6 className="text-secondary">UP CURSOR</h6>
                            <p>Member since December 2019</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;