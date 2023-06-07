const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getAllCountries = async (req, res) => {
    const { name } = req.query;
    try {
        if (!name) {
            const allCountries = await Country.findAll({
                include: Activity,
            });
            return res.status(200).json(allCountries);
        } else {
            const country = await Country.findAll({
                where: { name: { [Op.iLike]: `%${name}%` } },
            });
            if (!country)
                return res
                    .status(404)
                    .json({ error: "No se encontró el país o no existe" });
            return res.status(200).json(country);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCountriesById = async (req, res) => {
    const { id } = req.params;
    try {
        const idCountry = id.toUpperCase();
        const country = await Country.findOne({
            where: { id: idCountry },
            include: Activity,
        });
        if (country) {
            res.json(country);
        } else {
            res.status(404).json({ message: 'País no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el país' });
    }
};

module.exports = {
    getAllCountries,
    getCountriesById,
};