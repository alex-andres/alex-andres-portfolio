import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLink from "./UI-Components/StyledLink";

const StyledSection = styled.section`
  padding-bottom: 128px;
  h2 {
    line-height: 1.25;
    text-align: center;
    padding-bottom: 32px;
    font-size: 2rem;
    @media only screen and (min-width: 768px){
      font-size: 2.5rem;
    }
    @media only screen and (min-width: 1201px){
      font-size: 4rem;
    }
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
  .animated-letter{
    display: inline-block;
    &.space{
      width: 8px;
    }
  }

`;

const heading = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 20, 
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.01, 1],
      duration: .8,
    },
  },
};
const paragraphAnimation = {
  initial: {
    y: 20, 
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.01, 1],
      duration: .8,
      delay: 1.8
    },
  },
};
const linkAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.01, 1],
      duration: .8,
      delay: 2.2
    },
  },
};

const MotionSection = motion(StyledSection);
const MotionLink = motion (StyledLink)

const AnimatedHeadingLetters = ({ title }) => (
  <motion.h2
    variants={heading}
    className="animated-title"
  >
    {[...title].map((letter, index) => {
      if(letter === ' '){
        return(
          <motion.span key={`${letter}-${index}`} variants={letterAnimation} className="animated-letter space">
            {` `}
          </motion.span>
        )
      }else {
        return(<motion.span key={`${letter}-${index}`} variants={letterAnimation} className="animated-letter">
          {letter}
        </motion.span>
        )
      }
      
    })}
  </motion.h2>
);

export default function LetsWorkTogetherSection() {

  return (
    <MotionSection variants={heading} initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.75 }}>
      <AnimatedHeadingLetters title={`Let's Work Together`} />
      <motion.p variants={paragraphAnimation}>
        Whether you have a question, would like to work together, or just want
        to connect, feel free to reach out.
      </motion.p>
      <StyledLink
        title="alex@aandres.dev"
        href="mailto:alex@aandres.dev"
        linkTitle={"Send me an email"}
        anchor={true}
        variants={linkAnimation}
      />
    </MotionSection>
  );
}
