import { getCurrentlyPlaying } from "../../library/spotify";

export default async function handler(req, res) {
  const response = await getCurrentlyPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist) => artist.name).join(", ");
  const album = song.item.album.name;
  const albumImage = song.item.album.images[2];
  const songUrl = song.item.external_urls.spotify;
  const audioType = song.currently_playing_type;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    album,
    albumImage,
    artist,
    isPlaying,
    songUrl,
    title,
    audioType,
  });
}
