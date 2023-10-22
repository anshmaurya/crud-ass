const express = require('express');
const {home,register,login,} = require('../controlles/authController');

const authRouter = express.Router();


authRouter.get('/',home)
authRouter.post('/register',register)
authRouter.post('/login',login)


module.exports = {authRouter};