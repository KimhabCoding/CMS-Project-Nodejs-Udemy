const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
// col_name is collection name in db login
// const col_name = 'coluser'; 

//  More about model: https://mongoosejs.com/docs/models.html
//  Schema Type: https://mongoosejs.com/docs/schematypes.html

const PostSchema = new Schema({
    user: {
        
    }, 
    title: {
        type: String,  
        require: true
    }, 
    status: {
        type: String, 
        default: 'public'
    }, 
    allowComments: {
        type: Boolean, 
        require: true 
    }, 
    body: {
        type: String, 
        require: true
    }, 
    file: {
        type: String, 
    }
}); 

// 
const PostModel = mongoose.model('posts', PostSchema); 

// { User } file export it use like that too {User}
module.exports = PostModel; 

// const schema = new mongoose.Schema({ name: 'string', size: 'string' });
// const Tank = mongoose.model('Tank', schema);