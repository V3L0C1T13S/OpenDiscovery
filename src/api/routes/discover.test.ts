import { describe, expect, test } from "@jest/globals";
import axios from "axios";
import { PageProp } from "../../common/types/discovery";

const axiosClient = axios.create({
  baseURL: "http://localhost:3005/_next/data/1",
});

function checkPageProps(data: PageProp<any>) {
  return Array.isArray(data.popularTags);
}

describe("api get requests", () => {
  test("get servers", async () => {
    const servers = await axiosClient.get("/discover/servers.json");

    console.log(JSON.stringify(servers.data));

    expect(checkPageProps(servers.data));
  });

  test("get bots", async () => {
    const bots = await axiosClient.get("/discover/bots.json");

    expect(checkPageProps(bots.data));
  });

  test("get themes", async () => {
    const themes = await axiosClient.get("/discover/themes.json");

    expect(checkPageProps(themes.data));
  });
});
