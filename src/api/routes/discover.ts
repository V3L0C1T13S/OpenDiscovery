import express, { Response } from "express";
import servers from "../../common/db/servers.json";
import bots from "../../common/db/bots.json";
import themes from "../../common/db/themes.json";
import { DiscoveryResponse, Server } from "../../common/types/discovery";

const router = express.Router();

function makeDiscoveryResponse(data: any) {
  return {
    pageProps: {
      ...data,
    },
    __N_SSG: true,
  };
}

function parsePopularTags(tags: string[]) {
  return;
}

router.get("/discover/servers.json", (req, res: Response<DiscoveryResponse<Server>>) => {
  res.json(makeDiscoveryResponse({
    servers,
    popularTags: [],
  }));
});

router.get("/discover/bots.json", (req, res: Response<DiscoveryResponse<any>>) => {
  res.json(makeDiscoveryResponse({
    bots,
    popularTags: [],
  }));
});

router.get("/discover/themes.json", (req, res: Response<DiscoveryResponse<any>>) => {
  res.json(makeDiscoveryResponse({
    themes,
    popularTags: [],
  }));
});

export default router;
