import { Router } from "express";
import { User } from "../models/user";
import { Post } from "../models/post";

const router = Router();

// Create a new user
router.get("/get-all", async (req, res) => {
  try {
    const user = await User.findAll({ include: [Post] });

    const posts = await Post.findAll({ include: [User] });

    res.status(201).json({ posts, user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
