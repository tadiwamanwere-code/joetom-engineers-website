# Joetom Engineers

Website for Joetom Engineers, a civil, structural, and building construction firm based in Chinhoyi, Zimbabwe.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set `GEMINI_API_KEY` in `.env` to a valid Gemini API key (used by the AI chat assistant; falls back to canned offline replies if not set).
3. Run the app:
   `npm run dev`

## Build

`npm run build` — builds the client with Vite and bundles the local dev/preview server.

## Deployment

The site is deployed on Vercel. The client is a static Vite build (`dist/`), and the AI chat assistant runs as a Vercel serverless function at `api/chat.ts`. Set the `GEMINI_API_KEY` environment variable in the Vercel project settings for the chatbot to use live AI responses.
