"use client";
import { useState } from "react";
import { getYoutubeThumbnail } from "./functions";

const CloudflareImage = ({ id, width, height, alt }: { id: string, width: number, height: number, alt?: string }) => {
  return (
    <img src={`https://imagedelivery.net/EBSSfnGYYD9-tGTmYMjDgg/${id}/public`} width={width} height={height} alt={alt} />
  );
};

export function Home() {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const url = formData.get("url") as string;
    const thumbnail = await getYoutubeThumbnail(url);
    setThumbnail(thumbnail);
  };
  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Centered Logo Only */}
      <div className="flex justify-center mb-8">
        <CloudflareImage id="25cc826d-012f-4cbe-7ab3-e5dc0255e500" width={120} height={120} alt="ThumbGrab" />
      </div>
      <h4 className="text-lg mb-8 text-pink-300 font-semibold tracking-widest neon-glow">Get the thumbnail of a <span className="text-green-400">YouTube</span> video</h4>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 bg-gradient-to-br from-pink-900/60 via-black/80 to-blue-900/60 p-8 rounded-2xl shadow-2xl border-4 border-pink-500/40">
        <input type="text" name="url" placeholder="Enter a Youtube URL" className="w-72 px-4 py-2 rounded-lg border-2 border-green-400 bg-black text-pink-200 placeholder-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-pink-500 text-lg font-mono shadow-inner" />
        <button type="submit" className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-green-400 to-blue-500 text-black font-bold text-lg shadow-lg hover:scale-105 transition-transform hover:from-pink-400 hover:to-blue-400">Get Thumbnail</button>
      </form>
      {thumbnail && (
        <div className="mt-10 animate-fade-in flex flex-col items-center">
          <img src={thumbnail} alt="Thumbnail" className="rounded-xl border-4 border-blue-400 shadow-neon90s max-w-xs" />
          <p className="mt-4 text-green-300 font-bold text-shadow-neon">Right click & save your thumbnail!</p>
        </div>
      )}
      <hr className="mt-10 w-full border-pink-800" />
      <footer className="w-full text-center py-4 bg-black text-pink-400 font-mono text-sm tracking-widest opacity-80 border-t border-pink-800">
        built with <a href="https://rwdk.com" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold underline hover:text-pink-400 transition-colors">RedwoodSDK</a>
        <span className="mx-2 text-pink-700">&bull;</span>
        <a href="https://github.com/harryhcs/thumbgrab" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold underline hover:text-pink-400 transition-colors">GitHub</a>
      </footer>
    </div>
  );
}
