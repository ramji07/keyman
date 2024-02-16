const mongoose = require('mongoose');
//  require('dotenv').config()

const Connection = mongoose.connect("mongodb://127.0.0.1:27017/myDB",{
   
}).then(() =>{
    console.log("Database Connection is successfully");
}).catch((error) =>{
    console.log('database not connected');
})

module.exports = Connection;