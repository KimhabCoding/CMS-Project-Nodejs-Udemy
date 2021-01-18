const mongoose = require('mongoose'); 
const User = require('./models/User');
const express = require('express'); 
const app = express(); 
const log = console.log; 
 
// Connection URL
const url = 'mongodb://localhost:27017/myproject';

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

const PORT = 3024 || process.env.PORT; 

app.listen(PORT, () => {
    log(`Running on port ${PORT}`); 
}); 