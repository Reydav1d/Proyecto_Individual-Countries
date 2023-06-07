import styles from "./styles/searchbar.module.css";

const SearchBar = ({ searchCountry }) => {
    const handleChange = (e) => {
        searchCountry(e.target.value);
    };

    return (
        <div className={styles.wrap}>
            <div className={styles.bar}>
                <input className={styles.search} onChange={handleChange} type="search" placeholder="Search a country" />
                <button className={styles.add}>
                    <ion-icon name="search-outline"></ion-icon>
                </button>
            </div>
        </div>
    );
};
export default SearchBar;