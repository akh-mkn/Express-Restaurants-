const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

// PART 1!
//app.get("/restaurants", async (req,res) =>{
  //  const restaurants = await Restaurant.findAll()
    //res.json(restaurants)
//})


//PART 2!
app.get('/restaurants/:id', async (req, res) => {
    const id = req.params.id;
    const restaurant = await Restaurant.findByPk(id);
    res.json(restaurant);
});


module.exports = app;