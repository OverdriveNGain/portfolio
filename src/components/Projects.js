import { useEffect, useState } from "react";
import useResize from '../hooks/useResize';
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

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
            id: "website-portfolio",
            title: "Website Portfolio",
            description: "This website, actually!",
            languages: ["React JS", "HTML", "CSS", "Javascript", "Bootstrap", "SASS", "p5.js", "Git"],
        },
        {
            id: "money-counter",
            title: "Money Counter",
            description: "A simple app for counting money",
            languages: ["Flutter"]
        },
        {
            id: "buwad-republic",
            title: "Buwad Republic",
            description: "A promotional website for a growing dried fish business",
            languages: ["Flutter", "Firebase"]
        },
        {
            id: "loose-blocks",
            title: "Loose Blocks",
            description: "A classic game without the training wheels",
            languages: ["Unity 3D", "Adobe Illustrator"]
        },
        {
            id: "just-crafts-ph",
            title: "Just Crafts PH App",
            description: "A mobile app that showcases a sticker business' designs",
            languages: ["Flutter"]
        }
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
                <Link to={`/projects/${project.id}`} className="link-no-underline">
                    <div className="shadow p-3 rounded bg-light h-100">
                        <div>{project.title}</div>
                        <small className="text-muted">{project.description}</small>
                    </div>
                </Link>
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
            <Switch>
                <Route path="/projects" exact>
                    <p className="display-1 font-title text-primary text-center">Projects</p>
                    <input className="form-control my-4" type="text" placeholder="Search for Projects" aria-label="default input example" />
                    <small className="d-block text-muted mb-2">Filters:</small>
                    <div className="text-center">
                        {getFilterButtons()}
                    </div>
                    <hr />
                    {getProjectTiles()}
                    <div className="p-4" />
                </Route>
                <Route path="/">
                    <h2>Project!</h2>
                </Route>
            </Switch>
        </div>
    );
}

export default Projects;