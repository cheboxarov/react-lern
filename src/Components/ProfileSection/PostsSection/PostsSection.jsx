import React, { useRef } from "react";
import Classes from "./Posts.module.css";
import ButtonClasses from "./CreatePostButton/CreatePostButton.module.css";
import Post from "./Post/Post";

const PostsSection = React.memo(({ posts, addPostFunc, newPostContent, updatePostArea }) => {
    const newPostArea = useRef(null);

    const createPost = () => {
        addPostFunc("new post", newPostArea.current.value);
    }

    const onPostChange = () => {
        updatePostArea(newPostArea.current.value);
    }

    return (
        <section className={Classes.postsSection}>
            <h2>My Posts</h2>
            <div className={Classes.newPost}>
                <textarea
                    ref={newPostArea}
                    value={newPostContent}
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
