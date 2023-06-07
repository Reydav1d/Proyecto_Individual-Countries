import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/navBar.module.css'
import logo from './styles/logo.png'

export default function NavBar() {
    return (
        <div className={styles.nav}>
            <NavLink to="/"><img src={logo} alt='logo'/></NavLink>
            <div className={styles.btnsHA}>
                <NavLink to="/home"><button><ion-icon name="home-outline"></ion-icon></button></NavLink>
                <NavLink to="/about"><button><ion-icon name="help-outline"></ion-icon></button></NavLink>
                <NavLink to="/form"><button><ion-icon name="create-outline"></ion-icon></button></NavLink>
            </div>
        </div>
    )
}
