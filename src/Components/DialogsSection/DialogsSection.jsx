import React from "react";
import Classes from "./DialogSection.module.css";
import { useParams } from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import MessageWindow from "./MessageWindow/MessageWindow";

const DialogSection = () => {
    const { id } = useParams();  // Получаем ID из параметров маршрута

    const dialogsData = [
        { id: 1, name: "John Doe", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hey, how are you?", time: "2 hours ago" }, { sender: "Me", content: "I'msdfgsdfgsdfganks!", time: "1 hour ago" }] },
        { id: 2, name: "иван бебрин", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hey, how are you?", time: "2 hours ago" }, { sender: "Me", content: "I'mfgsdfgds", time: "1 hour ago" }] },
        { id: 3, name: "Николай Наумов", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hey, фывафываyou?", time: "2 hours ago" }, { sender: "Me", content: "I'mфываfgsdfg", time: "1 hour ago" }] },
        { id: 4, name: "Неважно", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hапывапывапывапyou?", time: "2 hours ago" }, { sender: "Me", content: "I'sdапапппппппппппsdfg", time: "1 hour ago" }] },
        { id: 5, name: "Попы", avatar: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg", messages: [{ sender: "John Doe", content: "Hasdfasdfou?", time: "2 hours ago" }, { sender: "Me", content: "I'm gasdfasdfnks!", time: "1 hour ago" }] },
        // Добавьте больше диалогов
    ];

    const currentDialog = dialogsData.find(dialog => dialog.id === parseInt(id)) || dialogsData[0]; // Поиск диалога

    return (
        <section className={Classes.dialogSection}>
            <DialogList dialogs={dialogsData} />
            <MessageWindow dialog={currentDialog} />  {/* Передаем текущий диалог */}
        </section>
    );
};

export default DialogSection;
