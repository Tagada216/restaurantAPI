const sequelize = require("./models/index.js")
const express = require('express');

const app = express();
const port = 3030;

// Dishes 
app.get('/dishes',(req, res)=>{
    sequelize.models.Dish.findAll()
        .then(dishes =>{
            res.status(200).json(dishes);
        })
});

app.get('/dishes/:id',(req, res)=>{
    const id = req.params.id;
    sequelize.models.Dish.findByPk(id)
        .then(theDish =>{
            res.status(200).json(theDish);
        })
});

app.post('/dishes', (req, res )=> {
    console.log("dish", req)
    sequelize.models.Dish.create({
        name: req.body.name,
        description : req.body.description,
        price: req.body.price
    }).then( dishes =>{
        res.status(200).json(dishes);
    })
});

//Order 
app.get('/order',(req, res)=>{
    sequelize.models.Order.findAll()
        .then(orders =>{
            res.status(200).json(orders);
        })
});

app.get('/order/:id',(req, res)=>{
    const id = req.params.id;
    sequelize.models.Order.findByPk(id)
        .then(theOrder =>{
            res.status(200).json(theOrder);
        })
});

//Customer 
app.get('/customer',(req, res)=>{
    sequelize.models.Customer.findAll()
        .then(customers =>{
            res.status(200).json(customers);
        })
});

app.get('/customer/:id',(req, res)=>{
    const id = req.params.id;
    sequelize.models.Customer.findByPk(id)
        .then(thecutomer =>{
            res.status(200).json(thecutomer);
        })
});

//Payment 
app.get('/payment',(req, res)=>{
    sequelize.models.Payment.findAll()
        .then(payments =>{
            res.status(200).json(payments);
        })
});

app.get('/payment/:id',(req, res)=>{
    const id = req.params.id;
    sequelize.models.Payment.findByPk(id)
        .then(thePayment =>{
            res.status(200).json(thePayment);
        })
});

//
sequelize.authenticate()
.then(() => {
 console.log('Database connection OK!');
  
    app.listen(port, ()=> {
        console.log(`Web server listening at http://localhost:${port}`);
    })

})
// Si c'est pas bon
.catch(err => {
 console.log('Unable to connect to the database:');
 console.log(err.message);
 process.exit();
});