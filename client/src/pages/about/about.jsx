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
                    <h1>Individual Project (PI) Henry Countries</h1>
                    <h2>This is an individual project for the <a href='https://www.soyhenry.com'>Soy Henry bootcamp.</a></h2>
                    <p>
                        Welcome to my individual project, Henry Countries!
                        This exciting project is part of my experience in the Soy Henry bootcamp.
                        As part of the program, I had the opportunity to apply my skills and knowledge
                        in application development using the PERN stack (Postgres, Express, React, Node).
                        <br />
                        I hope you enjoy browsing Henry Countries as much as I enjoyed creating it. 
                        If you have any questions, comments, or simply wish to get in touch, feel free to do so. 
                        I am available through the following communication channels:
                    </p>
                    <div className={styles.contact}>
                        <h3>Contact:</h3>
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
