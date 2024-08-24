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
                        My name is Jeremy, and I am a software engineer.
                    </p>
                    <p className="mb-3">
                        I create software with a focus on accuracy, usability, and maintainability. As a programmer, you should never leave a codebase in a confusing state. That means meaningful variable names, including comments within code, documentation, refactoring code whenever needed, and even updating the project README file. If you are the programmer and you are having a difficult time understanding the code, then that is an indication of poor code quality that needs to be addressed if project maintainability is important.
                    </p>
                    <p className="mb-3">
                        I also believe in writing tickets for every note about the application that needs to be addressed. This does not only include bugs, but also minimal user interface issues, UX considerations, and code quality concerns. Having a well-documented list of tasks that you need to do for the application allows for a more streamlined development process that helps build software confidence within the team.
                    </p>
                    <p className="mb-3">
                        My passion for programming sparked when I first wanted to create my own computer game. When I was 11, I used Game Maker Studio to try and create simple games using sprites made in Inkscape. This was the springboard for me to transition from drag-and-drop programming to writing code, and I am thankful for the core memory because it is where the journey started for me.
                    </p>
                    <p className="mb-3">
                        I studied Computer Science at the University of the Philippines. They have taught me topics like Computer Architecture, Operating Systems, Computer Networks, Compiler Design, Databases, and a whole lot of math. I can confidently say that they have prepared me well for the corporate world, and the knowledge that I have acquired is not to be forgotten.
                    </p>
                    <p className="mb-3">
                        Fast forward to today, I am currently working at Maya Philippines, happily working a 9 to 6. I have learned a lot of software development practices in the projects that I have been assigned to so far, and my enthusiasm for it has been overwhelming that I have also started implementing these practices in my own personal projects.
                    </p>
                    <p className="mb-3">
                        If you want to know more about me, feel free to <Link to="/contact">send me a message</Link>!
                    </p>
                    <p className="py-5" />
                </div>
            </div>

        </div>
    );
}

export default AboutMe;