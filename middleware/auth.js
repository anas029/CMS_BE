const admin = require('firebase-admin');
const User = require('../models/User');

exports.setUser = (req, res, next) => {
    const sessionCookie = req.cookies.session || "";
    admin.auth().verifySessionCookie(sessionCookie, true)
        .then((decodedToken) => {
            const firebaseID = decodedToken.uid;
            User.findOne({ firebaseID: firebaseID })
                .then((user) => {
                    res.locals.user = user;
                    console.log('User online =>', firebaseID);
                    next();
                })
                .catch((err) => {
                    console.log('Error retrieving user =>', firebaseID);
                    next();
                })
        }).catch((error) => {
            console.log('Guest user');
            next();
        })
};

exports.authenticate = (req, res, next) => {
    const sessionCookie = req.cookies.session || "";
    admin.auth().verifySessionCookie(sessionCookie, true)
        .then((decodedToken) => {
            const firebaseID = decodedToken.uid;
            User.findOne({ firebaseID: firebaseID })
                .then((user) => {
                    res.locals.user = user;
                    console.log('User is authorized =>', firebaseID);
                    next();
                })
                .catch((err) => {
                    return res.status(401).json({"message": `Error retrieving user => ${firebaseID}`})
                })
        }).catch((error) => {
            return res.status(401).json({"message": `Not Authorized to access this... ):`})
        })
};

