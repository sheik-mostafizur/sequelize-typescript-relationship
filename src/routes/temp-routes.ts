import { Router } from "express";
import { FKNT, User } from "../models";
const router = Router();

router.post("/temp", async (req, res) => {
  try {
    const data = req.body;
    const createdData = await FKNT.create(data);

    res
      .status(201)
      .json({ data: createdData, message: "created successfully!" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/temp", async (req, res) => {
  try {
    const temps = await FKNT.findAll({ include: [User] });

    res.status(201).json({ temps });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
