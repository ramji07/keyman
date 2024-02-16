const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    is_admin: {
        type: Boolean,
        default: true
      }
})

const admin = new mongoose.model("admin",adminSchema)

module.exports= admin;