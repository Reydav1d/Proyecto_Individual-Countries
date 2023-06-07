const {Router} = require("express");
const activitiesRoutes = Router();
const {getActivities, postActivities} = require('../controllers/activities.controller.js');

activitiesRoutes.post("/", postActivities);
activitiesRoutes.get("/", getActivities);

module.exports = activitiesRoutes;