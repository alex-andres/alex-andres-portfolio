// import { useState } from "react";
// import styled from "styled-components";
// import Hamburger from "./Hamburger";
// import MobileNavMenu from "./MobileNavMenu";
// import { AnimatePresence } from "framer-motion";

// const StyledButton = styled.button`
//   top: 12px;
//   position: fixed;
//   z-index: 10001;
//   right: 16px;
//   width: 32px;
//   height: 32px;
//   @media screen and (min-width: 769px) {
//     display: none;
//   }
// `;

// export default function MobileNavBar() {
//   const [showMobileNav, setShowMobileNav] = useState(false);
//   return (
//     <>
//       <StyledButton
//         onClick={() => {
//           setShowMobileNav(!showMobileNav);
//         }}
//       >
//         <Hamburger />
//       </StyledButton>

//       <AnimatePresence>
//         {showMobileNav ? <MobileNavMenu /> : null}
//       </AnimatePresence>
//     </>
//   );
// }
import Hamburger from "./Hamburger";
import MobileNavMenu from "./MobileNavMenu";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useMenuContext } from "../state/Menu";
import Portal from "@reach/portal";

export default function MobileNavBar() {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const ref = useRef(null);
  const handleTabKey = (e) => {
    if (ref && ref.current) {
      const inputModalElements = ref.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const primaryMenuButton = document.querySelector(".hamburger-react");
      const firstElement = inputModalElements[0];
      const lastElement = inputModalElements[inputModalElements.length - 1];

      switch (document.activeElement) {
        case lastElement: {
          if (!e.shiftKey) {
            primaryMenuButton.focus();
            return e.preventDefault();
          }
          break;
        }
        case firstElement: {
          if (e.shiftKey) {
            primaryMenuButton.focus();
            return e.preventDefault();
          }
          break;
        }
        case primaryMenuButton: {
          if (e.shiftKey) {
            lastElement.focus();
          } else {
            firstElement.focus();
          }
          return e.preventDefault();
        }
        default:
          break;
      }
    }
  };

  const keyListenersMap = new Map([
    [27, toggleMenu],
    [9, handleTabKey],
  ]);

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }

    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  }, [keyListenersMap]);

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
  console.log(isMenuOpen);
  return (
    <>
      <Portal>
        <StyledButton onClick={() => toggleMenu()}>
          <Hamburger />
        </StyledButton>

        {isMenuOpen && <MobileNavMenu ref={ref} />}
      </Portal>
    </>
  );
}
