import React from "react";
import Classes from "./DialogSection.module.css";
import DialogList from "./DialogList/DialogList";
import MessageWindow from "./MessageWindow/MessageWindow";

const DialogSection = () => {
    // Пример данных для диалогов и сообщений
    const dialogsData = [
        {
            id: 1,
            name: "John Doe",
            lastMessage: "Hey, how are you?",
            avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg",
            messages: [
                { sender: "John Doe", content: "Hey, how are you?", time: "2 hours ago" },
                { sender: "Me", content: "I'm good, thanks!", time: "1 hour ago" },
            ],
        },
        // Добавьте больше диалогов
    ];

    return (
        <section className={Classes.dialogSection}>
            <DialogList dialogs={dialogsData} />
            <MessageWindow dialog={dialogsData[0]} />
        </section>
    );
};

export default DialogSection;
