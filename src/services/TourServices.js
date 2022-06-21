const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const searchTours = async (options) => {
    return await prisma.tours.findMany({
        where: options ? {
            AND: {
                title: options.title ? options.title : {},
                type : options.type ? options.type : {},
                cityId: options.cityId ? options.cityId : {}
            }
        } : {}
    })
}

const getImage = async (id) => {
    return await prisma.tours.findUnique({
        where: {
            tourId: id
        },
        select: {
            image: true
        }
    });
}
module.exports = {
    searchTours,
    getImage
}