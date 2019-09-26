const UserController = require('./controllers/UserController');

module.exports = (app) => {

    app.get('/getUsers', UserController.getUsers);
    app.get('/getUser/:username', UserController.getUser);
    app.post('/addTodo', UserController.addTodo);
    app.get('/createUser', UserController.createUser);

    app.post('/login', UserController.login);

    app.post('/removeTodo', UserController.removeTodo);
}