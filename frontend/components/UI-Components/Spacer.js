import styled from "styled-components";

const StyledSpacer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 16px;
  }
`;

export default function Spacer() {
  return <StyledSpacer />;
}
