// import { useState } from "react";
import useRequest from "../hooks/useRequest";
import {
    useParams,
} from "react-router-dom";

const ProjectDetailsPage = ({ projectData }) => {
    let { id } = useParams();
    const { response } = useRequest(`http://localhost:3001/projects/${id}`, projectData != null);

    let proj;
    if (projectData != null)
        proj = projectData;
    if (response != null)
        proj = response;
    if (proj == null)
        return (<div>Loading...</div>);

    const getGitHubLink = () => {
        if (proj.github != null) {
            return (
                <p>
                    <a href="https://github.com/OverdriveNGain/portfolio" target="_blank" rel="noopener noreferrer">
                        Open this project in Github
                    </a>
                </p>
            );
        }
        return <div></div>;
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <img src={`https://picsum.photos/seed/${proj.title}/600/350/`} alt="dog" className="w-100" />
                </div>
                <div className="col">
                    <h2>{proj.title}</h2>
                    <p>{proj.descLong}</p>
                    {getGitHubLink()}
                    <div>This project uses the following frameworks and tools:</div>
                    <p className="text-muted fw-bold">{proj.languages.join(", ")}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailsPage;