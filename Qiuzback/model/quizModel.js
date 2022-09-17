const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
  {
    question: { type: String, require: true },
    group: { type: String, require: true },
    Answer: {type:String,require:true},
    options: {type:Array,require:false},
    userId: {type:String,require:true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("quiz", quizSchema);