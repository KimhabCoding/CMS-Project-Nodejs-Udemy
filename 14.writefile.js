const log = console.log; 
const fs = require('fs'); 
const filename = '14.writefile.html';
fs.writeFile(`./modules/${filename}`, 'Hello it is from writeFile', 'UTF8', (err) => {
    if (err) return err; 
    log(`File, ${filename} has been created`); 
}); 

fs.appendFile(`./modules/${filename}`, ' Extra text', 'UTF8', (err) => {
    if (err) return err; 
    log(`File, ${filename} extra file`); 
}); 

// More about readfile: 
// https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_writefile_file_data_options_callback