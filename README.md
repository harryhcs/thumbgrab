# ThumbGrab – YouTube Thumbnail Grabber

ThumbGrab is a tiny edge-native web app that lets you quickly grab the full-resolution thumbnail of any YouTube video. Paste a video URL, hit **Get Thumbnail**, and instantly receive a downloadable image.

## How it works

1. The client (React + Tailwind) collects a YouTube URL.
2. It calls the RedwoodSDK server function `getYoutubeThumbnail`, which:
   - Extracts the video ID from the URL.
   - Builds the high-resolution thumbnail URL (e.g. `https://img.youtube.com/vi/<id>/maxresdefault.jpg`).
3. The client renders the thumbnail and lets you right-click → **Save Image**.

Everything runs on Cloudflare Workers via **RedwoodSDK**, so there are no cold starts and no origin server to manage.

## Tech stack

- **RedwoodSDK** – full-stack framework on Cloudflare Workers
- **React + Vite** – UI & bundling
- **Tailwind CSS** – styling
- **Cloudflare Images** – hosting the app logo

## Local development

```bash
pnpm install   # install deps
pnpm dev       # start Vite + RedwoodSDK dev server
```

Open the URL printed in the terminal (usually `http://localhost:5173/`) and start grabbing thumbnails.

## Deployment

Refer to the official RedwoodSDK docs for deploying to Cloudflare Pages/Workers:
https://docs.rwsdk.com

A production build generally looks like:

```bash
pnpm deploy  # pushes to Cloudflare (requires config)
```

## Contributing

PRs and issues are welcome! Clone the repo, create a feature branch, and open a pull request.

## License

MIT © 2024 Herman Stander
