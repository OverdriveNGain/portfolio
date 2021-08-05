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
                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                        Open this project in Github
                    </a>
                </p>
            );
        }
        return <div></div>;
    }

    const getPlaystoreLink = () => {
        if (proj.playstore != null) {
            return (
                <p>
                    <a href={proj.playstore} target="_blank" rel="noopener noreferrer">
                        See this project on the Google Play Store
                    </a>
                </p>
            );
        }
        return <div></div>;
    }

    const getWebsiteLink = () => {
        if (proj.website != null) {
            return (
                <p>
                    <a href={proj.website} target="_blank" rel="noopener noreferrer">
                        Open this project in a new tab
                    </a>
                </p>
            );
        }
        return <div></div>;
    }

    const getImageArea = () => {
        if (proj.img != null) {
            return (
                <p>
                    <img src={proj.img[0]} alt="dog" className="w-100" />
                </p>
            );
        }
        return <div></div>;
        // return <img src={`https://picsum.photos/seed/${proj.title}/600/350/`} alt="dog" className="w-100" />
    }

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    {getImageArea()}
                </div>
                <div className="col-4">
                    <h2>{proj.title}</h2>
                    <p>{proj.descLong}</p>
                    {getGitHubLink()}
                    {getPlaystoreLink()}
                    {getWebsiteLink()}
                    <div>This project uses the following frameworks and tools:</div>
                    <p className="text-muted fw-bold">{proj.languages.join(", ")}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailsPage;
