const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectToDB = require('./config/connectToDb');
connectToDB(process.env.CONNECTION_STR);
const PORT = process.env.PORT || 3000;

const signUpRoute = require('./services/auth/signup');
const logInRoute = require('./services/auth/login');
const homeRoute = require('./services/home');



app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());


app.use('/', homeRoute);
app.use('/signup', signUpRoute);
app.use('/login', logInRoute);

app.set('view engine', 'hbs');
hbs.registerPartials('template',path.join(__dirname, 'views/template'))

app.listen(PORT, ()=>{
    console.log(`App is Running on : http://localhost:${PORT}`);
})