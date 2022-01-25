import styled from "styled-components";
import Image from "next/image";
import headshot from "../public/images/hero/square-portrait.jpg";

const HeroImageContainer = styled.div`
  margin-left: -32px;
  margin-right: -32px;
  padding-bottom: 48px;
  .image-wrapper {
    aspect-ratio: 1.58;
    overflow: hidden;
  }

  @media only screen and (min-width: 1000px) {
    padding-bottom: 0;
    .image-wrapper {
      aspect-ratio: auto;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 330px 100%);
      height: calc(100vh - 92px);
      max-height: 720px;
    }
    img {
      height: 100%;
    }
  }
`;

export default function HeroImage() {
  return (
    <HeroImageContainer className="hero-image-container">
      <div className="image-wrapper">
        <Image src={headshot} alt="Portrait of Alex Andres" />
      </div>
    </HeroImageContainer>
  );
}
