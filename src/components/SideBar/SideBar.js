import React from "react";
import styles from './SideBar.module.css';
import {SearchOutlined} from "@ant-design/icons";

const SideBar = ({display}) => {

    return (
        <div className={display ? styles.sidebar_open : styles.sidebar}>
            <div className={styles.sideBar_item_container_1}>
                <div>
                    <div className={styles.sideBar_item}>Home</div>
                    <div className={styles.sideBar_item}>About</div>
                    <div className={styles.sideBar_item}>Contact</div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.searchBar}>
                    <input type={"text"} placeholder={"Search"} className={styles.sideBar_search}/><SearchOutlined
                    className={styles.icon}/>
                </div>
            </div>
        </div>
    )


}
export default SideBar;