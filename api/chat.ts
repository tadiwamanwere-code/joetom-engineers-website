import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are "Alstyle AI", the friendly virtual assistant for Alstyle Construction, a ceiling installation and renovation company serving clients across Zimbabwe.
Our details:
- Service area: Nationwide across Zimbabwe — we come to you
- Phone / WhatsApp: +263 77 358 3427
- Other numbers: +263 71 905 4935, +263 71 711 5481
- Facebook: Alstyle Construction
- Working hours: Monday - Saturday, 8:00 AM - 5:00 PM (CAT)

What we do (ceilings and ceiling-related finishes only):
1. PVC Ceilings — waterproof, durable, low-maintenance; ideal for kitchens, bathrooms, and humid rooms
2. Gypsum Ceilings — smooth seamless finish, bulkheads, cove detailing, ready for recessed lighting
3. Suspended / Drop Ceilings — grid systems for offices, shops, and commercial spaces
4. Cove & LED Lighting — recessed downlights and LED cove/strip lighting designed into the ceiling
5. Ceiling Repairs & Renovations — sagging, cracked, or water-damaged ceilings, re-skimming, full renovations
6. Cornices & Finishes — decorative cornices, trims, skimming and neat paint finishes

How we work: Free consultation & measurement → fixed written quote & design → installation → finishing, lighting, clean-up, and a final walkthrough.

Do not invent prices, specific past clients, timelines, or guarantees you were not given. If asked about price, explain that it depends on the room size, ceiling type, and finish, and that the best next step is a free quote — point them to the quote form at the bottom of the page or to call/WhatsApp +263 77 358 3427.

Keep replies friendly, clear, and short. Stay focused on ceilings; if asked about general building work we don't offer, say Alstyle specialises in ceilings and invite them to get in touch.`;

function fallbackReply(message: string): string {
  const lowerMsg = message.toLowerCase();
  let reply = "Thanks for reaching out to Alstyle Construction. Our AI assistant is offline right now, but here's a quick answer. ";

  if (lowerMsg.includes("project") || lowerMsg.includes("gallery") || lowerMsg.includes("work") || lowerMsg.includes("photo")) {
    reply += "You can see examples of our ceiling work in the gallery and projects sections above — gypsum bulkheads, LED cove lighting, PVC, suspended grids, and more. For references, just get in touch.";
  } else if (lowerMsg.includes("contact") || lowerMsg.includes("quote") || lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("estimate") || lowerMsg.includes("book")) {
    reply += "Pricing depends on room size, ceiling type, and finish. For a free quote, fill in the form at the bottom of the page or call/WhatsApp us on +263 77 358 3427.";
  } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
    reply = "Hi! I'm Alstyle AI. We install and renovate ceilings across Zimbabwe — PVC, gypsum, suspended ceilings, cove lighting, and repairs. How can I help?";
  } else {
    reply += "We specialise in PVC ceilings, gypsum ceilings, suspended/drop ceilings, cove & LED lighting, ceiling repairs & renovations, and cornices & finishes. Tell us what you need and we'll help.";
  }
  return reply;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { message, history } = req.body || {};
    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    const rawApiKey = process.env.GEMINI_API_KEY;
    const apiKey = rawApiKey ? rawApiKey.trim() : "";
    const isPlaceholder = !apiKey || apiKey === "undefined" || apiKey === "null" || apiKey === "YOUR_API_KEY";

    if (isPlaceholder) {
      res.status(200).json({ text: fallbackReply(message) });
      return;
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: { headers: { "User-Agent": "alstyle-website" } },
    });

    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const turn of history) {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }],
        });
      }
    }
    contents.push({ role: "user", parts: [{ text: message }] });

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("TIMEOUT")), 9000)
    );

    const response: any = await Promise.race([
      ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      }),
      timeoutPromise,
    ]);

    res.status(200).json({ text: response.text || "I was unable to formulate a response. Please try again." });
  } catch (err: any) {
    console.error("Gemini Error:", err);
    // Any AI provider failure (timeout, overload, invalid key, etc.) degrades to the offline
    // fallback so visitors always get a useful reply instead of a raw error.
    const { message } = req.body || {};
    res.status(200).json({ text: fallbackReply(message || "") });
  }
}
