import React from "react";
import Classes from "./DialogSection.module.css";
import { useParams } from "react-router-dom";
import DialogList from "./DialogList/DialogList";
import MessageWindow from "./MessageWindow/MessageWindow";

const DialogSection = ({messages}) => {
    const { id } = useParams();  // Получаем ID из параметров маршрута

    const currentDialog = messages.dialogs.find(dialog => dialog.id === parseInt(id)) || messages.dialogs[0]; // Поиск диалога

    return (
        <section className={Classes.dialogSection}>
            <DialogList dialogs={messages.dialogs} />
            <MessageWindow dialog={currentDialog} />  {/* Передаем текущий диалог */}
        </section>
    );
};

export default DialogSection;
