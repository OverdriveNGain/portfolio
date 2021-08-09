import { useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";
import {
    useParams,
} from "react-router-dom";
import useResize from "../hooks/useResize";
import {
    Link
} from "react-router-dom";
import { tern } from "./helpers/Helpers";

const ProjectDetailsPage = ({ projectData, backFunction }) => {
    const { id } = useParams();
    const [imageI, setImageI] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const { breakpointSelector } = useResize();
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const { response } = useRequest(`https://portfolio-api-jeremy.web.app/projects/${id}`, {
        enable: projectData != null,
        alt: `http://localhost:3004/data/${id}`
    });

    const getGitHubLink = (proj) => tern(
        proj.github != null,
        <p><a href={proj.github} target="_blank" rel="noopener noreferrer">
            Open this project in Github
        </a></p>,
        <div />
    );

    const getPlaystoreLink = (proj) => tern(
        proj.playstore != null,
        <p><a href={proj.playstore} target="_blank" rel="noopener noreferrer">
            See this app on the Google Play Store
        </a></p>,
        <div></div>);

    const getWebsiteLink = (proj) => tern(
        proj.website != null,
        <p><a href={proj.website} target="_blank" rel="noopener noreferrer">
            Open this project in a new tab
        </a></p>,
        <div></div>);

    const getImagePreviews = (proj) => {
        if (proj.img == null)
            return <div />;

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

    const getImageArea = (horizontal, proj) => {
        const getImageArray = () => {
            const toReturn = [];

            if (imagesLoaded < proj.img.length) {
                toReturn.push(<p key={-1}>Loading images...</p>);
            }

            for (let i = 0; i < proj.img.length; i++) {
                let thisClassName = "unselectable" + tern(i === imageI, "", " d-none");
                let style = tern(
                    fullscreen,
                    {
                        maxHeight: "100vh",
                        maxWidth: "100wh",
                        objectFit: "contain"
                    },
                    {
                        maxHeight: tern(horizontal, "80vh", breakpointSelector("50vh", null, "80vh")),
                        maxWidth: "100%",
                    }
                )

                toReturn.push(
                    <img
                        key={i} src={proj.img[i]}
                        alt="dog"
                        className={thisClassName}
                        style={style}
                        onClick={() => {
                            if (!fullscreen)
                                setFullscreen(true);
                        }}
                        onLoad={() => {
                            setImagesLoaded(imagesLoaded + 1);
                        }}
                    />
                );
            }
            return toReturn;
        }
        if (proj.img != null) {
            if (fullscreen) {
                // Fullscreen images
                return (
                    <div>
                        <div className={"position-fixed w-100 h-100 text-center d-flex flex-column justify-content-center"} style={{ left: "0px", top: "0px", zIndex: "2000", backgroundColor: "rgba(0,0,0,0.9)" }}>
                            {getImageArray()}
                            <i className={"bi bi-caret-left-fill button-highlights-fullscreen animated-all-quick position-absolute" + tern(imageI === 0, " d-none", "")}
                                onClick={() => { previewSetRelative(-1); }} style={{ left: "15px", top: "43%" }} />
                            <i className={"bi bi-caret-right-fill button-highlights-fullscreen animated-all-quick position-absolute" + tern(imageI === proj.img.length - 1, " d-none", "")}
                                onClick={() => { previewSetRelative(1); }} style={{ right: "15px", top: "43%" }} />
                            <i className="bi bi-x button-highlights-fullscreen animated-all-quick position-absolute" style={{ top: "0px", right: "15px" }} onClick={() => { setFullscreen(false) }}></i>
                        </div>
                    </div>
                );
            }
            // Not fullscreen images
            const className = "mb-3 position-relative"
            const style = { textAlign: "center" };
            const buttonClassName = "d-flex flex-column justify-content-center h-100 position-absolute text-center btn button-highlights rounded-0" + tern(fullscreen, "", " d-md-none");
            const fullyLoaded = (proj.img != null && proj.img.length === imagesLoaded);
            return (
                <div>
                    <div className={className} style={style}>
                        {getImageArray()}
                        {tern(fullyLoaded, <button className={buttonClassName}
                            style={{ top: "0px", width: "40px" }}
                            disabled={imageI === 0}
                            onClick={() => { previewSetRelative(-1); }}>
                            <i className="bi bi-caret-left-fill"></i>
                        </button>, <div />)}
                        {tern(fullyLoaded, <button className={buttonClassName}
                            style={{ top: "0px", right: "0px", width: "40px" }}
                            disabled={imageI === proj.img.length - 1}
                            onClick={() => { previewSetRelative(1); }}>
                            <i className="bi bi-caret-right-fill"></i>
                        </button>, <div />)}
                    </div>
                    {tern(proj.img != null && imagesLoaded === proj.img.length, <div className="text-muted text-center mt-2 mb-4" style={{ fontSize: "small" }}>Tap image for fullscreen</div>, <div></div>)}
                </div>
            );
        }
        return <div></div>;
    }

    const mouseOverPreviewHandler = (index) => {
        if (index !== imageI) {
            setImageI(index);
        }
    }
    const previewSetRelative = (val) => {
        setImageI(imageI + val)
    }
    const keyDownHandler = (e, proj) => {
        if (e.key === "ArrowRight") {
            // console.log(`${proj != null}   ${proj.img != null}   ${imagesLoaded === proj.img.length}   ${imageI < proj.img.length - 1}`)
            if (proj != null && proj.img != null && imagesLoaded === proj.img.length && imageI < proj.img.length - 1)
                setImageI(imageI + 1);
        }
        else if (e.key === "ArrowLeft") {
            if (proj != null && proj.img != null && imagesLoaded === proj.img.length && imageI > 0)
                setImageI(imageI - 1);
        }
        else if (e.key === "Escape") {
            if (fullscreen)
                setFullscreen(false);
        }
    }


    let proj;

    if (projectData != null)
        proj = projectData;
    else if (response != null)
        proj = response;

    useEffect(() => {
        window.scrollTo(0, 0);
        const callback = (e) => { keyDownHandler(e, proj) };
        window.addEventListener('keydown', callback);
        return () => {
            window.removeEventListener('keydown', callback)
        }
    });

    if (proj == null)
        return (<div>Loading...</div>);

    let horizontal = true;
    if (proj.imgPortrait === true)
        horizontal = false;

    return (
        <div>
            <div className="mb-3 container">
                <Link to="/projects" className="btn btn-outline-primary btn-sm link-no-underline px-3"><i className="bi bi-caret-left-fill"></i> Back to Projects</Link>
            </div>
            <div className="d-flex flex-row mx-3">
                <span className="d-flex flex-column d-none d-md-inline me-2" style={{ width: tern(proj.img == null || proj.img.length === 0, "0px", "70px") }}>
                    {getImagePreviews(proj)}
                </span>
                <span className="row">
                    <div className={tern(horizontal, "col-12", "col-12 col-sm-4")}>
                        <div className="flex-fill-fixed">
                            {getImageArea(horizontal, proj)}
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
                            <div>This project uses the following frameworks and tools:</div>
                            <p className="text-muted fw-bold">{proj.languages.join(", ")}</p>
                            <hr />
                            {getPlaystoreLink(proj)}
                            {getWebsiteLink(proj)}
                            {getGitHubLink(proj)}
                            <p className="mb-5" />
                        </div>
                    </div>
                </span>
            </div >
        </div>
    );
}
export default ProjectDetailsPage;
