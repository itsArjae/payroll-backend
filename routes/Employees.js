const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const {Employees} = require('../models');


router.post('/create',async(req,res,next)=>{
  const data = req.body;

 await Employees.create(data);
  res.json(data);
})

router.get('/fetch',async(req,res,next)=>{
  const data = await Employees.findAll();

  res.json(data);
})


module.exports = router;