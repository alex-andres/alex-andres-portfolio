import styled from "styled-components";
import Image from "next/image";
import headshot from "../public/images/mobile.jpeg";

const HeroImageContainer = styled.div`
  margin-left: -32px;
  margin-right: -32px;
  padding-bottom: 48px;
  .image-wrapper {
    height: 262px;
    overflow: hidden;
    @media (min-width: 769px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 36% 100%);
    }
  }
`;

export default function HeroImage() {
  return (
    <HeroImageContainer>
      <div className="image-wrapper">
        <Image src={headshot} alt="Portrait of Alex Andres" />
      </div>
    </HeroImageContainer>
  );
}
