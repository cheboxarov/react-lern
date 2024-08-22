import React from "react";
import ContentClasses from './Content.module.css'
import PostsSection from "./PostsSection/PostsSection";
import MyProfile from "./MyProfile/MyProfile";

const ProfileSection = () => {
    return (<main className={ContentClasses.content}>
        <MyProfile />
        <PostsSection />
    </main>)
}

export default ProfileSection