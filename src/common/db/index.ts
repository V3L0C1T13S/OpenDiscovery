import { MongoClient } from "mongodb";
import { mongoDbURL } from "../constants";

export namespace DbManager {
  export const client = new MongoClient(mongoDbURL);

  export const servers = client.db("serers");

  export const bots = client.db("bots");
}
