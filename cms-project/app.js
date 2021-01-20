const express = require('express'); 
const app = express(); 
const log = console.log; 



const PORT = 3024 || process.env.PORT; 

app.listen(PORT, () => {
    log(`Running on port ${PORT}`); 
}); 
