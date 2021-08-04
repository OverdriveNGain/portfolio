import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-md-10 px-4">
                    <p className="py-5" />
                    <p className="display-1 font-title text-primary text-center">About Me</p>
                    <p className="mt-4 display-6">Greetings!</p>
                    <p className="mb-3">
                        My name is Jeremy, and I am a full-stack developer. I create websites, mobile apps, and software that help in a multitude of tasks, for everyone to use. I enjoy programming and logic problems, so I happily enjoy my time whenever I create various projects in my free time.
                    </p>
                    <p className="mb-3">
                        In essence, I create software with a focus on accuracy and performance. I provide well-documented commits to my repositories, and I dive deep into whatever framework I dive into. I believe that the quality of a system is only as good as the quality of its subparts, and following that belief system in engineering accessible software and applications will lead to better quality outputs.
                    </p>
                    <p className="mb-3">
                        My passion for programming sparked when I first wanted to create my own computer game. When I was 11, I used Game Maker Studio 1 to try and create simple games using sprites made in Inkscape. Although I wasn't able to finish any projects due to school homework, I am thankful for the experience because I have learned a lot of programming concepts from studying Game Maker’s programming language, GML.
                    </p>
                    <p className="mb-3">
                        A few years later, I taught myself how to use another freely available game engine, Unity 3D. This time, I was able to finish a few games using that platform. Although they were simple games, I did all of the work myself, including sprite creation using Adobe Illustrator, SFX using Audacity, and uploading APKs to the Google Play Store. Of course, my games didn’t go viral, but I am especially thankful for the skills that I have learned because of Unity as well, as I was able to use these skills in other aspects of my life (which included creating pub mats for school projects, creating billboards for a school, and designing T-shirts and ID laces every semester)
                    </p>
                    <p className="mb-3">
                        Fast forward to today, I have grown a lot more in terms of the frameworks and tools that I use for not only games but also for websites and mobile applications. I can create a website for your business that focuses on user experience and ease of use, or I can develop your mobile app that provides convenience to your customers to which they truly deserve. I work well in teams, and I learn fast in any environment that you assign to me.
                    </p>
                    <Link to="/contact">
                        <p className="">
                            Let’s grab a cup of coffee sometime!
                        </p>
                    </Link>
                    <p className="py-5" />
                </div>
            </div>

        </div>
    );
}

export default AboutMe;