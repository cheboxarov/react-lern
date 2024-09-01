import React from "react";
import ContentClasses from './Content.module.css'
import PostsSection from "./PostsSection/PostsSection";
import MyProfile from "./MyProfile/MyProfile";

const ProfileSection = ({profile, dispatch}) => {
    return (<main className={ContentClasses.content}>
        <MyProfile />
        <PostsSection posts={profile.posts}
                      newPostContent={profile.newPostContent} dispatch={dispatch} />
    </main>)
}

export default ProfileSection