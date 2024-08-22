import React, { useState } from "react";
import Classes from "./Post.module.css";

const Post = (props) => {
    // Состояние для количества лайков
    const [likes, setLikes] = useState(props.likes);
    const [liked, setLiked] = useState(false); // Состояние для отслеживания, лайкнуто ли

    // Обработчик события для увеличения количества лайков
    const handleLike = () => {
        setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1)); // Увеличение или уменьшение в зависимости от состояния
        setLiked((prevLiked) => !prevLiked); // Переключение состояния
    };

    return (
        <div className={Classes.post}>
            <div className={Classes.header}>
                <img src={props.avatar} alt="Avatar" className={Classes.avatar} />
                <div className={Classes.postInfo}>
                    <h3>{props.title}</h3>
                    <span className={Classes.postTime}>{props.time}</span>
                </div>
            </div>
            <p>{props.content}</p>
            <div className={Classes.views}>{props.views} Views</div>

            {/* Кнопка лайка в виде сердечка */}
            <div className={Classes.likeSection}>
                <button
                    className={`${Classes.likeButton} ${liked ? Classes.liked : ''}`}
                    onClick={handleLike}
                >
                    {liked ? '❤️' : '🤍'} {/* Сердце, меняющее цвет в зависимости от состояния */}
                </button>
                <span className={Classes.likeCount}>{likes} Likes</span>
            </div>
        </div>
    );
};

export default Post;
