import mongoose from 'mongoose';

const { Schema } = mongoose;

const registerSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export default mongoose.model('Register', registerSchema);
