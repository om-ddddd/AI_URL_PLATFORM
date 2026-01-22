// src/db/redis.js
import { createClient } from "redis";
import "dotenv/config";

const redisUrl = process.env?.REDIS_URL || "redis://localhost:6379";

const redisClient = createClient({
  url: redisUrl,
});

redisClient.on("error", (err) => {
  console.error("Redis Client Connection Error", err);
});

redisClient.on("connect", () => {
  console.log("Connected to Redis successfully!");
});

(async () => {
  try {
    await redisClient.connect();
  } catch (err) {
    console.error("Failed to connect to Redis:", err);
  }
})();

export default redisClient;
