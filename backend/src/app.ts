import cors from "cors";
import express from "express";

export const createApp = () => {
  const app = express();
  const corsOrigin = process.env.CORS_ORIGIN ?? "http://localhost:3000";

  app.use(cors({ origin: corsOrigin }));
  app.use(express.json());

  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      service: "applyhub-api",
      timestamp: new Date().toISOString()
    });
  });

  return app;
};
