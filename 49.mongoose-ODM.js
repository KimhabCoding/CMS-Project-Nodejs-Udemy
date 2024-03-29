const mongoose = require('mongoose'); 
const User = require('./models/User');
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); // https://www.npmjs.com/package/body-parser
const log = console.log; 

mongoose.Promise = global.Promise; 
// More about Using Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 
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

        // Choose Body---> 'x-www-form-urlencoded' 
    }).catch(err => {
        res.status(404).send('Data not save because...'); 
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

// Get User | Fetch Data User 
// More Fetch or query data: https://mongoosejs.com/docs/api.html#model_Model.find
app.get('/users', (req, res) => {
    
    User.find({}).then(users => {
        res.send(users); 
    }); 
}); 

// Edit or Patch data 
// More: https://expressjs.com/en/api.html 
app.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    const firstName = req.body.firstName;

    // findByIdAndUpdate: https://mongoosejs.com/docs/tutorials/findoneandupdate.html
    User.findByIdAndUpdate({ _id: id }, { $set: { firstName: firstName } }, { new: true })
        .then(savedUser => {
            res.send('User was edited.'); 
        }); 
}); 

// Update data with Put 
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // findByIdAndUpdate: https://mongoosejs.com/docs/tutorials/findoneandupdate.html
    User.findByIdAndUpdate({ _id: id }, { $set: { firstName: firstName , lastName: lastName} }, { new: true })
        .then(savedUser => {
            res.send('User was updated by put.'); 
        }); 
}); 

// Delete data 
app.delete('/users/:id', (req, res) => {
    // TypeError: User.remove is not a function fix by replace remove--->findByIdAndRemove
    User.findByIdAndRemove({ _id: req.params.id }).then(User => {
        User.remove().then(UserRemoved => {
            res.send('User remove' + UserRemoved); 
        }); 
    }); 
}); 



const PORT = 3024 || process.env.PORT; 

app.listen(PORT, () => {
    log(`Running on port ${PORT}`); 
}); 