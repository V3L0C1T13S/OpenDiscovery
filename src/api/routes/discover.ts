import express from "express";
import servers from "../../common/db/servers.json";

const router = express.Router();

router.get("/discover/servers.json", (req, res) => {
  res.json(servers);
});

export default router;
