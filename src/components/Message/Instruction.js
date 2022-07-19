import React from "react";
import styles from "./Instruction.module.css";

const Instruction = () => (
    <div className={styles.instruction_container}>
        <p className={styles.instruction_text}>Tap the card to increment the count</p>
    </div>
)

export default Instruction;