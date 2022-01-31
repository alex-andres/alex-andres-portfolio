import styled from "styled-components";
import { useMenuContext } from "../state/Menu";
import { motion } from "framer-motion";
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

const Line = (props) => (
  <motion.line fill="transparent" strokeWidth="3" {...props} />
);

const topLine = (
  <Line
    variants={{
      closed: {
        x1: 0,
        y1: 3,
        x2: 32,
        y2: 3,
        transition: { ease: "easeOut", duration: 0.25 },
      },
      open: {
        x1: 7,
        y1: 3,
        x2: 24,
        y2: 19,
        transition: { ease: "easeIn", duration: 0.4 },
      },
    }}
    stroke="hsl(138, 42%, 65%)"
  />
);
const middleLine = (
  <Line
    stroke="hsl(175, 37%, 40%)"
    variants={{
      closed: { opacity: 1, transition: { ease: "easeOut", duration: 0.25 } },
      open: { opacity: 0, transition: { ease: "easeIn", duration: 0.4 } },
    }}
    x1="0"
    y1="11"
    x2="32"
    y2="11"
  />
);
const bottomLine = (
  <Line
    variants={{
      closed: {
        x1: 0,
        y1: 19,
        x2: 32,
        y2: 19,
        transition: { ease: "easeOut", duration: 0.25 },
      },
      open: {
        x1: 7,
        y1: 19,
        x2: 24,
        y2: 3,
        transition: { ease: "easeIn", duration: 0.4 },
      },
    }}
    stroke="hsl(181, 56%, 17%)"
  />
);

const MotionHamburger = motion(HamburgerContainer);
const MotionButton = motion(StyledButton);
export default function Hamburger({ toggle }) {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easein",
        duration: 0.4,
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        ease: "easein",
        duration: 0.25,
      },
    },
  };

  const { isMenuOpen } = useMenuContext();
  return (
    <MotionButton
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      aria-label="Mobile Navigation Button"
      onClick={toggle}
    >
      <MotionHamburger open={isMenuOpen} xmlns="http://www.w3.org/2000/svg">
        {topLine}
        {middleLine}
        {bottomLine}
      </MotionHamburger>
    </MotionButton>
  );
}
