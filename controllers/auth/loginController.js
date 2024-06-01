const Users = require('../../models/userModel');
const { setCookie } = require('./setCatch');

function getLogIn(req, res) {
    res.render('login');
}

async function postLogIn(req, res) {
    try {
        const { username, password } = req.body;
        const checkForUSer = await Users.findOne({ username , password});
        if(!checkForUSer){
            res.render('login', {
                message : "Invalid Username"
            })
        }
        else{

            const token = setCookie({
                name : checkForUSer.name,
                username : checkForUSer.username
            })
            res.cookie('uid', token);
            
            res.redirect('/');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getLogIn,
    postLogIn
}