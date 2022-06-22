const Joi = require('joi');

const UserSchema = Joi.object({
    firstname: Joi.string()
        .min(3)
        .max(30)
        .required(),

    lastname: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    repeat_password: Joi.ref('password'),
})
.with('password', 'repeat_password');

const TourSchema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(70)
        .required(),

    description: Joi.string()
        .min(5)
        .max(400)
        .required(),

    season: Joi.string()
        .valid('summer', 'winter', 'autumn', 'spring')
        .required(),

    type: Joi.string()
        .valid('historical', 'beach', 'natural')
        .required(),
})

module.exports = {
    UserSchema,
    TourSchema
}