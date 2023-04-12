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
const pageRoute = require('./routes/page');
const pageDetailRoute = require('./routes/pageDetail');
const websiteRoute = require('./routes/website');
const userRoute = require('./routes/user');

// Mount Routes
app.use('/auth', authRoute);
app.use('/page', pageRoute);
app.use('/pagedetail', pageDetailRoute);
app.use('/website', websiteRoute);
app.use('/user', userRoute);

//set up user auth middleware
const auth = require('./middleware/auth');
app.use(auth.setUser);

app.all('*', function (req, res) {
    res.sendStatus(404);
});

// Listen to specific port for incomming requests
app.listen(port, () => {
    console.log(`Blog App is running on ${port}`);
})
