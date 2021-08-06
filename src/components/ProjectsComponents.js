import { useState } from "react";
import useRequest from "../hooks/useRequest";
import {
    useParams,
} from "react-router-dom";

const ProjectDetailsPage = ({ projectData }) => {
    let { id } = useParams();
    const [imageI, setImageI] = useState(0);
    const { response } = useRequest(`https://portfolio-api-jeremy.web.app/projects/${id}`, {
        enable: projectData != null,
        alt: `http://localhost:3004/data/${id}`
    });

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

    const getImagePreviews = () => {
        if (proj.img == null) {
            return <div></div>;
        }

        let toReturn = [];

        for (let i = 0; i < proj.img.length; i++) {
            let opacity = 0.5;
            if (i === imageI)
                opacity = 1;
            let _style = {
                width: "70px",
                height: "70px",
                objectFit: "cover",
                opacity: opacity
            };
            toReturn.push(
                <img key={i} src={proj.img[i]} alt={`${proj.title} preview ${i}`} style={_style} onMouseOver={() => { mouseOverPreviewHandler(i) }} />
            );
        }

        return toReturn;
    }

    const getImageArea = () => {
        if (proj.img != null) {
            return (
                <div className="d-flex flex-col justify-content-center">
                    <d className="d-flex flex-column">
                        {getImagePreviews()}
                    </d>
                    <div style={{ height: "100vh" }}>
                        <img src={proj.img[imageI]} alt="dog" style={{
                            maxHeight: "80%",
                            maxWidth: "100%"
                        }} />
                    </div>
                </div>
            );
        }
        return <div></div>;
        // return <img src={`https://picsum.photos/seed/${proj.title}/600/350/`} alt="dog" className="w-100" />
    }

    const mouseOverPreviewHandler = (index) => {
        setImageI(index);
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="flex-fill">
                        {getImageArea()}
                    </div>
                </div>
                <div className="col">
                    <div className="flex-fill d-inline">
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
        </div>
    );
}

// return (
//     <div>
//         <div className="d-flex flex-row">
//             <div className="d-flex flex-column me-1">
//                 {getImagePreviews()}
//             </div>
//             <div className="flex-grow-1">
//                 {getImageArea()}
//             </div>
//             <div className="flex-grow-1 d-inline">
//                 <h2>{proj.title}</h2>
//                 <p>{proj.descLong}</p>
//                 {getGitHubLink()}
//                 {getPlaystoreLink()}
//                 {getWebsiteLink()}
//                 <div>This project uses the following frameworks and tools:</div>
//                 <p className="text-muted fw-bold">{proj.languages.join(", ")}</p>
//             </div>
//         </div>
//     </div>
// );

export default ProjectDetailsPage;
