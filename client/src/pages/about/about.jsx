import React from 'react'
import styles from './styles/about.module.css'
import developer from './styles/developer.png'
import linkdin from './styles/640px-LinkedIn_logo_initials.png'
import whatsapp from './styles/whatsapp-business.svg'
// import pern from './styles/pern.png'

export default function About() {
    return (
        <div className={styles.fondoAbout}>
            <div className={styles.aboutContainer}>
                <img src={developer} alt='Developer' />
                <div className={styles.text}>
                    <h1>Proyecto Individual (PI) Henry Countries</h1>
                    <h2>Este es un proyecto individual para el bootcamp <a href='https://www.soyhenry.com'>Soy Henry</a></h2>
                    <p>
                        Fue realizado con el Stack PERN (Postgres, Express, React, Node).
                        <br />
                        Para poner en práctica lo aprendido durante el bootcamp.
                        <br />
                        Espero que sea de tu agrado.
                    </p>
                    <div className={styles.contact}>
                        <h3>Puedes contactarme por aquí:</h3>
                        <a href='https://www.linkedin.com/in/reydavid1/'>
                            <img src={linkdin} alt='linkdin-logo' />
                        </a>
                        <a href='https://wa.me/message/URKDRXJEHRH3C1'>
                            <img src={whatsapp} alt='whatsappB-logo' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
