import express from "express";
import { authorize } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/post", authorize("post:create"), (req, res) => {
  res.json({ message: "Post created!" });
});

router.get("/post", (req, res) => {
  res.json({ message: "Fetching posts" });
});

export default router;
