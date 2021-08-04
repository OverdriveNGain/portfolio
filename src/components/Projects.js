import { useEffect, useState } from "react";

const Projects = () => {
    const [filters, setFilters] = useState([]);
    const allFilters = [
        "Flutter",
        "Unity 3D",
        "Firebase",
        "React JS",
        "Git + Github",
        "HTML",
        "CSS",
        "Javascript",
        "SASS",
        "Bootstrap",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Processing",
        "p5.js",
        "Inkscape",
        "C#",
        "Python"
    ]
    const projects = [
        {
            id: 1,
            title: "Website Portfolio",
            languages: ["React JS", "HTML", "CSS", "Javascript", "Bootstrap", "SASS", "p5.js"]
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
        let toReturn = [];
        const cols = 3;
        const height = "200";
        const width = `${Math.floor(100 / cols)}`;
        let projectsToDisplay;
        if (filters.length === 0)
            projectsToDisplay = projects;
        else
            projectsToDisplay = projects.filter((project) => {
                for (let filter of filters) {
                    if (!project.languages.includes(filter))
                        return false;
                }
                return true;
            })
        toReturn = projectsToDisplay.map((data, i) => {
            const leftOffset = `${Math.floor(i % cols) * width}%`;
            const topOffset = `${Math.floor(i / cols) * height}px`;
            const tileDivStyle = {
                width: width + "%",
                height: height + "px",
                left: leftOffset,
                top: topOffset
            };
            return (<div key={data.id} style={tileDivStyle} className="d-inline-block position-absolute p-1">
                <div className="shadow p-3 rounded bg-warning h-100">
                    <div>{data.title}</div>
                    <small>{data.languages}</small>
                </div>
            </div>);
        })

        return <div style={{
            position: "relative",
            top: "0px",
            width: "100%",
            height: (height * Math.ceil(projectsToDisplay.length / cols)) + "px",
        }}>{toReturn}</div>;
    }

    const getFilterButtons = () => {
        return allFilters.map((filter, i) => {
            if (filters.includes(filter)) {
                return <button key={i} className="btn btn-primary text-white me-2 mb-2" onClick={() => { onFilterButtonToggle(filter, false) }}>{filter}</button>;
            }
            else {
                return <button key={i} className="btn btn-outline-primary me-2 mb-2" onClick={() => { onFilterButtonToggle(filter, true) }}>{filter}</button>;
            }
        })
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-md-10 px-4">
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
            </div>
        </div>
    );
}

export default Projects;