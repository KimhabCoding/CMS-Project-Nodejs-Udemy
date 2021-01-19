const mongoose = require('mongoose'); 
const User = require('./models/User');
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); // https://www.npmjs.com/package/body-parser
const log = console.log; 

mongoose.Promise = global.Promise; 
 
// Connection URL
const url = 'mongodb://localhost:27017/myproject';

// BodyParser 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// mongoose.connect(url, { useNewUrlParser: true }); 
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}); 
mongoose.connection
    .once('open', () => log('Connected'))
    .on('error', (err) => {
        
        log(`Could not connect`, err); 
    });  

/* const newUser = new User({

    firstName: 'Ho', 
    lastName: 'Kimhab', 
    isActive: 1 

}); 

newUser.save(function(err, dataSaved) {
    if (err) return err; 
    log(dataSaved); 
});  */

// app.post('/users'); 

// Get Method 
app.get('/', (req, res) => {
    res.send('Home page'); 
}); 

// Post Method 
app.post('/users', (req, res) => {
    const newUser = new User({
        /* firstName: 'Honibri', 
        lastName: 'Kimhab', 
        isActive: 1 */
        
        firstName: req.body.firstName, // 'Honibri', 
        lastName: req.body.lastName, // 'Kimhab', 
        isActive: req.body.isActive
    }); 

    // Save Data 01 = 02 
    /* newUser.save(function(err, dataSaved) {
        if (err) return err; 
        log(dataSaved); 
    }); */

    // Save Data 02 = 01 
    newUser.save().then(savedUser => {
        // log('saved user');
        res.send('Save User'); 
    }); 
}); 

// More about Using Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

const PORT = 3024 || process.env.PORT; 

app.listen(PORT, () => {
    log(`Running on port ${PORT}`); 
}); 