import { response } from 'express';
import blog from '../models/Blog.js';
import failureMsg from '../utils/failureMsg.js';
import serverError from '../utils/serverError.js';
import successMsg from '../utils/successMsg.js';

class blogsController {
  // create blog
  static async createblog(req, res) {
    const { title, content, author, imageUrl } = req.body;
    try {
      const newblog = await blog.create({ title, content, author, imageUrl });
      const status = 201;
      const msg = "blog created successfully";
      const data = newblog;
      successMsg(res, status, msg, data);
    } catch (error) {
      if(error.code == "11000"){
        res.status(403).json({
          message: "Blog Title Used"
        })
      }
      else{const errorMsg = error.message;
      serverError(res, errorMsg);
      console.log(error.message);
      }
    }
  }

  // get blogs
  static async getblogs(req, res) {
    try {
      const blogs = await blog.find();
      const status = 200;
      const msg = "All blogs";
      const data = blogs;
      successMsg(res, status, msg, data);
    } catch (error) {
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }

  // get one blog
  static async getblog(req, res) {
    const { id } = req.params;
    try {
      const Blog = await blog.findOne({ _id: id });
      console.log(Blog)
      if (!Blog) {
       res.status(404).json({
        message: `blog with id ${id} was not found `
       })
      } else {
        const status = 200;
        const msg = `blog with id: ${id} successfully fetched`;
        const data = Blog;
        successMsg(res, status, msg, data);
      }
    } catch (error) {
      console.log(error)
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }

  // update blog
  static async updateblog(req, res) {
    const {content, imageUrl} = req.body
    const { id } = req.params;
    const _id = id
    try {
      const blogUpdated = await blog.findByIdAndUpdate(_id, {content, imageUrl}, {new: true})
      res.status(200).json({
        data: blogUpdated
      })
    } catch (error) {
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }

  // delete
  static async deleteblog(req, res) {
    const { id } = req.params;
    const _id = id
    try {
      const deletedBlog = await blog.findByIdAndDelete(_id)
      if(deletedBlog){
        res.status(200).json({
          mesage: "Successfully deleted"
        })
      }
      else{
        res.status(404).json({
          mesage: "Blog Not Found"
        })
      }
    } catch (error) {
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }
}

export default blogsController;