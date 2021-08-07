import { useState } from "react";
import useRequest from "../hooks/useRequest";
import {
    useParams,
} from "react-router-dom";
import useResize from "../hooks/useResize";

const ProjectDetailsPage = ({ projectData }) => {
    let { id } = useParams();
    const [imageI, setImageI] = useState(0);
    const { breakpointSelector } = useResize();
    // const [imageIsLoading, setImageIsLoading] = useState(true);
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

    // const mainImageLoad = () => {
    //     setImageIsLoading(false);
    // }

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
        const getImageArray = () => {
            const toReturn = [];

            for (let i = 0; i < proj.img.length; i++) {
                let thisClassName = tern(i === imageI, "", "d-none");
                toReturn.push(
                    <img key={i} src={proj.img[i]} alt="dog" className={thisClassName} style={{
                        maxHeight: tern(horizontal, "80vh", breakpointSelector("50vh", null, "80vh")),
                        maxWidth: "100%",
                        // opacity: tern(imageIsLoading, "0", "1")
                    }} onLoad={() => {
                        // mainImageLoad();
                    }} />
                );
            }

            return toReturn;
        }
        if (proj.img != null) {
            return (
                <div><div className="mb-3 position-relative" style={{ textAlign: "center" }}>
                    {getImageArray()}
                    <button className="d-flex flex-column justify-content-center h-100 
                    position-absolute text-center d-md-none btn button-highlights rounded-0"
                        style={{ top: "0px", width: "40px" }}
                        disabled={imageI === 0}
                        onClick={() => { previewSetRelative(-1); }}>
                        <i className="bi bi-caret-left-fill"></i>
                    </button>
                    <button className="d-flex flex-column justify-content-center h-100
                     position-absolute text-center d-md-none btn button-highlights rounded-0"
                        style={{ top: "0px", right: "0px", width: "40px" }}
                        disabled={imageI === proj.img.length - 1}
                        onClick={() => { previewSetRelative(1); }}>
                        <i className="bi bi-caret-right-fill"></i>
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
        if (index !== imageI) {
            // setImageIsLoading(true);
            setImageI(index);
        }
    }
    const previewSetRelative = (val) => {
        // setImageIsLoading(true);
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
                <div className={tern(horizontal, "col-12", "col-12 col-sm-4")}>
                    <div className="flex-fill-fixed">
                        {getImageArea(horizontal)}
                    </div>
                </div>
                <div className={tern(horizontal, "col-12", "col-12 col-sm-8")}>
                    <div className="flex-fill-fixed d-inline">
                        <h2>{proj.title}</h2>
                        {proj.descLong.split("\\n").map((line, i) => {
                            return (
                                <p key={i}>{line}</p>
                            );
                        })}
                        <hr />
                        {getPlaystoreLink()}
                        {getWebsiteLink()}
                        {getGitHubLink()}
                        <div>This project uses the following frameworks and tools:</div>
                        <p className="text-muted fw-bold mb-5">{proj.languages.join(", ")}</p>
                    </div>
                </div>
            </span>
        </div >
    );
}
export default ProjectDetailsPage;
