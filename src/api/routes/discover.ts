import express, { Response } from "express";
import { extractTags, makeDiscoveryResponse, parsePopularTags } from "../../common/util";
import servers from "../../common/db/servers.json";
import bots from "../../common/db/bots.json";
import themes from "../../common/db/themes.json";
import { DiscoveryResponse, Server } from "../../common/types/discovery";

const router = express.Router();

router.get("/servers.json", (req, res: Response<DiscoveryResponse<Server>>) => {
  const tags: string[] = extractTags(servers.map((x) => x.tags));

  res.json(makeDiscoveryResponse({
    servers,
    popularTags: parsePopularTags(tags),
  }));
});

router.get("/bots.json", (req, res: Response<DiscoveryResponse<any>>) => {
  res.json(makeDiscoveryResponse({
    bots,
    popularTags: [],
  }));
});

router.get("/themes.json", (req, res: Response<DiscoveryResponse<any>>) => {
  res.json(makeDiscoveryResponse({
    themes,
    popularTags: [],
  }));
});

export default router;
