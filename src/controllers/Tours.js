const path = require('path');
const { TourServices } = require("../services")

const searchForTours = async (req, res) => {
    const options = {
        title : req.body.title,
        type: req.body.type,
        cityId: req.body.cityId
    }

    Object.keys(options).forEach(key => {
        if(!options[key]){
            delete options[key]
        }
    })
    
    try {
        let tours = await TourServices.searchTours(options);
        res.status(200).json(tours);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createTour = async (req, res) => {
    try {
        await TourServices.create({...req.value , cityId: parseInt(req.body.cityId)}, req.file.filename);
        res.status(200).json({meassage: "Tour created successfully!"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getTour = (req, res) => {}

const updateTour = (req, res) => {}

const deleteTour = (req, res) => {}

const addTourReview = (req, res) => {}

const markTourAsVisited = (req, res) => {}

const markTourAsFavorite = (req, res) => {}

const getToursCount = (req, res) => {}

const getRecommendedTours = async (req, res) => {
    try {
        let tours = await TourServices.getRecommended();
        res.status(200).json(tours);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getTourImage = async (req, res) => {
    try {
        let tour = await TourServices.getImage(parseInt(req.params.tourId));
        res.status(200).sendFile( path.join(path.dirname(path.dirname(__dirname)), 'public', 'uploads', 'images', 'tours', tour.image) );
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    searchForTours,
    createTour,
    getTour,
    updateTour,
    deleteTour,
    addTourReview,
    markTourAsVisited,
    markTourAsFavorite,
    getToursCount,
    getRecommendedTours,
    getTourImage
}