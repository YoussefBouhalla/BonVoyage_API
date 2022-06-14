const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const create = async (options) => {
    let user = await prisma.users.create({
        data: {
            firstname: options.firstname,
            lastname: options.lastname,
            password: options.password,
            email: options.email,
            status: 'normal'
        }
    })
    return user;
}
const getSingle = async (options) => {
    return await prisma.users.findUnique({
        where: options.email
        ? {email: options.email}
        : {userId: options.id},
    });
}

module.exports = {
    create,
    getSingle
}