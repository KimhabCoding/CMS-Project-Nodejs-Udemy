const axios = require('axios'),
    log = console.log; 

const acc_git_name = 'AnosKh'; 
// Wanna know more about axios: https://www.npmjs.com/package/axios

axios.get('https://api.github.com/users/' + acc_git_name).then((res) => {
    log(res.data.bio); 
}).catch((err) => {
    log(err); 
}); 