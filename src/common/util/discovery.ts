import lodash from "lodash";
import "missing-native-js-functions";

export type popularTag = {
  ocurrences: number,
  item: string,
}

export function makeDiscoveryResponse(data: any) {
  return {
    pageProps: {
      ...data,
    },
    __N_SSG: true,
  };
}

export function parsePopularTags(tags: string[]) {
  const popular: popularTag[] = tags.map((x) => ({
    item: x,
    ocurrences: tags.filter((y) => x === y).length,
  })).unique((x) => x.item);

  const meanOcurrences = lodash.mean(popular.map((x) => x.ocurrences));

  return popular.filter((x) => x.ocurrences > meanOcurrences).map((x) => x.item);
}

export function extractTags(tags: string[][]) {
  const extracted: string[] = [];

  tags.forEach((x) => x.forEach((t) => extracted.push(t)));

  return extracted;
}
