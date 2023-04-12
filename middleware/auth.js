const admin = require('firebase-admin');
const User = require('../models/User');

exports.setUser = (req, res, next) => {
    const sessionCookie = req.cookies.session || "";
    admin.auth().verifySessionCookie(sessionCookie, true)
        .then((decodedToken) => {
            const firebaseID = decodedToken.uid;
            User.findOne({ firebaseID: firebaseID })
                .then((user) => {
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

exports.isAuth = (req, res, next) => {
    const sessionCookie = req.cookies.session || "";
    admin.auth().verifySessionCookie(sessionCookie, true)
        .then((decodedToken) => {
            const firebaseID = decodedToken.uid;
            User.findOne({ firebaseID: firebaseID })
                .then((user) => {
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

exports.isAdmin = (req, res, next) => {
    const sessionCookie = req.cookies.session || "";
    admin.auth().verifySessionCookie(sessionCookie, true)
        .then((decodedToken) => {
            const firebaseID = decodedToken.uid;
            User.findOne({ firebaseID: firebaseID })
                .then((user) => {
                    if(user.type !== 'admin'){
                        throw new Error('User is not an admin');
                    }
                    console.log('User is admin =>', firebaseID);
                    next();
                })
                .catch((err) => {
                    return res.status(401).json({"message": `Error retrieving user => ${firebaseID}`, err})
                })
        }).catch((error) => {
            return res.status(401).json({"message": `Not Admin Authorized to access this... ):`})
        })
};