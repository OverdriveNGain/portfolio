import {
    Link
} from "react-router-dom";

const NavbarBrand = ({ location, scrollTop }) => {
    const getBrandTransparency = () => location.pathname === "/" ? scrollTop <= 300 : false;

    const isBrandTransparent = getBrandTransparency();

    return (
        <Link className={"animated-opacity navbar-brand" + (isBrandTransparent && location.pathname === "/" ? " opacity-0" : "")} to="/">
            <div className="h4 text-primary b-0 font-title mb-1 mt-2">JEREMY <b>AMON</b></div>
        </Link>
    );
}

export default NavbarBrand;