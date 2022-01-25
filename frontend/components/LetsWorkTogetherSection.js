import styled from "styled-components";

const StyledSection = styled.section`
  padding-bottom: 128px;
  h2 {
    line-height: 1.25;
    text-align: center;
    padding-bottom: 32px;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.5;
    max-width: 768px;
    padding-bottom: 32px;
  }
  a {
    color: var(--aqua);
    border-bottom: var(--aqua) solid 2.75px;
    font-size: 1.875rem;
  }
`;

export default function LetsWorkTogetherSection() {
  return (
    <StyledSection>
      <h2>Lets Work Together</h2>
      <p>
        Whether you have a question, would like to work together, or just want
        to connect, feel free to reach out.
      </p>
      <a href="mailto:alex@aandres.dev">alex@aandres.dev</a>
    </StyledSection>
  );
}
