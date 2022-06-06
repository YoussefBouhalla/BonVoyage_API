const express = require("express");
const router = express.Router();

const {ReservationsController} = require("../controllers");

router
    .route("/")
    .get(ReservationsController.getConnectedUserReservations)

router
    .route("/:reservationId")
    .delete(ReservationsController.deleteReservation)

router
    .route("/:reservationId/accept")
    .put(ReservationsController.acceptReservation)

router
    .route("/:reservationId/refuse")
    .put(ReservationsController.refuseReservation)

router
    .route("/user/:userId")
    .get(ReservationsController.getAllUserReservations)

router
    .route("/count")
    .get(ReservationsController.getReservationsCount)

router
    .route("/user/count")
    .get(ReservationsController.getUserStaysReservationsCount)  

module.exports = router;