import express from "express";
import { authorize } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/todo", authorize("todo:create"), (req, res) => {
  res.json({ message: "Todo created!" });
});

router.get("/todo", (req, res) => {
  res.json({ message: "Fetching todos" });
});

export default router;
