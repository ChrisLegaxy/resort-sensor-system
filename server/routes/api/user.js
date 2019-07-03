const userController = require('../../controllers/user.controller')
const passport = require('../../middlewares/auth')

module.exports = (app) => {
    app.get('/user', userController.getAllUser)

    app.post('/user', userController.registerUser)

    app.put('/user/:id', userController.updateUser)

    app.delete('/user/:id', userController.deleteUser)

    app.post('/login', passport.authenticate('local'), (req, res) => {
        res.sendStatus(200)
    } )

    // app.post('/login', )
}