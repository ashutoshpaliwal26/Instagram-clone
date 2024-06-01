const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String, 
    password : String,
    phone_no : Number, 
    age : Number,
    username : String,
})

const Users = mongoose.model('users', userSchema);
module.exports = Users;