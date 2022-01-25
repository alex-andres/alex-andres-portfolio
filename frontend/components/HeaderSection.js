import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 760px;
  padding-bottom: 64px;
  align-self: flex-start;
  @media only screen and (min-width: 768px) {
    padding-bottom: 128px;
  }
  h1 {
    font-size: 2.5rem;
    padding-bottom: 16px;
    @media only screen and (min-width: 768px) {
      padding-bottom: 64px;
    }
  }
`;

export default function HeaderSection({ data: { heading, body } }) {
  return (
    <StyledSection>
      <h1>{heading}</h1>
      <p>{body}</p>
    </StyledSection>
  );
}
