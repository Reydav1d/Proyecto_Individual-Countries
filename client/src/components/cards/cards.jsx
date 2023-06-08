import styles from "./styles/cards.module.css";
import earth from "./styles/earth.gif";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { continentFilter, activityFilter, orderByName, orderByPopulation, getCountryByName, } from "../../redux/actions/actions";
import Card from "../card/card";
import SearchBar from "../searchBar/searchBar";
import Paginate from "../pagination/pagination";

const Cards = () => {
    const countriesGlobal = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);
    const filterCountries = useSelector((state) => state.filteredCountries);
    const [countries, setCountries] = useState([]);
    const { numPage } = useSelector((state) => state);

    let init = (numPage - 1) * 10;
    let till = numPage * 10;
    let totalPages = Math.floor(countries.length / 10);
    let pageCountries = countries.slice(init, till);

    useEffect(() => {
        setCountries(countriesGlobal);
    }, [countriesGlobal]);

    useEffect(() => {
        setCountries(filterCountries);
    }, [filterCountries]);

    const dispatch = useDispatch();

    const applyFilters = () => {
        let filteredCountries = [...countriesGlobal];

        if (filterCountries.length > 0) {
            filteredCountries = [...filterCountries];
        }

        setCountries(filteredCountries);
    };

    const filterByContinent = (e) => {
        dispatch(continentFilter(e.target.value));
        applyFilters();
        e.target.value = "";
    };

    const orderName = (e) => {
        dispatch(orderByName(e.target.value));
        applyFilters();
        e.target.value = "";
    };

    const orderPopulation = (e) => {
        dispatch(orderByPopulation(e.target.value));
        applyFilters();
        e.target.value = "";
    };

    const filterByActivity = (e) => {
        dispatch(activityFilter(e.target.value));
        applyFilters();
        e.target.value = "";
    };

    let newActivities;
    if (Array.isArray(activities)) {
        newActivities = activities.filter(
            (obj, index, arr) => index === arr.findIndex((t) => t.name === obj.name)
        );
    }

    const searchCountry = (name) => {
        dispatch(getCountryByName(name));
        applyFilters();
    };

    return (
        <>
            <div>
                <div className={styles.filtersContainer}>
                    <div className={styles.searchBar}>
                        <SearchBar searchCountry={searchCountry} />
                    </div>
                    <div className={styles.filters}>
                        <select onChange={filterByContinent}>
                            <option value="" hidden>Continent</option>
                            <option value="All">All</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                    <div className={styles.filters}>
                        <select className={styles.selects} onChange={orderName}>
                            <option value="" hidden>Order</option>
                            <option value="Ascendente">A - Z</option>
                            <option value="Descendente">Z - A</option>
                        </select>
                    </div>
                    <div className={styles.filters}>
                        <select className={styles.selects} onChange={orderPopulation}>
                            <option value="" hidden>Population</option>
                            <option value="Ascendente">More population</option>
                            <option value="Descendente">Less population</option>
                        </select>
                    </div>
                    <div className={styles.filters}>
                        <select className={styles.selects}name="activity"onChange={filterByActivity}>
                            <option value="" hidden>Activity</option>
                            <option value="All">All</option>
                            {Array.isArray(newActivities) ? (
                                newActivities.map((activity) => {
                                    return (
                                        <option key={activity.id} value={activity.name}>{activity.name}</option>
                                    );
                                })
                            ) : (
                                <option value="" disabled>Not activites</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    {!pageCountries.length ? (
                        <img className={styles.loading} src={earth} alt="loading-img" />
                    ) : (
                        pageCountries.map((country) => {
                            return (
                                <Card
                                    key={country.id}
                                    id={country.id}
                                    name={country.name}
                                    image={country.image}
                                    continents={country.continents}
                                />
                            );
                        })
                    )}
                </div>
                <Paginate totalPages={totalPages} />
            </div>
        </>
    );
};
export default Cards;