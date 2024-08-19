import React from "react";
import './items/CreatePostButton.css'
import './Content.css'
import './items/Posts.css'
import './items/Profile.css'

const Content = () => {
    return (<main className="content">
        <section className="profile-section">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKX9t1fDP4bYcE_skCUUzIllxgsvPvtDxmTg&s"
                 alt="Profile" className="profile-pic"/>
            <div className="profile-info">
                <h2>My Name</h2>
                <p>Short description about myself.</p>
            </div>
        </section>
        <section className="posts-section">
            <h2>My Posts</h2>
            <div className="new-post">
                <button className="new-post-button">Create New Post</button>
            </div>
            <div className="posts-list">
                <div className="post">
                    <h3>Post Title 1</h3>
                    <p>Content of the first post.</p>
                </div>
                <div className="post">
                    <h3>Post Title 2</h3>
                    <p>Content of the second post.</p>
                </div>
            </div>
        </section>
    </main>)
}

export default Content