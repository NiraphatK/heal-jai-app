const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    bookID: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
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
        type:String,
        required:true
    }
})

module.exports = mongoose.model('USERS', bookSchema);