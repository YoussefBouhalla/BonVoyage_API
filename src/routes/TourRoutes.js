const express = require("express");
const router = express.Router();

const {ToursController} = require("../controllers");

const {JoiValidations, Multer} = require('../middlewares')


router
    .route("/")
    .post(Multer.tourImageUpload.single('image'), JoiValidations.validateTour, ToursController.createTour)

router
    .route("/search")
    .post(ToursController.searchForTours)

router
    .route("/recommended")
    .get(ToursController.getRecommendedTours);

router
    .route("/count")
    .get(ToursController.getToursCount);

router
    .route("/:tourId")
    .get(ToursController.getTour)
    .put(ToursController.updateTour)
    .delete(ToursController.deleteTour)
    
router
    .route("/:tourId/image")
    .get(ToursController.getTourImage)


router
    .route("/:tourId/review")
    .post(ToursController.addTourReview)

router
    .route("/:tourId/visited")
    .post(ToursController.markTourAsVisited)

router
    .route("/:tourId/favorite")
    .post(ToursController.markTourAsFavorite)



module.exports = router;