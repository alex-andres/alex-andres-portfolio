import styled from "styled-components";
import Button from "./Button";
import HeroImage from "./HeroImage";

const StyledSection = styled.section`
  padding-left: 32px;
  padding-right: 32px;
  h1 {
    font-size: 3.375rem;
    line-height: 3.375rem;
    padding-top: 32px;
  }
  h2 {
    font-size: 1.375rem;
    line-height: 1.875rem;
    padding-bottom: 48px;
  }
  p {
    line-height: 2;
    padding-bottom: 48px;
  }
`;

export default function HeroSection() {
  return (
    <StyledSection>
      <h1>Alex Andres</h1>
      <h2>Web Developer & Designer</h2>
      <HeroImage />
      <p>
        Hi, I’m Alex, a full stack web developer and ux designer with a passion
        for building intuitive and performant websites. By using the latest tech
        stacks, I can provide my clients and their users with the experience
        they desire.
      </p>
      <Button buttonText={"More About Me"} />
    </StyledSection>
  );
}
