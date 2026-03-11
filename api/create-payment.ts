import { VercelRequest, VercelResponse } from '@vercel/node';
import { createMollieClient } from '@mollie/api-client';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, method } = req.body;
    const apiKey = process.env.MOLLIE_API_KEY;

    // Try to get the base URL from VERCEL_URL or fallback to request headers
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const baseUrl = process.env.APP_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `${protocol}://${host}`);
    const successUrl = `${baseUrl}/success`;

    if (!apiKey || apiKey === 'undefined' || apiKey === '') {
      console.warn("MOLLIE_API_KEY is missing. Using fallback mock payment.");
      return res.status(200).json({ checkoutUrl: successUrl });
    }

    const mollieClient = createMollieClient({ apiKey });

    const amountValue = "9.95";

    const payment = await mollieClient.payments.create({
      amount: {
        currency: "EUR",
        value: amountValue,
      },
      description: "De SmoothieBijbel",
      redirectUrl: successUrl,
      method: method === "ideal" ? "ideal" : "bancontact",
      metadata: {
        email,
      },
    });

    res.status(200).json({ checkoutUrl: payment._links.checkout?.href });
  } catch (error: any) {
    console.error("Payment creation failed:", error);
    res.status(400).json({ error: error.message || "Er is een onbekende fout opgetreden bij het aanmaken van de betaling." });
  }
}
