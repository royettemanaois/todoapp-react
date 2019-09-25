const User = require('../models/User');


module.exports = {
    
    
    getUsers (req, res) {

        User.find((err, users) => {
            if(err){

            }else if(users.length === 0){
                res.send({
                    message: "No Users"
                })
            }else{
                res.send({
                    users: users
                })
            }
        })
        
    },

    createUser (req, res) {

        const {username, password, firstname, lastname} = req.body

        const newUser = new User ({
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
        })

        newUser.save((err) => {
            if(err){
                console.log(err);
            }else{
                res.send({
                    message: 'Success creating the user'
                })
            }
        })
    }
}