"use server";

export async function getYoutubeThumbnail(url: string) {

  // https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
  // Use regex to extract the videoId from the v parameter in the URL
  let videoId = null;
  // Try to match standard YouTube URL
  const matchStandard = url.match(/[?&]v=([^&#]+)/);
  if (matchStandard) {
    videoId = matchStandard[1];
  } else {
    // Try to match shortened youtu.be URL
    const matchShort = url.match(/youtu\.be\/([^?&#]+)/);
    if (matchShort) {
      videoId = matchShort[1];
    }
  }
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  return thumbnail;
}