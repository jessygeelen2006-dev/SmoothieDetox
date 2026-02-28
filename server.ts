import express from "express";
import { createServer as createViteServer } from "vite";

const BEEHIIV_API_KEY = "UlResh0xfvOeJpLlRyYaD9UmmPhOqRCzv0ItMyF3I7UBO46DZEhDrVqkfrh4X7L3";
const BEEHIIV_PUB_ID = "pub_ed5cf751-5a4b-4a02-b14c-6ec9c179def6";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            email,
            reactivate_existing: false,
            send_welcome_email: true,
            utm_source: "smoothiedetox",
            utm_medium: "organic",
            utm_campaign: "3-recepten",
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Beehiiv API error:", errorData);
        return res.status(response.status).json({ error: "Failed to subscribe" });
      }

      const data = await response.json();
      res.json({ success: true, data });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    // This part is handled by the platform's build process usually, 
    // but for completeness in a custom server:
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
