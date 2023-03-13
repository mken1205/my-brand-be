import express from "express"
import blogRoute from "./blogsRoute.js"
import registerRoute from "./registerRoute.js"
import loginRoute from "./loginRoute.js"

const router = express.Router()

router.use("/blogs", blogRoute )
router.use("/register", registerRoute)
router.use("/login", loginRoute)

export default router