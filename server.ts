import express from "express";
import { createServer as createViteServer } from "vite";
import { createMollieClient } from "@mollie/api-client";

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

  app.post("/api/create-payment", async (req, res) => {
    try {
      const { firstName, lastName, email, method, discountCode } = req.body;
      const apiKey = process.env.MOLLIE_API_KEY;

      const baseUrl = process.env.APP_URL || `${req.protocol}://${req.get("host")}`;
      const successUrl = `${baseUrl}/success`;

      if (!apiKey || apiKey === 'undefined' || apiKey === '') {
        console.warn("MOLLIE_API_KEY is missing. Using fallback mock payment.");
        return res.json({ checkoutUrl: successUrl });
      }

      const mollieClient = createMollieClient({ apiKey });

      const amountValue = discountCode === 'MANGO' ? "90.00" : "97.00";

      const payment = await mollieClient.payments.create({
        amount: {
          currency: "EUR",
          value: amountValue,
        },
        description: "7-Daagse Smoothie Challenge",
        redirectUrl: successUrl,
        method: method === "ideal" ? "ideal" : "bancontact",
        metadata: {
          firstName,
          lastName,
          email,
        },
      });

      res.json({ checkoutUrl: payment._links.checkout?.href });
    } catch (error: any) {
      console.error("Payment creation failed:", error);
      res.status(400).json({ error: error.message || "Er is een onbekende fout opgetreden bij het aanmaken van de betaling." });
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
    app.use(express.static("dist"));
    
    // SPA fallback
    const path = await import("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
