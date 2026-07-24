import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini Chatbot proxy
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const rawApiKey = process.env.GEMINI_API_KEY;
      const apiKey = rawApiKey ? rawApiKey.trim() : "";
      const isPlaceholder = !apiKey || apiKey === "undefined" || apiKey === "null" || apiKey === "YOUR_API_KEY" || apiKey === "";
      if (isPlaceholder) {
        console.warn("GEMINI_API_KEY is not defined or is a placeholder. Falling back to offline responses.");
        const lowerMsg = message.toLowerCase();
        let fallbackReply = "Thanks for reaching out to Alstyle Construction. Our AI assistant is offline right now, but here's a quick answer. ";

        if (lowerMsg.includes("project") || lowerMsg.includes("gallery") || lowerMsg.includes("work") || lowerMsg.includes("photo")) {
          fallbackReply += "You can see examples of our ceiling work in the gallery and projects sections above — gypsum bulkheads, LED cove lighting, PVC, suspended grids, and more. For references, just get in touch.";
        } else if (lowerMsg.includes("contact") || lowerMsg.includes("quote") || lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("estimate") || lowerMsg.includes("book")) {
          fallbackReply += "Pricing depends on room size, ceiling type, and finish. For a free quote, fill in the form at the bottom of the page or call/WhatsApp us on +263 77 358 3427.";
        } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
          fallbackReply = "Hi! I'm Alstyle AI. We install and renovate ceilings across Zimbabwe — PVC, gypsum, suspended ceilings, cove lighting, and repairs. How can I help?";
        } else {
          fallbackReply += "We specialise in PVC ceilings, gypsum ceilings, suspended/drop ceilings, cove & LED lighting, ceiling repairs & renovations, and cornices & finishes. Tell us what you need and we'll help.";
        }
        return res.json({ text: fallbackReply });
      }

      // Initialize Gemini Client
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // System instruction for Alstyle Construction Assistant role
      const systemInstruction = `You are "Alstyle AI", the friendly virtual assistant for Alstyle Construction, a ceiling installation and renovation company serving clients across Zimbabwe.
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

      // Reconstruct history in Gemini format
      const contents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          const role = turn.role === "user" ? "user" : "model";
          contents.push({
            role: role,
            parts: [{ text: turn.text }],
          });
        }
      }
      // Add latest message
      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text || "I was unable to formulate a response. Please try again." });
    } catch (err: any) {
      console.error("Gemini Error:", err);
      // Any AI provider failure degrades to the offline fallback so visitors always get a useful reply.
      const lowerMsg = String(req.body?.message || "").toLowerCase();
      let fallbackReply = "Thanks for reaching out to Alstyle Construction. Our AI assistant is offline right now, but here's a quick answer. ";
      if (lowerMsg.includes("project") || lowerMsg.includes("gallery") || lowerMsg.includes("work") || lowerMsg.includes("photo")) {
        fallbackReply += "You can see examples of our ceiling work in the gallery and projects sections above — gypsum bulkheads, LED cove lighting, PVC, suspended grids, and more. For references, just get in touch.";
      } else if (lowerMsg.includes("contact") || lowerMsg.includes("quote") || lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("estimate") || lowerMsg.includes("book")) {
        fallbackReply += "Pricing depends on room size, ceiling type, and finish. For a free quote, fill in the form at the bottom of the page or call/WhatsApp us on +263 77 358 3427.";
      } else {
        fallbackReply += "We specialise in PVC ceilings, gypsum ceilings, suspended/drop ceilings, cove & LED lighting, ceiling repairs & renovations, and cornices & finishes. Tell us what you need and we'll help.";
      }
      res.json({ text: fallbackReply });
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
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
