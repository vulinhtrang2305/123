const express = require("express");
const router = express.Router();
const spotController = require("../../controllers/spots/spots.controller");

router.get("/spots", spotController.getAllSpot)

module.exports = router;
