const axios = require('axios');

const { Country } = require('../db');

const getApi = async () => {
    let countries = await axios.get("https://restcountries.com/v3.1/all");
    await countries.data.map((country) => {
    let pais = {
        id: country.cca3,
        name: country.name.common,
        image: country.flags.png,
        continent: country.region,
        capital: country.capital ? country.capital[0] : "no tiene capital",
        subregion: country.subregion ? country.subregion : "no tiene subregion",
        area: country.area,
        population: country.population,
    };
    Country.findOrCreate({ where: pais });
    });
};

module.exports = getApi;