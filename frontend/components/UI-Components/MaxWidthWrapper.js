import styled from "styled-components";

const MaxWidthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 48px 16px 0px;
  @media screen and (min-width: 564px) {
    padding: 48px 32px 0px;
  }
`;

export default MaxWidthWrapper;
