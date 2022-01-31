import { motion } from "framer-motion";
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
    font-size: 1rem;
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

const heading = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.01, 1],
      duration: 1,
    },
  },
};

const MotionSection = motion(StyledSection);

export default function LetsWorkTogetherSection() {
  const AnimatedHeadingLetters = ({ title }) => (
    <motion.h2
      variants={heading}
      initial="initial"
      animate="animate"
      className="animated-title"
    >
      {[...title].map((letter) => (
        <motion.span variants={letterAnimation} className="animated-letter">
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );

  return (
    <MotionSection variants={heading}>
      <AnimatedHeadingLetters title="Let's Work Together" />
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
    </MotionSection>
  );
}
