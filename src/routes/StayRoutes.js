const express = require("express");
const router = express.Router();

const {StaysController} = require("../controllers");

router
    .route("/")
    .get(StaysController.searchForStays)
    .post(StaysController.createStay)

routers
    .route("/:stayId")
    .put(StaysController.updateStay)
    .delete(StaysController.deleteStay)

router
    .route("/user/:userId")
    .get(StaysController.getUserStays)

router
    .route("/:stayId")
    .get(StaysController.getStay)

router
    .route("/count")
    .get(StaysController.getStaysCount)

router
    .route("/user/count")
    .get(StaysController.getConnectedUserStaysCount)

router
    .route("/reserved/count")
    .get(StaysController.getConnectedUserReservedStaysCount)

router
    .route("/recommended")
    .get(StaysController.getRecommendedStays)

router
    .route("/owned")
    .get(StaysController.getConnectedUserStays)

router
    .route("/:stayId/review")
    .post(StaysController.addStayReview)

router
    .route("/:stayId/reserve")
    .post(StaysController.reserveStay)

router
    .route("/:stayId/reservations")
    .get(StaysController.getStayPendingReservations)

module.exports = router;