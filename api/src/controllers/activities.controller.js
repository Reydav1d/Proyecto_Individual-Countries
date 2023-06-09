const { Country, Activity } = require("../db");

const getActivities = async (req, res) => {
    try {
        const allActivities = await Activity.findAll();
        if (!allActivities.length) res.status(200).send("Todavia no hay actividades");
        else res.status(200).json(allActivities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const postActivities = async (req, res) => {
    const { id, name, difficulty, duration, season, countries } = req.body;

    if (!difficulty)
    res.status(400).send("Debes agregar una dificultad")

    if (!duration)
    res.status(400).send("Debes agregar una duracion")

    if (!season)
    res.status(400).send("Debes agregar una temporada")

    if (!countries)
    res.status(400).send("Debes agregar un pais")


    try {
        const activity = await Activity.create({
            id,
            name,
            difficulty,
            duration,
            season,
        });

        const activitiesToAdd = await Country.findAll({
            where: { name: countries },
        });
        await activity.addCountry(activitiesToAdd);

        res.status(200).send("Posteo exitoso");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getActivities,
    postActivities,
};