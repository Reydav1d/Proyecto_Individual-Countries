import React from 'react'
import notFound from './styles/notFound.jpg'
import styles from './styles/notFound.module.css'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <img src={notFound} alt='not-found' />
            <NavLink to="/home"><button>Home</button></NavLink>
        </div>
    )
}
