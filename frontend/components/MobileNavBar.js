import { useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import MobileNavMenu from "./MobileNavMenu";
import { AnimatePresence } from "framer-motion";

const StyledButton = styled.button`
  top: 12px;
  position: fixed;
  z-index: 10001;
  right: 32px;
  width: 32px;
  height: 32px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export default function MobileNavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <>
      <StyledButton
        onClick={() => {
          setShowMobileNav(!showMobileNav);
        }}
      >
        <Hamburger />
      </StyledButton>

      <AnimatePresence>
        {showMobileNav ? <MobileNavMenu /> : null}
      </AnimatePresence>
    </>
  );
}
