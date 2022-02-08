import Image from "next/image";
import styled from "styled-components";
import spotifyLogo from "../public/images/techLogos/spotify-logo.svg";
import useSWR from "swr";
import fetcher from "../library/fetcher";

const StyledSection = styled.section`
  max-width: 350px;
  background-color: var(--color-spotify-background);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 64px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 128px;
  }
  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
  }
  .card-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 12px;
  }
  .spotify-logo {
    width: 32px;
    height: 32px;
  }
  a {
    color: var(--color-text);
  }
  .song-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
  h3 {
    text-align: center;
  }
  p {
    font-size: 0.9rem;
  }
  .not-playing-message {
    width: 100%;
    text-align: center;
  }
`;

function SpotifyCard({ data: { songUrl, title, artist, albumImage } }) {
  return (
    <div className="currently-playing-container">
      <a href={songUrl} title={`Listen to ${title} by ${artist} on Spotify`}>
        <div className="song-container">
          <div className="image-container">
            <Image
              src={albumImage.url}
              height={albumImage.height}
              width={albumImage.width}
            />
          </div>
          <div className="text-container">
            <p>{title}</p>
            <p>{artist}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function SpotifyPlayingSection() {
  const { data } = useSWR("/api/spotify", fetcher);
  return (
    <StyledSection>
      <div className="card-heading">
        <Image
          className="spotify-logo"
          src={spotifyLogo}
          alt="Spotify Logo"
          height={32}
          width={32}
        />
        <h3>Currently Listening To</h3>
      </div>
      <div className="card-body">
        {data && data.isPlaying && data.audioType === "track" ? (
          <SpotifyCard data={data} />
        ) : (
          <div className="not-playing-message">
            <p>Not Currently Playing Music</p>
          </div>
        )}
      </div>
    </StyledSection>
  );
}
