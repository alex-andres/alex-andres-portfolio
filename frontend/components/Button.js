import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  background-color: var(--seaFoam);
  color: var(--black);
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: var(--shadow-elevation-medium);
  font-size: 1.375rem;
  line-height: 1.375rem;
  width: max-content;
  height: max-content;
  transition: box-shadow 1000ms;
  :hover {
    box-shadow: var(--shadow-elevation-low);
    transition: box-shadow 300ms;
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--black);
`;
const Animated = styled.span`
  color: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: clip-path 1000ms;
  ${StyledButtonContainer}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }
`;

export default function Button({
  buttonText,
  className,
  path,
  variants,
  custom,
}) {
  return (
    <motion.div variants={variants} custom={custom}>
      <Link href={path}>
        <a>
          <StyledButtonContainer className={className}>
            <StyledButton>
              {buttonText} <Animated aria-hidden={true}>{buttonText}</Animated>
            </StyledButton>
          </StyledButtonContainer>
        </a>
      </Link>
    </motion.div>
  );
}
