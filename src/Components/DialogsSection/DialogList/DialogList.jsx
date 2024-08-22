import React from "react";
import Classes from "./DialogList.module.css";

const DialogList = ({ dialogs }) => {
    return (
        <div className={Classes.dialogList}>
            {dialogs.map((dialog) => (
                <div key={dialog.id} className={Classes.dialog}>
                    <img src={dialog.avatar} alt="Avatar" className={Classes.avatar} />
                    <div className={Classes.dialogInfo}>
                        <h3>{dialog.name}</h3>
                        <p>{dialog.lastMessage}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DialogList;
