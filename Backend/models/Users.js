const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user_id: { 
        type: String, 
        required: true ,
        unique: true
    },
    mbti_type:{
        type:String,
    },
    favorite:{
        type:[String],
    },
    history:{
        type:[String],
    }
}, { versionKey: false })

module.exports = mongoose.model('users', userSchema);