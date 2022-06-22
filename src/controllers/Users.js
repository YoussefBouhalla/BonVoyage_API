require('dotenv').config()
const {UserServices} = require('../services');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const handleLogin = async (req, res) => {
    if(!req.body.email) throw res.status(400).json({error: "enter an email"});

    try {
        const user = await (await UserServices.getSingle({email: req.body.email}));
    
        if(!user) {
            res.status(200).json({error: {email: "email doesn't exist", password: ""}})
        }else {
            if (!req.body.password) {
                res.status(200).json({error: { password: "password is incorrect", email: ""}});
            }else {
                bcrypt.compare(req.body.password,user.password).then(result => {
                    if (!result) {
                        res.status(200).json({error: { password: "password is incorrect"}});
                    }else {
                        const accessToken = jwt.sign({id: user.userId, role: user.status, firstname: user.firstname, lastname: user.lastname} , process.env.ACCESS_TOKEN_SECRET);
                        res.status(200).json({accessToken, error: {email: "", password: ""} });
                    }
                })
            }
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const handleSignUp = async (req, res) => {
    try {
        await UserServices.create(req.value);
        res.status(200).json({meassage: "User created successfully!"});
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message});
    }
}

const handleLogOut = (req, res) => {}

const validateEmail = (req, res) => {}

const getUsers = (req, res) => {}

const getUserInfos = async (req, res) => {
    try {
        await UserServices.getSingle({id: parseInt(req.params.userId)});
        res.status(200).json({meassage: "User created successfully!"});
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message});
    }
}

const banUser = (req, res) => {}

const getUsersCount = (req, res) => {}

const searchForSingleUser = (req, res) => {}

const getOfflineUsersCount = (req, res) => {}

const goPremium = (req, res) => {}

const getOnlineUsersCount = (req, res) => {}

const getPremiumUsersCount = (req, res) => {}

const getUserImage = async (req, res) => {
    try {
        let user = await UserServices.getImage(parseInt(req.params.userId));
        res.status(200).sendFile( path.join(path.dirname(path.dirname(__dirname)), 'public', 'uploads', 'images', 'userimages', user.image) );
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getUserCover = async (req, res) => {
    try {
        let user = await UserServices.getCover(parseInt(req.params.userId));
        res.status(200).sendFile( path.join(path.dirname(path.dirname(__dirname)), 'public', 'uploads', 'images', 'usercovers', user.cover) );
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateUser = (req, res) => {}

module.exports = {
    handleLogin,
    handleSignUp,
    handleLogOut,
    validateEmail,
    getUsers,
    getUserInfos,
    banUser,
    getUsersCount,
    searchForSingleUser,
    getOfflineUsersCount,
    goPremium,
    getOnlineUsersCount,
    getPremiumUsersCount,
    getUserImage,
    getUserCover,
    updateUser
}