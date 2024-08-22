import Classes from "./Posts.module.css";
import React from "react";
import CreatePostButton from "./CreatePostButton/CreatePostButton";
import Post from "./Post/Post";

const PostsSection = () => {
    // Пример данных для постов
    const postsData = [
        {
            title: "Title 1",
            content: "MyProfile of the first post.",
            likes: 10,
            views: 100,
            time: "2 hours ago",
            avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
        },
        {
            title: "Title 2",
            content: "MyProfile of the second post.",
            likes: 5,
            views: 50,
            time: "1 day ago",
            avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
        },
        {
            title: "Title 3",
            content: "MyProfile of the third post.",
            likes: 3,
            views: 25,
            time: "3 days ago",
            avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
        },
        {
            title: "Title 4",
            content: "MyProfile of the fourth post.",
            likes: 8,
            views: 60,
            time: "5 days ago",
            avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
        },
        {
            title: "Title 5",
            content: "MyProfile of the fifth post.",
            likes: 12,
            views: 80,
            time: "1 week ago",
            avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg" // Замените на URL вашей аватарки
        },
    ];

    return (
        <section className={Classes.postsSection}>
            <h2>My Posts</h2>
            <div className={Classes.newPost}>
                <CreatePostButton />
            </div>
            <div className={Classes.postsList}>
                {postsData.map((post, index) => (
                    <Post
                        key={index} // Добавление уникального ключа для каждого поста
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
};

export default PostsSection;
