const mongoose = require('mongoose');
const PointSchema = require('../utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    github_username:{
        type:String,
        required:true,
    },
    bio:{
        type:String
        
    },
    avatar_url:{
        type:String
     
    },
    techs:[String],
    location:{
        type:PointSchema,
        index:'2dsphere'
    }


},{timestamps:true})

module.exports = mongoose.model('Dev', DevSchema);