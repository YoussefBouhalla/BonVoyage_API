const { CityServices } = require("../services");

const getCities = async (req, res) => {
    try {
        let cities = await CityServices.getall();
        res.status(200).json(cities);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCity = async (req, res) => {
    const cityId = parseInt(req.params.cityId)
    try {
        let city = await CityServices.getSingle(cityId);
        res.status(200).json(city);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}

module.exports = {
    getCity,
    getCities
}