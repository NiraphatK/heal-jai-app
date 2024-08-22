const mongoose = require('mongoose')

// mongoose.Schema.Types.ObjectId

const bookSchema = mongoose.Schema({
    bookID: { 
        type: String, 
        required: true ,
        unique: true
    },
    bookName:{
        type:String,
        required: true
    },
    bookDescription:{
        type:String,
        required:true
    },
    bookAuthor:{
        type:String,
        required:true
    },
    bookPublishAt: { 
        type: Date, 
        required: true 
    },
    bookType:{
        type:[String],
        required:true
    },
    bookImage:{
        type:String,
        required:true
    }
}, { versionKey: false })

module.exports = mongoose.model('books', bookSchema);