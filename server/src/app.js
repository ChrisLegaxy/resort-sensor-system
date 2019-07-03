// Node Module
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
mongoose.set('useFindAndModify', false)

// Local Module
const config = require('./config')

// Initializing
const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

// Listen and Connect to DB
app.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true
    })
})

// Check DB Connection
const db = mongoose.connection

db.on('error', (err) => console.log(err))

db.once('open', () => {
    require('../routes/api/user')(app)
    console.log(`Server Started on PORT ${config.PORT}`)
})