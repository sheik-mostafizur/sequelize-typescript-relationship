import { Router } from "express";
import { User } from "../models/user";

const router = Router();

// Create a new user
router.get("/get-all", async (req, res) => {
  try {
    const user = await User.findAll({ include: [] });

    res.status(201).json({ user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
