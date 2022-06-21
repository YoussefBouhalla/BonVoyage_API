const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getall = async () => {
    return await prisma.cities.findMany({
        orderBy: [
            {
                cityname: 'asc',
            }
        ],
    })
}

const getSingle = async (cityId) => {
    return await prisma.cities.findUnique({
        where: {
            cityId
        }
    })
}

module.exports = {
    getall,
    getSingle
}