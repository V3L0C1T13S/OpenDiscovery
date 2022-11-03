import express from "express";

const router = express.Router();

router.get("/discover/servers", (req, res) => {
  res.send("OK");
});

export default router;
