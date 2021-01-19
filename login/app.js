const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const log = console.log; 

// Connection URL
const url = 'mongodb://localhost:27017/';
const db_name = 'login'; 
const col_name = 'col_user'; 

// mongoose.connect(url, { useNewUrlParser: true }); 
mongoose.connect(url + db_name, {useNewUrlParser: true, useUnifiedTopology: true}); 
mongoose.connection
    .once('open', () => log('Connected'))
    .on('error', (err) => {
        
        log(`Could not connect`, err); 
    });  


const PORT = 3024 || process.env.PORT; 

app.listen(PORT, () => {
    log(`Running on port ${PORT}`);
}); 