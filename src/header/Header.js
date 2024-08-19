import React from "react";

const LogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png";

const Header = () => {
    return (
        <header className="header">
            <img src={LogoUrl} alt="Logo"/>
        </header>
    )
}

export default Header