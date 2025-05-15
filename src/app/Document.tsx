import { TurnstileScript } from "rwsdk/turnstile";

import styles from "./styles.css?url";

export const Document: React.FC<{
  children: React.ReactNode;
  nonce?: string;
}> = ({ children, nonce }) => {
  return (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ThumbGrab - Get the thumbnail of a YouTube video</title>
      <meta name="description" content="ThumbGrab is a simple tool to get the thumbnail of a YouTube video. It's built with RedwoodSDK and TailwindCSS." />
      <meta property="og:title" content="ThumbGrab - Get the thumbnail of a YouTube video" />
      <meta property="og:description" content="ThumbGrab is a simple tool to get the thumbnail of a YouTube video. It's built with RedwoodSDK and TailwindCSS." />
      <meta property="og:image" content="https://imagedelivery.net/EBSSfnGYYD9-tGTmYMjDgg/93c52b3a-974b-4b2b-2ea6-047713cd4200/public" />
      <meta property="og:url" content="https://thumbgrab.rwsdk.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ThumbGrab" />
      <TurnstileScript />
      <link rel="stylesheet" href={styles} />
      <link rel="modulepreload" href="/src/client.tsx" />
    </head>
    <body>
      <div id="root">{children}</div>
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
  );
};
