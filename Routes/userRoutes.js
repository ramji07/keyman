const express = require('express');
const app = express();
const  hbs = require('hbs')
const path = require('path')
const contact = require('../models/ContactModel')
const call = require('../models/callModel');
const { model } = require('mongoose');



// set up templete engine 

app.set("view engine", 'hbs')
app.set(path.join(__dirname , './views'))
hbs.registerPartials('views/partials')



// Routes
app.use('/static',express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',(req, res) =>{
    res.render('index',{tittle:'Home - Advisor'})
})

app.post('/',  async (req,res) =>{
     try {
         const callInfo = new call({
            name : req.body.name,
            email: req.body.email,
            phone : req.body.phone,
            select :req.body.select
         });
         const call_Request = await callInfo.save();
         res.render('SuccessMessage');
     } catch (error) {
         res.send('it is an error');
     }
})
app.get('/about',(req,res) =>{
    res.render("About",{tittle:"About Us - Advisor"})
})

app.get('/services' ,(req,res) =>{
    res.render('services',{tittle:"Services -Advisor"})
})
app.get('/contact',(req,res) =>{
    res.render('contact', {tittle:"Contact Us - Advisor"})
})


app.post('/contact', async (req,res) =>{
    try {
         const data = new contact({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            message: req.body.message

         })
         const user = await data.save();
         res.render('SuccessMessage')

    } catch (error) {
        res.send(error);
    }
})


app.get('/japan-desk',(req,res) =>{
    res.render('japanDesk', {tittle:"Japan Business Desk - Advisor"})
})
app.get('/north-america-desk',(req,res) =>{
    res.render('NorthAmericaDesk', {tittle:"North America Business Desk - Advisor"})
})
app.get('/european-desk',(req,res) =>{
    res.render('EuropeanDesk', {tittle:"European Business Desk - Advisor"})
})
app.get('/Singapore-desk',(req,res) =>{
    res.render('singaporeDesk', {tittle:"Singapore Business Desk - Advisor"})
})
app.get('/Nri-Desk',(req,res) =>{
    res.render('NriDesk',{tittle:"NRI Business Desk - Advisor"})
})
app.get('/admin', (req,res) =>{
    res.render('admin/login');
})






module. exports = app


// app.get('*',(req,res) =>{
//     res.redirect('/')
// })



















