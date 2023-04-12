const User = require('../models/User');
const admin = require('firebase-admin');

exports.user_index = async (req, res) => {
    try {
      const users = await User.find();
      const usersWithFirebaseUser = await Promise.all(users.map(async (user) => {
        const firebaseUser = await admin.auth().getUser(user.firebaseID);
        return {...user.toObject(), firebaseUser};
      }));
      res.status(200).json({users: usersWithFirebaseUser});
    } catch (err) {
      res.status(500).json({err});
    }
  }

exports.user_create = async (req, res) => {
    admin.auth().createUser({
        email: req.body.email,
        password: req.body.password
    }).then((response) =>{
        const firebaseID = response.uid;
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            type: req.body.type,
            firebaseID: firebaseID,
            avatarURL: req.body.avatarURL
        });
        user.save().then(() => {
            res.status(200).json({user});
        }).catch(err => {
            console.log('Error: ', err);
            res.status(401).json({ "message": `Error creating user => ${firebaseID}` })
        });
    }).catch((err) => {
        res.status(500).json(err);
    })
}

exports.user_update = async (req, res) => {
    const id = req.body.id;
    User.findByIdAndUpdate(id, req.body, {new: true})
    .then((user) => {
        res.status(200).json({user});
    })
    .catch((err) => {
        res.status(500).json({err});
    })
}

exports.user_delete = async (req, res) => {
    const id = req.body.id;
    User.findByIdAndRemove(id)
    .then((user) => {
        admin.auth().deleteUser(user.firebaseID)
        .then(() => {
            res.status(200).json({user});
        })
        .catch((err) => {
            res.status(500).json({err});
        });
    })
    .catch((err) => {
        res.status(500).json({err});
    })
}