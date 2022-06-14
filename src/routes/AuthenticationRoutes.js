const express = require("express");
const router = express.Router();

const {UsersController} = require("../controllers");

const {JoiValidations , hashPassword} = require('../middlewares')

router
    .route("/login")
    .post(UsersController.handleLogin);

router
    .route("/signup")
    .post(JoiValidations.validateUser , hashPassword, UsersController.handleSignUp);

router
    .route("/logout")
    .post(UsersController.handleLogOut);

router
    .route("/validate/:token")
    .get(UsersController.validateEmail);

module.exports = router;