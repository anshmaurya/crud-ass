const mongoose  = require('mongoose');

// here we define some UserSchema/required fields who we want 
const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: [true,'Name is required'],
        trim:true,
        maxLength:[20,"Name must be at least 20 characters"]

    },
    email:{
        type: 'string',
        required: [true,'email is required'],
        unique: true,
        lowercase: true,
        unique: [true,'already registered']
    },
    password:{
        type: 'string',
        required: [true,' password is required']
    }
});


const UserModel = mongoose.model('user',userSchema);

module.exports = {UserModel};