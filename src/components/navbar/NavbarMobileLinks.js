import { useState } from 'react';

const NavbarMobileLinks = ({linksData}) => {
    const [dropdownExpanded , setDropdownExpanded] = useState(false);

    const dropdownPanelExpandCallback = () => {
        setDropdownExpanded(!dropdownExpanded);
    }

    const dropdownPanelCollapseCallback = () => {
        setDropdownExpanded(false);
    }

    const navigationLinks = () => {
        return linksData
            .map((linkData, i) => {
                const linkAddress = linkData[0];
                const linkName = linkData[1];
                return (<li key={i}><a href={linkAddress}>{linkName}</a></li>);
            })
    }

    return (<>
        <button type="button" className="dropdown_panel_button" onClick={dropdownPanelExpandCallback}><i className="bi bi-list"></i></button>
        <div className={`mobile_dropdown_panel ${dropdownExpanded ? 'expanded' : ''}`}>
            <div className="container">
                <div className="top_bar">
                    <span>Where do you want to go?</span>
                    <button type="button" className="dropdown_panel_button" onClick={dropdownPanelCollapseCallback}><i className="bi bi-x"></i></button>
                </div>
                <ul>
                    {navigationLinks()}
                </ul>
            </div>
        </div>
    </>)
}

export default NavbarMobileLinks