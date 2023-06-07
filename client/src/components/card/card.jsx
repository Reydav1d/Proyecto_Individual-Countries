import { NavLink } from "react-router-dom";
import styles from "./styles/card.module.css";

const Card = (props) => {
    const { id, name, image } = props;
    return (
        <>
            <div className={styles.cardContain}>
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <div className={styles.img_overlay}>
                        </div>
                        <NavLink to={`/countries/${id}`}>
                            <img className={styles.cardImg} src={image} alt={`bandera de ${name}`} />
                        </NavLink>
                    </div>
                    <div className={styles.cardActions}>

                    </div>
                    <div className={styles.cardName}>
                        <NavLink className={styles.navLink} to={`/countries/${id}`}>
                            <h2>{name}</h2>
                        </NavLink>
                    </div>
                </div>
            </div >
        </>
    )
};

export default Card;