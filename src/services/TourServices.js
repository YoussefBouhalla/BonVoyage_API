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

module.exports = {
    searchTours,
}