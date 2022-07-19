import React from "react";
import styles from "./Message.module.css";

const Message = () => (
    <div className={styles.message_container}>
        <p className={styles.message_text}>Tap the card to increment the count</p>
    </div>
)

export default Message;