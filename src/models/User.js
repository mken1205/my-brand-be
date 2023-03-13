import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String, 
    required: true,
    minLength: 6,
  },
  isAdmin: {
    type: Boolean,
    required: false
  }
})

const User = mongoose.model("User", userSchema)

export default User