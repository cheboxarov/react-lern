import React from "react";
import Classes from "./Header.module.css";

const LogoUrl = "https://cdn.midjourney.com/88915ba1-1d53-497e-aa7c-31171785b158/0_1.png";

const Header = () => {
    return (
        <header className={Classes.header}>
            <div className={Classes.logo}>
                <img src={LogoUrl} alt="Logo" />
                <span className={Classes.logoText}>Real Social Media</span> {/* Текст логотипа */}
            </div>
        </header>
    );
}

export default Header;
