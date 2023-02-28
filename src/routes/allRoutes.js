import express from "express"
import blogRoute from "./blogsRoute.js"

const router = express.Router()

router.use("/blogs/", blogRoute )

export default router