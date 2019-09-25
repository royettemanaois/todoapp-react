const UserController = require('./controllers/UserController');

module.exports = (app) => {

    app.get('/getUsers', UserController.getUsers);
    app.get('/createUser', UserController.createUser);

}