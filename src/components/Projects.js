import { useEffect, useState } from "react";
import useResize from '../hooks/useResize';

const Projects = () => {
    const [filters, setFilters] = useState([]);
    const { breakpointSelector } = useResize();
    const allFilters = [
        "Flutter",
        "Unity 3D",
        "Firebase",
        "React JS",
        "Git",
        "HTML",
        "CSS",
        "Javascript",
        "SASS",
        "Bootstrap",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Processing",
        "p5.js",
        "C#",
        "Python"
    ]
    const projects = [
        {
            id: 1,
            title: "Website Portfolio",
            languages: ["React JS", "HTML", "CSS", "Javascript", "Bootstrap", "SASS", "p5.js", "Git"]
        },
        {
            id: 2,
            title: "Money Counter",
            languages: ["Flutter"]
        },
        {
            id: 3,
            title: "Buwad Republic",
            languages: ["Flutter", "Firebase"]
        },
        {
            id: 4,
            title: "Loose Blocks",
            languages: ["Unity 3D", "Adobe Illustrator"]
        },
        {
            id: 5,
            title: "Just Crafts PH App",
            languages: ["Flutter"]
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onFilterButtonToggle = (name, newState) => {
        let newFilterList;
        if (newState) {
            newFilterList = [...filters];
            newFilterList.push(name);
        }
        else {
            newFilterList = filters.filter((f) => f !== name);
        }
        setFilters(newFilterList);
    }

    const getProjectTiles = () => {
        const isProjectShown = (project) => {
            for (let filter of filters) {
                if (!project.languages.includes(filter))
                    return false;
            }
            return true;
        }
        let toReturn = [];
        const cols = breakpointSelector(2, 2, 3, 4);
        const height = breakpointSelector(150, 150, 200);
        const width = `${Math.floor(100 / cols)}`;
        let projectsToDisplay;
        // if (filters.length === 0)
        projectsToDisplay = projects;
        // else
        //     projectsToDisplay = projects.filter(isProjectShown)

        let shownIndex = 0;
        for (let i = 0; i < projectsToDisplay.length; i++) {
            let project = projectsToDisplay[i];
            let tileDivStyle;
            if (isProjectShown(project)) {
                tileDivStyle = {
                    width: width + "%",
                    height: height + "px",
                    left: `${Math.floor(shownIndex % cols) * width}%`,
                    top: `${Math.floor(shownIndex / cols) * height}px`,
                    opacity: '1'
                };
                shownIndex++;
            }
            else {
                tileDivStyle = {
                    width: width + "%",
                    height: height + "px",
                    left: "0px",
                    top: "0px",
                    opacity: '0'
                };
            }
            toReturn.push(<div key={project.id} style={tileDivStyle} className="d-inline-block position-absolute p-1 animated-all">
                <div className="shadow p-3 rounded bg-light h-100">
                    <div>{project.title}</div>
                    <small className="text-muted">{project.languages.join(", ")}</small>
                </div>
            </div>);
        }

        return <div style={{
            position: "relative",
            top: "0px",
            width: "100%",
            height: (height * Math.ceil(shownIndex / cols)) + "px",
        }} className="animated-all">{toReturn}</div>;
    }

    const getFilterButtons = () => {
        return allFilters.map((filter, i) => {
            if (filters.includes(filter)) {
                return <button key={i} className="btn btn-sm btn-primary text-white me-2 mb-2" onClick={() => { onFilterButtonToggle(filter, false) }}>{filter}</button>;
            }
            else {
                return <button key={i} className="btn btn-sm btn-outline-muted me-2 mb-2" onClick={() => { onFilterButtonToggle(filter, true) }}>{filter}</button>;
            }
        })
    }
    return (
        <div className="container">
            <p className="py-5" />
            <p className="display-1 font-title text-primary text-center">Projects</p>
            <input className="form-control my-4" type="text" placeholder="Search for Projects" aria-label="default input example" />
            <small className="d-block text-muted mb-2">Filters:</small>
            <div className="text-center">
                {getFilterButtons()}
            </div>
            <hr />
            {getProjectTiles()}
            <div className="p-4" />
        </div>
    );
}

export default Projects;