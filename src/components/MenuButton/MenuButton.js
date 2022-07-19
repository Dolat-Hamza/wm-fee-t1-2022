import React from "react";
import styles from "./MenuButton.module.css";

const MenuButton = ({click}) => (
    <button className={styles.btn} onClick={click}>
        <div className={styles.btn_line}></div>
        <div className={styles.btn_line}></div>
        <div className={styles.btn_line}></div>
    </button>
);

export default MenuButton;