const express = require('express');
const app = express();
const  hbs = require('hbs')
const path = require('path')
require('./db/dbconnection')
const contact = require('./models/ContactModel')
const call = require('./models/callModel')
const userRoutes = require('./Routes/userRoutes')



// set up templete engine 

app.set("view engine", 'hbs')
app.set(path.join(__dirname , './views'))
hbs.registerPartials('views/partials')



// Routes
app.use('/',userRoutes)
app.use('/static',express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))





app.listen(process.env.PORT || 3000,() =>{
    console.log("server is listing on port 3000");
})