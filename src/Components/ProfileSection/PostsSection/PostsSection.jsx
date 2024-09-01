import React, { useRef } from "react";
import Classes from "./Posts.module.css";
import ButtonClasses from "./CreatePostButton/CreatePostButton.module.css";
import Post from "./Post/Post";

const PostsSection = React.memo(({ posts, newPostContent, dispatch }) => {
    const newPostArea = useRef(null);

    const createPost = () => {
        dispatch({type: "ADD-POST", title: "123"});
    }

    const onPostChange = () => {
        dispatch({newText: newPostArea.current.value, type: "UPDATE-NEW-POST-TEXT"});
    }

    return (
        <section className={Classes.postsSection}>
            <h2>My Posts</h2>
            <div className={Classes.newPost}>
                <textarea
                    ref={newPostArea}
                    onChange={onPostChange}
                    className={Classes.textarea}
                ></textarea>
                <button onClick={createPost} className={ButtonClasses.newPostButton}>
                    Create New Post
                </button>
            </div>
            <div className={Classes.postsList}>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        title={post.title}
                        content={post.content}
                        likes={post.likes}
                        views={post.views}
                        time={post.time}
                        avatar={post.avatar}
                    />
                ))}
            </div>
        </section>
    );
});

export default PostsSection;
