const User = require('../models/User');


module.exports = {

    login(req, res) {
        let { username, password } = req.body;

        User.findOne({ username }, (err, user) => {
            if (err) {
                res.send('Error: ' + err);
            } else if (!user) {
                res.send({
                    message: 'No user with username ' + username
                });
            } else {
                if (password === user.password) {
                    res.send({
                        user: user._id,
                        isAuthenticated: true
                    })
                } else {
                    res.status(403).send({
                        isAuthenticated: false
                    })
                }
            }
        })
    },

    getUsers(req, res) {
        User.find((err, users) => {
            if (err) {
                console.log(err)
            } else if (users.length === 0) {
                res.send({
                    message: "There are no users."
                })
            } else {
                res.send({
                    users: users
                })
            }
        })

    },

    getUser(req, res) {

        let searchUsername = req.params.username;
        User.findOne({ username: searchUsername }, (err, user) => {
            if (err) {
                res.send('Error: ' + err);
            } else if (!user) {
                res.send({
                    message: 'No user with username ' + searchUsername
                });
            } else {
                res.send({
                    user: user
                });
            }
        });
    },

    addTodo(req, res) {
        let { username, todoItem } = req.body;
        User.updateOne({ username: username }, {
            $push: { todos: todoItem }
        }, (err, result) => {
            res.send({
                message: "Success adding todo item"
            })
        })
    },

    removeTodo(req, res) {
        let { username, todoItem } = req.body;
        console.log(req.body);

        User.updateOne({ username }, {
            $pull: { todos: todoItem }
        }, (err, result) => {
            res.send({
                message: "Success deleting todo item"
            })
        })
    },

    createUser(req, res) {

        const { username, password, firstname, lastname, todos } = req.body
        const newUser = new User({
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            todos: todos
        })

        newUser.save((err) => {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    message: 'Success creating the user'
                })
            }
        })
    }
}