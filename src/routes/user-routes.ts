import { Router } from "express";
import { User } from "../models";
const router = Router();

router.post("/users", async (req, res) => {
  try {
    const data = req.body;
    const user = await User.create(data);

    res.status(201).json({ data: user, message: "user created successfully!" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const user = await User.findAll();

    res.status(201).json({ user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
