const mongoose = require('mongoose')

// mongoose.Schema.Types.ObjectId

const mbtiSchema = mongoose.Schema({
    INTJ: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      INTP: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ENTJ: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ENTP: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      INFJ: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      INFP: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ENFJ: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ENFP: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ISTJ: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ISFJ: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ESTJ: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ESFJ: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ISTP: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ISFP: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ESTP: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      },
      ESFP: {
        name: { type: String, required: true },
        personality: { type: String, required: false },
        characteristics:{ type:[String],require:false},
        strengths: { type: [String], required: false },
        weaknesses: { type: [String], required: false },
        result: { type:String , require:false}
      }
}, { versionKey: false })

module.exports = mongoose.model('mbti_types', mbtiSchema);