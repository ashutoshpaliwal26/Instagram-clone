const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function setCookie(user){
    return jwt.sign(user,process.env.SECRET);
}

function getCookie(token){
    if(!token){
        return null
    }
    return jwt.verify(token, process.env.SECRET);
}


module.exports = {
    setCookie,
    getCookie
}
