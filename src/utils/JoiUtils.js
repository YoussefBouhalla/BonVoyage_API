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

module.exports = {
    UserSchema
}