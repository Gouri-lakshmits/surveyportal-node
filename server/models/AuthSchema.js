import mongoose from "mongoose";
const { Schema } = mongoose;

const Authuser = new Schema({
    name: {
        type: String,
      },
      email: {
        type: String,
      },
      password: {
        type: String,
      },
      signup_token: {
        type: String,
      },
      isAdmin: {
        type: Boolean,
        default: false, 
    },
    });


export default mongoose.model('Auth', Authuser);