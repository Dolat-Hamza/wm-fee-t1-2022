import React from "react";
import styles from './NavBar.module.css';
import {SearchOutlined} from "@ant-design/icons";
import MenuButton from "../MenuButton/MenuButton";


const NavBar = ({sidebarHandler}) => {

    return (
        <div className={styles.main_container}>
            <div className={styles.navbar_container}>
                <MenuButton className={styles.menu_icon} click={sidebarHandler}/>
            </div>
            <div className={styles.navbar_item_container}>
                <div className={styles.navbar_item_container_1}>
                    <div className={styles.navbar_item}>Home</div>
                    <div className={styles.navbar_item}>About</div>
                    <div className={styles.navbar_item}>Contact</div>


                </div>
                <div className={styles.divider}></div>
                <div className={styles.searchBar}>
                    <input type={"text"} placeholder={"Search"} className={styles.navbar_search}/><SearchOutlined
                    className={styles.icon}/>
                </div>
            </div>
        </div>

    )
}
export default NavBar;


