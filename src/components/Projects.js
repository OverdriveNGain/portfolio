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
        "Git + Github",
        "Python"
    ]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onFilterButtonToggle = (name, newState) => {
        console.log(`Toggling ${name} to ${newState}`);
        console.log(":" + filters);
        let newFilterList;
        if (newState) {
            newFilterList = [...filters];
            newFilterList.push(name);
        }
        else {
            newFilterList = filters.filter((f) => f !== name);
        }
        setFilters(newFilterList);
        console.log("::" + newFilterList);
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
                    <div>
                        {getFilterButtons()}
                    </div>
                    <hr />
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ab magni dolorum quod vitae eligendi a officiis error corrupti culpa dicta sequi suscipit aliquid, facilis magnam. Quaerat unde officiis impedit!</div>
                </div>
            </div>
        </div>
    );
}

export default Projects;