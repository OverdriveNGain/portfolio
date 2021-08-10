import {
    Link
} from "react-router-dom";

const NavbarBrand = ({ location, scrollTop, navbarLinkClick }) => {

    const getBrandTransparency = () => {
        switch (location.pathname) {
            case "/":
                return scrollTop <= 300;
            default:
                return false;
        }
    }

    let isBrandTransparent = getBrandTransparency();

    return (
        <Link className={"animated-opacity navbar-brand" + (isBrandTransparent && location.pathname === "/" ? " opacity-0" : "")} to="/" onClick={navbarLinkClick}>
            <div className="">
                <div className="h4 text-primary b-0 font-title mb-1 mt-2">JEREMY <b>AMON</b></div>
                {/*JeremyAmon*/}
            </div>
        </Link>
    );
}

export default NavbarBrand;