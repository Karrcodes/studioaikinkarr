# Framer Proxy

This is a simple Next.js app that proxies all requests to your Framer site at `studioaikinkarr.framer.website`.

## Why?

- Keep editing in Framer (no re-exports needed)
- Host on Vercel with your custom domain for free
- Bypass Framer's $5-20/month domain fee

## How it works

All requests to your custom domain → Vercel (free) → Framer site → User

## Deploy to Vercel

```bash
npm install
vercel
```

Then connect your custom domain in the Vercel dashboard.

## Cost

**$0/month** - Completely free!
