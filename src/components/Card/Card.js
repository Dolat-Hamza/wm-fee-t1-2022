import React, {useState} from "react";
import styles from "./Card.module.css";

const Card = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.main_container}>
            <div className={styles.SubContainers} onClick={() => setCount(count + 1)}>
                <div className={styles.TextContainer}>
                    <p className={styles.TopSection}>
                        The Challenge is to write clean concise CSS.
                    </p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.countSection}>
                    <p className={styles.textt}>{count}</p></div>
                <div className={styles.dotSection}>
                    <div className={styles.dot_place}></div>
                </div>
            </div>
        </div>
    );
};

export default Card;