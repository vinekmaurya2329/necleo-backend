const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
    image:{
        type:String,
       
    },
    title:{
        type:String
    },
    discription:{
        type:String
    }
},{timestamps:true})
 const projectModel = mongoose.model('projects',projectSchema)
 module.exports =projectModel;