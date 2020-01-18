const Dev = require('../models/Dev');
const axios = require('axios');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports={

  async store(req,res){
        const {github_username, techs, latitude, longitude} = req.body;
            const techsArray = parseStringAsArray(techs);
            const location = {
                type:'Point',
                coordinates: [longitude, latitude]
            }

        let dev = await Dev.findOne({github_username});
        
            if(dev===null){
                const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
                    const {name ,login, avatar_url, bio} = apiResponse.data;

                dev = await Dev.create({
                    name: name || login,
                    github_username,
                    avatar_url,
                    bio,
                    techs: techsArray,
                    location
                })

            }

        
       return res.json(dev);

    },

  async index(req,res){
        const devs = await Dev.find().sort('-createdAt');
        return res.json(devs);
    },

  async destroyAll(req,res){
        await Dev.deleteMany();
        return res.json({destroy:true});
    }

}