import styled from "styled-components";
const HamburgerContainer = styled.svg`
  height: 21px;
  width: 32px;
`;

const StyledButton = styled.button`
  top: 12px;
  position: fixed;
  z-index: 10001;
  right: 16px;
  width: 32px;
  height: 32px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Line = (props) => <line fill="transparent" strokeWidth="3" {...props} />;

const topLine = (
  <Line x1="0" y1="3" x2="32" y2="3" stroke="hsl(138, 42%, 65%)" />
);
const middleLine = (
  <Line stroke="hsl(175, 37%, 40%)" x1="0" y1="11" x2="32" y2="11" />
);
const bottomLine = (
  <Line x1="0" y1="19" x2="32" y2="19" stroke="hsl(181, 56%, 17%)" />
);
export default function Hamburger({ toggle }) {
  return (
    <StyledButton aria-label="Mobile Navigation Button">
      <HamburgerContainer xmlns="http://www.w3.org/2000/svg">
        {topLine}
        {middleLine}
        {bottomLine}
      </HamburgerContainer>
    </StyledButton>
  );
}
