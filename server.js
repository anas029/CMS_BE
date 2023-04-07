// Dependencies
const express = require('express');
require('dotenv').config()
require('./configs/db');

//initialize firebase admin
require('./configs/firebase');

// PORT Configuration
const port = process.env.PORT;

// Initailze Express
const app = express();

//initialize cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//initializing body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Look for all ejs files
app.set('view engine', 'ejs');

// Import Routes
const authRoute = require('./routes/auth');

// Mount Routes
app.use('/auth', authRoute);

//set up user auth middleware
const auth = require('./middleware/auth');
app.use(auth.setUser);

app.all('*', function (req, res) {
    res.sendStatus(404);
});

//listen to port
app.listen(port, () => {
    console.log(`Hi, the server should be connected on port ${port}`);
});
