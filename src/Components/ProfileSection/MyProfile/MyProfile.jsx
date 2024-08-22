import ProfileClasses from "./Profile.module.css";
import React from "react";

const MyProfile = () => {
    return (
        <section className={ProfileClasses.profileSection}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKX9t1fDP4bYcE_skCUUzIllxgsvPvtDxmTg&s"
                 alt="Profile" className={ProfileClasses.profilePic}/>
            <div className={ProfileClasses.profileInfo}>
                <h2>My Name</h2>
                <p>Short description about myself.</p>
            </div>
        </section>
    )
}

export default MyProfile