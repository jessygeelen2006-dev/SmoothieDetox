import type { VercelRequest, VercelResponse } from '@vercel/node';

const BEEHIIV_API_KEY = "UlResh0xfvOeJpLlRyYaD9UmmPhOqRCzv0ItMyF3I7UBO46DZEhDrVqkfrh4X7L3";
const BEEHIIV_PUB_ID = "pub_ed5cf751-5a4b-4a02-b14c-6ec9c179def6";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
