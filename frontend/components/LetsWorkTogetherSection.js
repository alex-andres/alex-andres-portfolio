import styled from "styled-components";
import StyledLink from "./UI-Components/StyledLink";

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
    text-decoration: underline;
    font-size: 1.4rem;
    color: var(--aqua);
  }
`;

export default function LetsWorkTogetherSection() {
  return (
    <StyledSection>
      <h2>Let&apos;s Work Together</h2>
      <p>
        Whether you have a question, would like to work together, or just want
        to connect, feel free to reach out.
      </p>
      <StyledLink
        title="alex@aandres.dev"
        href="mailto:alex@aandres.dev"
        linkTitle={"Send me an email"}
        anchor={true}
      />
    </StyledSection>
  );
}
