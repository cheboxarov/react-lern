import React from "react";

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
            <a href="/profile" className="nav-item">
                <span className="emoji">👤</span>
                Profile
            </a>
            <a href="/messages" className="nav-item">
                <span className="emoji">💬</span>
                Messages
            </a>
            <a href="/news" className="nav-item">
                <span className="emoji">📰</span>
                News
            </a>
            <a href="/music" className="nav-item">
                <span className="emoji">🎵</span>
                Music
            </a>
            <a href="/settings" className="nav-item">
                <span className="emoji">⚙️</span>
                Settings
            </a>
            <a href="/logout" className="nav-item">
                <span className="emoji">🚪</span>
                Logout
            </a>
        </nav>
    );
}

export default Navigation;
