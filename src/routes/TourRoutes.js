const express = require("express");
const router = express.Router();

const {ToursController} = require("../controllers");

router
    .route("/")
    .get(ToursController.searchForTours)
    .post(ToursController.createTour)
    
router
    .route("/:tourId")
    .get(ToursController.getTour)
    .put(ToursController.updateTour)
    .delete(ToursController.deleteTour)

router
    .route("/:tourId/review")
    .post(ToursController.addTourReview)

router
    .route("/:tourId/visited")
    .post(ToursController.markTourAsVisited)

router
    .route("/:tourId/favorite")
    .post(ToursController.markTourAsFavorite)

router
    .route("/count")
    .get(ToursController.getToursCount);

router
    .route("/recommended")
    .get(ToursController.getRecommendedTours);

module.exports = router;