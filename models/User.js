const mongoose = require('mongoose'); 

// More about model: https://mongoosejs.com/docs/models.html
const schemaUser = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    isActive: {
        type: Number,
        default: 0
    }

}); 
const User = mongoose.model('users', schemaUser); 

// { User } file export it use like that too {User}
module.exports = User; 