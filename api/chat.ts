import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are "Joetom AI", the professional virtual assistant for Joetom Engineers, a civil engineering, structural works, and building construction firm based in Chinhoyi, Zimbabwe.
Our details:
- Location: 279 Ethlyn House, Chinhoyi, Zimbabwe
- Contact Phone: +263 77 351 4902
- Contact Email: info@joetomengineers.co.zw
- Managing Director: Lovemore Munguri
- Working Hours: Monday - Saturday: 7:30 AM - 5:00 PM (CAT)

Key capabilities and services:
1. Building Construction (Residential, Commercial, Industrial)
2. Civil & Structural Works (Concrete design, columns, beams, foundation modeling)
3. Steel Fixing & Concreting (Reinforcements, slab casting, concrete)
4. Brickwork & Finishing Works (Bricklaying, plastering, decorative finishing)
5. Roads, Paving & Drainage (Stormwater management, interlocking pavers, grading, drainage modeling)
6. Water & Sewer Reticulation (Municipal grids, industrial piping supply grids)
7. Bills of Quantities (BoQs) & Project Management (Costings, contract supervision)

Current project: Chinhoyi Mall — a commercial retail development in Chinhoyi's CBD, currently in progress, for client Mrs Mxegi. Do not invent other past projects, client names, dollar figures, or credentials that were not given to you here — if asked for details you don't have, say the portfolio is being updated and suggest contacting the office directly.

Your tone should be professional, confident, precise, and polite. Avoid verbose filler. Focus on construction quality, structural integrity, and our engineering standards. If asked how to initiate a consultation or request a quote, politely guide them to the inquiry form at the bottom of the page or provide our direct email and phone contact details.`;

function fallbackReply(message: string): string {
  const lowerMsg = message.toLowerCase();
  let reply = "Thank you for reaching out to Joetom Engineers. Currently, our AI assistant is running in offline demo mode. ";

  if (lowerMsg.includes("project") || lowerMsg.includes("build") || lowerMsg.includes("mall") || lowerMsg.includes("portfolio")) {
    reply += "We're currently building the Chinhoyi Mall, a commercial retail development in Chinhoyi's CBD. We're adding more completed and in-progress projects to our portfolio as they're finished.";
  } else if (lowerMsg.includes("contact") || lowerMsg.includes("quote") || lowerMsg.includes("price") || lowerMsg.includes("consult") || lowerMsg.includes("estimate") || lowerMsg.includes("hire")) {
    reply += "To get a comprehensive structural blueprint review, Bills of Quantities (BoQ) calculation, or project quotation, please fill out our inquiry form at the bottom of the page, or contact us directly at info@joetomengineers.co.zw or +263 77 351 4902.";
  } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
    reply = "Welcome to Joetom Engineers. I am Joetom AI, your civil and structural engineering assistant. How can I assist you with your construction, civil works, or project management inquiries today?";
  } else {
    reply += "We specialize in Building Construction, Civil & Structural Works, Steel Fixing & Concreting, Brickwork & Finishing, Roads, Paving, Water & Sewer Reticulation, and BoQ Project Management. Let us know if you would like details on our services or active builds.";
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
      httpOptions: { headers: { "User-Agent": "joetom-website" } },
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
