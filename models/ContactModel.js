const mongoose = require('mongoose')
const ContactSchema = new mongoose.Schema({
    name:{ 
        type: String,
         required: true
     },
    email: { 
        type: String,  
        required: true
     },
    phone: {
         type: String,
         required: true
     },
    message:{
        type:String, 
        required : true
    }
})

const contact = new mongoose.model("contact", ContactSchema)

module.exports = contact;