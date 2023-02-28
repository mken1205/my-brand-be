import express from "express"
import blogsController from "../controllers/blogsController.js";


const router = express.Router()

// defined routes
router.get("/", blogsController.getblogs)
router.post("/", blogsController.createblog)
router.get("/:id", blogsController.getblog)
router.put("/:id", blogsController.updateblog)
router.delete("/:id", blogsController.deleteblog)


export default router