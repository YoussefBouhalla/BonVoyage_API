const express = require("express");
const router = express.Router();

const {UsersController} = require("../controllers");

router
    .route("/login")
    .post(UsersController.handleLogin);

router
    .route("/signup")
    .post(UsersController.handleSignUp);

router
    .route("/logout")
    .post(UsersController.handleLogOut);

router
    .route("/validate/:token")
    .get(UsersController.validateEmail);

module.exports = router;