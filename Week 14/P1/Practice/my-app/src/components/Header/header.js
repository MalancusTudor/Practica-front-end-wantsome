import React from 'react';
import styles from "./Header.module.css";
import Links from "./Links.js";

const Header = () => {
    return (
        <section className = {styles.header}>
            <div className = {styles.left}>
                <img className = {styles.logo} src = "https://helios-apartments.com/wp-content/uploads/2019/01/airbnb-2-png-transparent-logo-1.png" alt = "logo"/>
                <input value = "Search"/>
            </div>
            
            <Links />
        </section>
    );
}

export default Header;