import styled from "styled-components";
import Button from "./Button";
import HeroImage from "./HeroImage";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 92px;
  padding-top: 16px;
  .desktop-text {
    h1 {
      font-size: 3.375rem;
      line-height: 3.375rem;
      padding-top: 32px;
      @media only screen and (min-width: 1000px) {
        padding-top: 0;
      }
      @media only screen and (min-width: 1400px) {
        font-size: 4.5rem;
      }
    }
    h2 {
      font-size: 1.375rem;
      line-height: 1.875rem;
      padding-bottom: 48px;
    }
    p {
      display: none;
    }
    .hero-button {
      display: none;
    }
  }
  .mobile-text {
    @media only screen and (min-width: 450px) {
      width: 75%;
    }
    max-width: 768px;
    p {
      padding-bottom: 48px;
    }
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    .hero-image-container {
      max-width: 60%;
    }
    .desktop-text {
      align-self: center;
      p,
      .hero-button {
        display: block;
      }
      p {
        max-width: 428px;
        padding-bottom: 48px;
      }
    }
    .mobile-text {
      display: none;
    }
  }
`;

export default function HeroSection() {
  return (
    <StyledSection>
      <div className="desktop-text">
        <h1>Alex Andres</h1>
        <h2>Web Developer & Designer</h2>
        <p>
          Hi, I’m Alex, a full stack web developer and ux designer with a
          passion for building intuitive and performant websites. By using the
          latest tech stacks, I can provide my clients and their users with the
          experience they desire.
        </p>
        <Button
          className="hero-button"
          path={"/about"}
          buttonText={"More About Me"}
        />
      </div>
      <HeroImage />
      <div className="mobile-text">
        <p>
          Hi, I’m Alex, a full stack web developer and ux designer with a
          passion for building intuitive and performant websites. By using the
          latest tech stacks, I can provide my clients and their users with the
          experience they desire.
        </p>
        <Button
          className="hero-button"
          buttonText={"More About Me"}
          path={"/about"}
        />
      </div>
    </StyledSection>
  );
}
