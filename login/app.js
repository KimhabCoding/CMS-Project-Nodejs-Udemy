const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User_LoginModel = require('../models/User-Login');
const bodyParser = require('body-parser'); // https://www.npmjs.com/package/body-parser
const bcrypt = require('bcryptjs'); // https://www.npmjs.com/package/bcryptjs
const log = console.log;

// BodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise; 
// More about Using Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// Connection URL
const url = 'mongodb://localhost:27017/login';
// const db_name = 'login'; 
// const col_name = 'col_user'; 

// mongoose.connect(url, { useNewUrlParser: true }); 
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    log('Connected');
    // log(User_LoginMode l()); 
});

// Create Data 
/* const newUser = new User_LoginModel({

    email: 'kimhab.coding@gmail.com', 
    password: 'admin007@$'

}); 

newUser.save(function(err, dataSaved) {
    if (err) return err; 
    log(dataSaved); 
});  */

// App Post 
app.post('/register', (req, res) => {
    const newUser = new User_LoginModel();
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    // Bcrypt or Hash Password 
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) return err;
            newUser.password = hash;
            // newUser.password = req.body.password;
            // log(newUser.password); 

            // Save Data 
            newUser.save().then(userSaved => {
                res.send('Data saved.');
            }).catch(err => {
                res.send("Data not save");
            });
        });
    });
});

// Login 
app.post('/login', (req, res) => {
    User_LoginModel.findOne({ email: req.body.email }).then(user => {
        if (user) {
            // user.password (then(user))
            bcrypt.compare(req.body.password, user.password, (err, mathced) => {
                if (err) return err; 
                if (mathced) {
                    res.send('User is able to login'); 
                } else {
                    res.send('Not able to login'); 
                }
            }); 
        }
    }); 
}); 

const PORT = 3024 || process.env.PORT;

app.listen(PORT, () => {
    log(`Running on port ${PORT}`);
}); 