import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
 number : {
    type : String
 },
 details :[{
    question : {
        type : String
    },
    answer : {
        type : String
    }
 }],
 
});

export default mongoose.model('User', User);