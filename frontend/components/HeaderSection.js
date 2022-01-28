import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 468px;
  padding-bottom: 64px;
  align-self: flex-start;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    padding-bottom: 128px;
  }
  h1 {
    font-size: 2.5rem;
    padding-bottom: 16px;
    text-align: center;
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
