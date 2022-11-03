import express, { Response } from "express";
import "missing-native-js-functions";
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

type popularTag = {
  ocurrences: number,
  item: string,
}

function parsePopularTags(tags: string[]) {
  const popular: popularTag[] = tags.map((x) => ({
    item: x,
    ocurrences: tags.filter((y) => x === y).length,
  })).unique();

  return popular.map((x) => x.item);
}

router.get("/discover/servers.json", (req, res: Response<DiscoveryResponse<Server>>) => {
  const tags: string[] = [];

  servers.forEach((x) => x.tags.forEach((t) => tags.push(t)));

  res.json(makeDiscoveryResponse({
    servers,
    popularTags: parsePopularTags(tags),
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
