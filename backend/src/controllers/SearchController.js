const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');


module.exports = {
    async index(request, response){
       
        const { latitude, longitude, techs} = request.query;
        //busca dos devs num raio 
        //filtrar por tecnologia

        const techsArray = parseStringAsArray(techs);

       
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000000,
                },
            },
        });


        return response.json({ devs})
    }
}