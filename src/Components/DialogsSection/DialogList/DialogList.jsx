import React from "react";
import Classes from "./DialogList.module.css";
import {NavLink} from "react-router-dom";

const DialogList = ({ dialogs }) => {
    return (
        <div className={Classes.dialogList}>
            {dialogs.map((dialog) => (
                <NavLink to={`/messages/${dialog.id}`} className={Classes.dialog}>
                    <img src={dialog.avatar} alt="Avatar" className={Classes.avatar} />
                    <div className={Classes.dialogInfo}>
                        <h3>{dialog.name}</h3>
                        <p>{dialog.messages[dialog.messages.length-1].content}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default DialogList;
