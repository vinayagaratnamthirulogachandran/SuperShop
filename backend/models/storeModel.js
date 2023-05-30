const mongoose = require('mongoose');
const validator = require('validator');
const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        unique: true
    },
    description:{
        type: String,
        required: [true, 'Please enter product description']
    },
    location:{
        address:{
            type: String,
            required: [true, 'Please enter store address']
        },
        city:{
            type: String,
            required: [true, 'Please enter store city']
        },
        zipCode:{
            type: Number
        },
        state:{
            type:String,
            required: [true, 'Please enter store state']
        },
        country:{
            type: String,
            required: [true, 'Please enter store country']
        },
    },
    email:{
        type: String,
        required: [true, 'Please enter store email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email']
    },
    phone:{
        type: String,
        required: [true, 'Please enter store phone'],
        unique: true
    },
    logo:{
        url:{type: String}
    },
addedBy:{
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    }
},
updateBy:{
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    }
}
},
{
    timestamps: true
})

module.exports = mongoose.model('Store', storeSchema);