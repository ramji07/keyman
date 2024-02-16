const mongoose = require('mongoose')
const callSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    select:{
        type:String,
        require:true
    }
})

const call = new mongoose.model('call',callSchema)

module.exports = call