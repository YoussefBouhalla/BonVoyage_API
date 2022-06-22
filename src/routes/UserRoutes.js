const express = require("express");
const router = express.Router();

const {UsersController} = require("../controllers");

router
    .route("/")
    .get(UsersController.getUsers);
    
router
    .route("/count")
    .get(UsersController.getUsersCount);

router
    .route("/search")
    .get(UsersController.searchForSingleUser);

router
    .route("/offline/count")
    .get(UsersController.getOfflineUsersCount);

router
    .route("/premium")
    .put(UsersController.goPremium);

router
    .route("/online/count")
    .get(UsersController.getOnlineUsersCount);

router
    .route("/premium/count")
    .get(UsersController.getPremiumUsersCount);

router
    .route("/:userId")
    .get(UsersController.getUserInfos);

router
    .route("/:userId/ban")
    .put(UsersController.banUser);


router
    .route("/:userId/profile/image")
    .get(UsersController.getUserImage);

router
    .route("/:userId/profile/cover")
    .get(UsersController.getUserCover);

router
    .route("/:userId/edit")
    .put(UsersController.updateUser);

module.exports = router;