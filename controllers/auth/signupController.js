const Users = require('../../models/userModel');
const { setCookie } = require('./setCatch');

function getSignUp(req, res) {
    res.render('signup');
}

async function postSignUp(req, res) {
    try {
        const { name, email, password, phone, username } = req.body;
        const checkForUSer = await Users.findOne({ email });
        const checkForUserName = await Users.findOne({ username });
        if (checkForUserName) {
            res.render('signup', {
                message: "User name is taken."
            });
        }
        else if (checkForUSer) {
            res.render('signup', {
                message: "A user with this Email is Already Exists"
            });
        }
        else {

            const newUser = Users({
                name,
                email,
                password,
                phone,
                username
            })

            await newUser.save();
            const token = setCookie({
                name: name,
                username: username,
            });

            res.cookie(uid, token);

            res.redirect('/')

        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getSignUp,
    postSignUp
}