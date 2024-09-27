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
    },
    score:{
        E: { type: Number},
        I: { type: Number},
        S: { type: Number},
        N: { type: Number},
        T: { type: Number},
        F: { type: Number},
        J: { type: Number},
        P: { type: Number},
    },
}, { versionKey: false })

module.exports = mongoose.model('users', userSchema);