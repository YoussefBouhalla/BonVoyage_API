const express = require("express");
const router = express.Router();

const {CitiesController} = require("../controllers");


router
    .route("/")
    .get(CitiesController.getCities);

router
    .route("/:cityId")
    .get(CitiesController.getCity);




module.exports = router;