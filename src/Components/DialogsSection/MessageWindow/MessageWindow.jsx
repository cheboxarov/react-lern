import React from "react";
import Classes from "./MessageWindow.module.css";

const MessageWindow = ({ dialog }) => {
    return (
        <div className={Classes.messageWindow}>
            <h2>{dialog.name}</h2>
            <div className={Classes.messages}>
                {dialog.messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${Classes.message} ${
                            message.sender === "Me" ? Classes.myMessage : Classes.theirMessage
                        }`}
                    >
                        <p>{message.content}</p>
                        <span className={Classes.time}>{message.time}</span>
                    </div>
                ))}
            </div>
            <textarea></textarea>
            <button>Отправить сообщение</button>
        </div>
    );
};

export default MessageWindow;
