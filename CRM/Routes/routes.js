const express = require('express');
router = express.Router()
const commoncontroller = require('../Controllers/controller')

//Handling user login
router.post("/login", commoncontroller.login);

//Handling user logout
router.get("/logout", commoncontroller.logout);

router.get('/isLoggedIn', commoncontroller.isLoggedIn);

router.post('/register', commoncontroller.register)
 
