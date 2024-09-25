const mongoose = require('mongoose')

// mongoose.Schema.Types.ObjectId

const mbtiSchema = mongoose.Schema({
    type_name:{
        type:String,
        required:true,
        unique:true
    },
    strengths:{
        type:String,
        required:true
    },
    weaknesses:{
        type:String,
        required:true
    },
    reading_preferences:{
        type:String,
        required:true
    },
}, { versionKey: false })

module.exports = mongoose.model('mbti_types', mbtiSchema);