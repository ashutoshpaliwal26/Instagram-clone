const express = require('express')
const router = express.Router();
const {getSignUp, postSignUp} = require('../../controllers/auth/signupController');

router.get('/',getSignUp);

router.post('/',postSignUp);

module.exports = router;