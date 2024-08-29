import React from "react";
import ContentClasses from './Content.module.css'
import PostsSection from "./PostsSection/PostsSection";
import MyProfile from "./MyProfile/MyProfile";

const ProfileSection = ({profile}) => {
    return (<main className={ContentClasses.content}>
        <MyProfile />
        <PostsSection posts={profile.posts} addPostFunc={profile.addPostFunc}
                      newPostContent={profile.newPostContent} updatePostArea={profile.updatePostArea} />
    </main>)
}

export default ProfileSection