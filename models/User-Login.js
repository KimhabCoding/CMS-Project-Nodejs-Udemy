const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
// col_name is collection name in db login
const col_name = 'coluser'; 

//  More about model: https://mongoosejs.com/docs/models.html
//  Schema Type: https://mongoosejs.com/docs/schematypes.html

const UserLoginSchema = new Schema({
    email: {
        type: String, 
        unique: true, 
        trim: true, 
        minlength: 3, 
        required: true
    }, 
    password: {
        type: String, 
        minlength: 8, 
        required: true
    }
}); 

// 
const User_LoginModel = mongoose.model(col_name, UserLoginSchema); 

// { User } file export it use like that too {User}
module.exports = User_LoginModel; 

// const schema = new mongoose.Schema({ name: 'string', size: 'string' });
// const Tank = mongoose.model('Tank', schema);