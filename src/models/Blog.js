import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  }, 
  content: {
    type: String,
    required: true,
  }, 
  author: {
    type: String,
    required: true,
  }, 
  imageUrl: {
    type: String,
    required: true,
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const blog = mongoose.model("blog", blogSchema);

export default blog