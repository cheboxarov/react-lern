import React from "react";
import './App.css';

const LogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"

function App() {
  return (
    <div className="App">
        <header className="header">
            <img src={LogoUrl} alt=""/>
        </header>
        <nav className="nav">
            <div>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
            </div>
        </nav>
        <div className="content">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKX9t1fDP4bYcE_skCUUzIllxgsvPvtDxmTg&s"
                     alt="" className="headerAcc"/>
            </div>
            <div>
                ava + desc
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    all posts
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </div>
        <footer>
            footer
        </footer>
    </div>
  );
}

export default App
