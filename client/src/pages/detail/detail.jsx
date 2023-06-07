import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCountry, clearDetail } from "../../redux/actions/actions";
import styles from "./styles/detail.module.css";
import earth from "../../components/cards/styles/earth.gif";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const country = useSelector((state) => state.detailCountry);

    useEffect(() => {
        dispatch(getCountry(id));
        return () => {
            dispatch(clearDetail());
        };
    }, [dispatch, id]);

    return (
        <><>
            {!country.name ? (
                <img className={styles.loading} src={earth} alt="loading-img" />
            ) : (
                <div className={styles.detailFondo}>
                    <div className={styles.detailContainer}>
                        <div className={styles.info}>
                            <h1>{country?.name}</h1>
                            <img src={country?.image} alt="flag" />
                            <h3>ID: {country?.id}</h3>
                            <h3>Continent: {country?.continent}</h3>
                            <h3>Capital: {country?.capital}</h3>
                            {country.subregion && <h3>Subregion: {country.subregion}</h3>}
                            {country.area && <h3>Area: {country.area} Km²</h3>}
                            <h3>Population: {country?.population}</h3>
                        </div>

                        <div className={styles.actContainer}>
                            <h2>Activities</h2>
                            <div className={styles.cardsContainer}>
                                {country.activities?.length ? (
                                    country.activities.map((activity) => {
                                        return (
                                            <div className={styles.activities} key={activity.id}>
                                                <h3>{activity.name.toUpperCase()}</h3>
                                                <p>Difficulty: {activity.difficulty} (1-5)</p>
                                                <p>Duration: {activity.duration} hours</p>
                                                <p>Season: {activity.season}</p>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className={styles.createBtn}>
                                        <h3>Not activities yet</h3>
                                        <NavLink className={styles.nav} to="/form">
                                            <button>Create one</button>
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </></>
    );
};

export default Detail;