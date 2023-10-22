require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());


const {authRouter} = require('./routes/authRoute');
app.use('/',authRouter);



module.exports = app;