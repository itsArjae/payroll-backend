const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
app.use(express.json())
app.use(cors())
require('dotenv').config();


const adminRouter = require('./routes/Admin');
app.use('/admin',adminRouter);
const employeesRouter = require('./routes/Employees');
app.use('/employees',employeesRouter);

db.sequelize.sync().then(()=>{
  app.listen(process.env.PORT || 3001 , ()=>{
    console.log("Welcome to payroll API", 3001);
  })
})