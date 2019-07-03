const User = require('../models/user.model')
const auth = require('../middlewares/auth')
const bcrypt = require('bcryptjs')

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (err) {
        res.send({
            err
        })
    }
}

exports.registerUser = async (req, res) => {
    if (!req.is('application/json')) {
        res.send({
            warning: "Expects 'application/json'"
        })
    }
    const {
        username,
        password
    } = req.body
    const user = new User({
        username,
        password
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, async (err, hash) => {
            // Hash Password
            user.password = hash;
            try {
                const newUser = await user.save()
                res.status(201).json({newUser, msg: "Registered Successfully"})
            } catch (err) {
                res.send(err)
            }
        })
    })
}

exports.updateUser = async (req, res) => {
    const {
        username,
        email
    } = req.body
    try {
        const updateUser = await User.findOneAndUpdate({
            _id: req.params.id
        }, req.body)
        res.status(204).send(`Succesfully Updated User: ${updateUser}`)
    } catch (err) {
        res.send({
            warning: `There's no user with the id of ${req.params.id}`
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndRemove({
            _id : req.params.id
        })
        res.send({
            user,
            msg: `has been deleted successfully` 
        })
    } catch (err) {
        res.send({
            warning: `There's no user with the id of ${req.params.id}`
        })
    }
}

exports.login = async (req, res) => {
    
}
