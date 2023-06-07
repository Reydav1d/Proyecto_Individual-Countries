const {Router} = require("express");
const {
    getAllCountries,
    getCountriesById,
    // searchCountriesByName
} = require('../controllers/countries.controller.js')

const countriesRoutes = Router();

countriesRoutes.get("/:id", getCountriesById);


countriesRoutes.get("/", getAllCountries)
// countriesRoutes.get("/name", searchCountriesByName)

module.exports = countriesRoutes;