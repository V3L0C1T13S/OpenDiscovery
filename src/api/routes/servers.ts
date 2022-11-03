import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.sendStatus(401);
});

router.get("/:id", (req, res) => {
  res.sendStatus(404);
});

export default router;
