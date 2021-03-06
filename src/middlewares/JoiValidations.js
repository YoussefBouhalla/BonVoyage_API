const {JoiUtils} = require('../utils')


const validateUser = async (req, res, next) => {
    
    const validation = await JoiUtils.UserSchema.validate(
        {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        repeat_password: req.body.repeatpassword, 
        email: req.body.email, 
        })

    if (validation.error) throw res.status(401).json({path: validation.error.details[0].path[0] , details: validation.error.details[0].message})

    await delete validation.value.repeat_password;
    req.value = await validation.value
    next()
}

const validateTour = async (req, res, next) => {
    
    const validation = await JoiUtils.TourSchema.validate(
        {
        title: req.body.title,
        description: req.body.description,
        season: req.body.season,
        type: req.body.type
        })

    if (validation.error) throw res.status(401).json({path: validation.error.details[0].path[0] , details: validation.error.details[0].message})

    req.value = await validation.value
    next()
}

module.exports = {
    validateUser,
    validateTour
}
