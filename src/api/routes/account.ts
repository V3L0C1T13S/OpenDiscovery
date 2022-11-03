import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.sendStatus(401);
});

router.get("/settings", (req, res) => {
  res.sendStatus(401);
});

export default router;
