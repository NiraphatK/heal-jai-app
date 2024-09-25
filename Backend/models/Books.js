const mongoose = require('mongoose')

// mongoose.Schema.Types.ObjectId

const bookSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true ,
    },
    type:{
        type:[String],
        required:true
    },
    author:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    synopsis:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
}, { versionKey: false })

module.exports = mongoose.model('books', bookSchema);