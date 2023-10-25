import mongoose from "mongoose";
const { Schema } = mongoose;

const questionModel = new Schema({
    questions: { type : String},
    options: [{ type: String }], 
    answers :[ { type : String}],
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);