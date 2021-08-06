import { useLayoutEffect, useState } from "react";
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
    else if (response != null)
        proj = response;
    else
        return (<div>Loading...</div>);

    const tern = (cond, e1, e2) => {
        if (cond)
            return e1;
        return e2;
    }

    const mainImageLoad = () => {
        console.log("DONE");
    }

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

    const getImageArea = (horizontal) => {

        if (proj.img != null) {
            return (
                <div><div className="mb-3 position-relative">
                    <img src={proj.img[imageI]} alt="dog" style={{
                        maxHeight: "80vh",
                        maxWidth: "100%"
                    }} onLoad={() => {
                        mainImageLoad();
                    }} />
                    <button className="d-flex flex-column justify-content-center h-100 
                    position-absolute text-center d-md-none btn button-highlights rounded-0"
                        style={{ top: "0px", width: "40px" }}
                        disabled={imageI === 0}
                        onClick={() => { previewSetRelative(-1); }}>
                        <i class="bi bi-caret-left-fill"></i>
                    </button>
                    <button className="d-flex flex-column justify-content-center h-100
                     position-absolute text-center d-md-none btn button-highlights rounded-0"
                        style={{ top: "0px", right: "0px", width: "40px" }}
                        disabled={imageI === proj.img.length - 1}
                        onClick={() => { previewSetRelative(1); }}>
                        <i class="bi bi-caret-right-fill"></i>
                    </button>
                </div>
                    <div className="text-muted text-center m-2 d-md-none" style={{ fontSize: "small" }}>Tap image for fullscreen</div>
                </div>
            );
        }
        return <div></div>;
        // return <img src={`https://picsum.photos/seed/${proj.title}/600/350/`} alt="dog" className="w-100" />
    }

    const mouseOverPreviewHandler = (index) => {
        setImageI(index);
    }
    const previewSetRelative = (val) => {
        setImageI(imageI + val)
    }

    let horizontal = true;
    if (proj.imgPortrait === true)
        horizontal = false;

    return (
        <div className="d-flex flex-row mx-3">
            <span className="d-flex flex-column d-none d-md-inline me-2" style={{ width: "70px" }}>
                {getImagePreviews()}
            </span>
            <span className="row">
                <div className={tern(horizontal, "col-12", "col-4")}>
                    <div className="flex-fill-fixed">
                        {getImageArea(horizontal)}
                    </div>
                </div>
                <div className={tern(horizontal, "col-12", "col-8")}>
                    <div className="flex-fill-fixed d-inline">
                        <h2>{proj.title}</h2>
                        <p>{proj.descLong}</p>
                        {getGitHubLink()}
                        {getPlaystoreLink()}
                        {getWebsiteLink()}
                        <div>This project uses the following frameworks and tools:</div>
                        <p className="text-muted fw-bold mb-5">{proj.languages.join(", ")}</p>
                    </div>
                </div>
            </span>
        </div >
    );
}
export default ProjectDetailsPage;
