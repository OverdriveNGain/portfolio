
import useResize from "../hooks/useResize";

const SkillBadgesRow = ({skills}) => {
    const { dimensions } = useResize();

    const getBadgeStyle = (b) => {
        switch (b) {
            case "Swift":
                return { backgroundColor: "rgb(235, 78, 55)", color: "white" };
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

    const skillsArray = skills.split(",").map((s) => s.trim());
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

export default SkillBadgesRow