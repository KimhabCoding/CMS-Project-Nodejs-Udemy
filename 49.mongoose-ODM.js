const mongoose = require('mongoose'); 
const User = require('./models/User'); 
const log = console.log; 
 
// Connection URL
const url = 'mongodb://localhost:27017/mongoose';

// mongoose.connect(url, { useNewUrlParser: true }); 
mongoose.connect(url, { useNewUrlParser: true }); 
mongoose.connection
    .once('open', () => log('Connected'))
    .on('error', (err) => {
        
        log(`Could not connect`, err); 
    }); 