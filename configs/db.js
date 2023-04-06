require('dotenv').config()
const mongoose = require('mongoose')
const db = process.env.DB_URI
mongoose.set('strictQuery', true)
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch((err) => { 'Error Connecting to MongoDB.\n', console.log(err) })
