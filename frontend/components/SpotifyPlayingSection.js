import Image from "next/image";
import styled from "styled-components";
import spotifyLogo from "../public/images/techLogos/spotify-logo.svg";

const StyledSection = styled.section`
  max-width: 364px;
  background-color: var(--color-spotify-background);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 64px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 128px;
  }
  .card-body {
    display: flex;
    align-items: center;
    gap: 16px;
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
    text-align: center;
  }
`;

function SpotifyCard({ currentSong }) {
  return (
    <div className="currently-playing-container">
      <div className="song-container">
        <div className="image-container">
          <Image
            src={currentSong.item.album.images[2].url}
            height={currentSong.item.album.images[2].height}
            width={currentSong.item.album.images[2].width}
          />
        </div>
        <div className="text-container">
          <p>{currentSong.item.name}</p>
          <p>{currentSong.item.artists[0].name}</p>
        </div>
      </div>
    </div>
  );
}

export default function SpotifyPlayingSection({ currentSong }) {
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
        {currentSong.is_playing &&
        currentSong.currently_playing_type === "track" ? (
          <SpotifyCard currentSong={currentSong} />
        ) : (
          <div className="not-playing-message">
            <p>Not Currently Playing Music</p>
          </div>
        )}
      </div>
    </StyledSection>
  );
}
