import {
    Link,
    useLocation
} from "react-router-dom";

const NavbarLinks = ({linksData}) => {
    const location = useLocation();

    const getNavbarLinkColor = (locationObject, targetPath) => locationObject.pathname.includes(targetPath) ? "text-secondary" : "text-primary";

    const navs = linksData
        .map((linkData, i) => {
            const linkAddress = linkData[0];
            const linkName = linkData[1];
            return (<Link key={i} className={`px-3 animated-all-quick anim-hover-lighten ${getNavbarLinkColor(location, linkAddress)}`}
                to={linkAddress}>{linkName}</Link>);
        })

    return (<div className="links">{navs}</div>);
}

export default NavbarLinks;