import React from "react";
import styles from './NavBar.module.css';
import {MenuOutlined, SearchOutlined} from "@ant-design/icons";


const NavBar = (props) => {
    return (
        <div className={styles.main_container}>
            <div className={styles.navbar_container}>
                <MenuOutlined className={styles.menu_icon} onClick={props.sidebar}/>
            </div>
            <div className={styles.navbar_item_container}>
                <div className={styles.navbar_item_container_1}>
                    <div className={styles.navbar_item}>Home</div>
                    <div className={styles.navbar_item}>About</div>
                    <div className={styles.navbar_item}>Contact</div>


                </div>
                <div className={styles.divider}></div>
                <div>
                    <input type={"text"} placeholder={"Search"} className={styles.navbar_search}/><SearchOutlined/>
                </div>
            </div>
        </div>

    )
}
export default NavBar;