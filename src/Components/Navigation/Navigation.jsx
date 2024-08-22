import React from "react";
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="profile">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                />
                <span className="profile-name">Username</span>
            </div>
            <NavLink to="/profile" className="nav-item">
                <span className="emoji">👤</span>
                Profile
            </NavLink>
            <NavLink to="/messages" className="nav-item">
                <span className="emoji">💬</span>
                Messages
            </NavLink>
            <NavLink to="/news" className="nav-item">
                <span className="emoji">📰</span>
                News
            </NavLink>
            <NavLink to="/music" className="nav-item">
                <span className="emoji">🎵</span>
                Music
            </NavLink>
            <NavLink to="/settings" className="nav-item">
                <span className="emoji">⚙️</span>
                Settings
            </NavLink>
            <NavLink to="/logout" className="nav-item">
                <span className="emoji">🚪</span>
                Logout
            </NavLink>
        </nav>
    );
}

export default Navigation;
