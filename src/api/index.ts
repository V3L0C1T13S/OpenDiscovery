import express from "express";
import path from "path";
import { Server } from "../common/util/vserver";
import discoverRouter from "./routes/discover";
import statusRouter from "./routes/status";

export class OpenDiscoveryAPI extends Server {
  port = 3005;

  async start() {
    this.app.use(express.json());
    this.app.use("/_next/data/:buildId", discoverRouter);
    this.app.use("/status", statusRouter);
    this.app.use("/discover/:type", (req, res) => {
      res.sendFile(path.join(__dirname, "../../assets/views/index.html"));
    });

    // eslint-disable-next-line no-console
    console.log("API ON!");

    super.start();
  }
}
