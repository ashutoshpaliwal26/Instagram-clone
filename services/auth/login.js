const express = require('express')
const router = express.Router();
const { getLogIn , postLogIn} = require('../../controllers/auth/loginController');

router.get('/',getLogIn);

router.post('/',postLogIn);

module.exports = router;