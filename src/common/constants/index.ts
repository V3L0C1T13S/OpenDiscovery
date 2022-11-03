import dotenv from "dotenv";

dotenv.config();

export const revoltBaseURL = process.env["REVOLT_BASE_URL"] ?? "https://revolt.chat";

export const revoltApiURL = process.env["REVOLT_API_URL"] ?? "https://api.revolt.chat";

export const revoltAutumnURL = process.env["REVOLT_AUTUMN_URL"] ?? "https://autumn.revolt.chat";

export const mongoDbURL = process.env["MONGODB_URL"] ?? "mongodb://localhost:27017/opendiscovery";

export const enableLogging = process.env["ENABLE_LOGGING"] ?? false;
