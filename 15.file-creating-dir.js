const log = console.log; 
const fs = require('fs'); 

const nameDir = 'views'; 
const nameDir1 = 'view1'; 

// log(fs); // get all func and other of fs 
// fix error: TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined by rec01
fs.mkdir(`${nameDir}`, { recursive: true }, (err) => { // rec01
    if (err) throw err;
    log(`Directory '${nameDir}' has been created`);     
});

// mkdir: https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_mkdir_path_options_callback

if (!fs.existsSync(`${nameDir1}`, { recursive: true })) { // out put with exitstSync 

    // existsSync: https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_existssync_path
    fs.mkdir(`${nameDir1}`, { recursive: true }, (err) => {
        if (err) return err;

        fs.writeFile(`./${nameDir1}/fsd.html`, 'This is file creating dir', (err) => {
            if (err) return err; 
            log('Directory and file saved'); 
        });
    }); 
}
else {
    log(`${nameDir1} already extis.`); 
}
// https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_mkdirsync_path_options
