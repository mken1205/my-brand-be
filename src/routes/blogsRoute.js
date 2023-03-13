import express from "express"
import blogsController from "../controllers/blogsController.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const router = express.Router()

// defined routes
router.get("/", blogsController.getblogs)
router.post("/", verifyAdmin, blogsController.createblog)
router.get("/:id", blogsController.getblog)
router.put("/:id", verifyAdmin, blogsController.updateblog)
router.delete("/:id", verifyAdmin, blogsController.deleteblog)


export default router