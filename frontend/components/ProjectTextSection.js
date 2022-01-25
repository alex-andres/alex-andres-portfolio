import styled from "styled-components";

const StyledSection = styled.section`
  padding-bottom: 64px;
  max-width: 812px;
  @media only screen and (min-width: 960px) {
    padding-bottom: 128px;
  }
  h2 {
    font-size: 1.875rem;
    padding-bottom: 32px;
    text-align: center;
    @media only screen and (min-width: 960px) {
      padding-bottom: 48px;
    }
  }
  p {
    padding-bottom: 16px;
  }
`;

export default function ProjectTextSection({ data: { heading, body } }) {
  const bodyParagraphs = body.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));
  return (
    <StyledSection>
      <h2>{heading}</h2>
      <div>{bodyParagraphs}</div>
    </StyledSection>
  );
}
