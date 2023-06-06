const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password:{
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [8, 'password should be more than 8 characters'],
        select: false
    },
    phone:{
        type: String,
        required: [true, 'Please enter phone'],
        unique: true
    },
    avatar:{
        id:{type: String},
        url:{type: String}
    },
    roles:{
        type: [String],
        default: 'admin',
        required: true,
        enum: ['admin', 'seller', 'user']
    },
    store:{
        type: mongoose.Schema.ObjectId,
        ref: 'Store'
    },
    updateBy:{
        user:{
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    },
    refreshToken:[String],
    blocke:{
        type: Boolean,
        defaultfalse
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);