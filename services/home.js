const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { getCookie } = require('../controllers/auth/setCatch');
const router = express.Router();

router.get('/',(req,res)=>{
    const checkToken = req.cookies;
    const checkUser = getCookie(checkToken.uid);
    if(checkUser){
        res.render('index');
    }else{
        res.redirect('/login');
    }
})



module.exports = router;