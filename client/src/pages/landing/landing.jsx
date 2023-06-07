import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/landing.module.css'
import ticket from './styles/ticket.png'
import flags from './styles/Banderas.gif'
const Landing = () => {
    return (
        <div className={styles.fondo}>
            <div className={styles.gifContainer}>
                <img src={flags} alt='banderas' />
            </div>

            <div className={styles.plane}>
                <h3 className={styles.title}>¡Toma un ticket y viaja!</h3>
                <NavLink to="/home">
                    <img src={ticket} alt='plane' />
                </NavLink>
            </div>
        </div>
    )
}

export default Landing;