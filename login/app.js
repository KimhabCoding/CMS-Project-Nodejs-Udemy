const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const User_LoginModel = require('../models/User-Login');
const bodyParser = require('body-parser'); // https://www.npmjs.com/package/body-parser
const log = console.log; 

// BodyParser 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Connection URL
const url = 'mongodb://localhost:27017/login';
// const db_name = 'login'; 
// const col_name = 'col_user'; 

// mongoose.connect(url, { useNewUrlParser: true }); 
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
    log('Connected');
    log(User_LoginModel()); 
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

    res.send(newUser); 
}); 

const PORT = 3024 || process.env.PORT; 

app.listen(PORT, () => {
    log(`Running on port ${PORT}`);
}); 