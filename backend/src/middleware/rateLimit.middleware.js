import rateLimit from "express-rate-limit";

export const createLinkLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 create link requests per windowMs
  message:
    "Too many links created from this IP, please try again after 15 minutes",
});
