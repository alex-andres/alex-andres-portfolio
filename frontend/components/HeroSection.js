import styled from "styled-components";
import Button from "./Button";
import HeroImage from "./HeroImage";
import { motion, AnimatePresence } from "framer-motion";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: -48px;
  margin-left: -32px;
  margin-right: -32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 92px;
  padding-top: 16px;
  .desktop-text {
    h1 {
      font-size: 3.375rem;
      line-height: 3.375rem;
      @media only screen and (min-width: 1000px) {
        padding-top: 0;
      }
      @media only screen and (min-width: 1400px) {
        font-size: 4.5rem;
      }
    }
    h2 {
      font-size: 1.375rem;
      line-height: 1.875rem;
      padding-bottom: 32px;
    }
    p {
      display: none;
    }
    .hero-button {
      display: none;
    }
  }
  .mobile-text {
    @media only screen and (min-width: 450px) {
      width: 75%;
    }
    max-width: 768px;
    p {
      padding-bottom: 32px;
    }
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    .hero-image-container {
      max-width: 60%;
    }
    .desktop-text {
      align-self: center;
      p,
      .hero-button {
        display: block;
      }
      p {
        max-width: 428px;
        padding-bottom: 48px;
        line-height: 1.75;
      }
    }
    .mobile-text {
      display: none;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    delayChildren: 0.4,
    delay: 2,
  },
};

const item = {
  hidden: (custom) => ({ opacity: 0, x: custom * -250 }),
  show: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.05,
      duration: custom * 0.3,
      ease: [0.6, 0.01, 0.01, 1],
    },
  }),
};

export default function HeroSection() {
  return (
    <StyledSection>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="desktop-text"
      >
        <motion.h1 custom={3} variants={item}>
          Alex Andres
        </motion.h1>
        <motion.h2 custom={3.5} variants={item}>
          Web Developer
        </motion.h2>
        <motion.p custom={3.75} variants={item}>
          Hi, I’m Alex, a full stack web developer with a passion for building
          intuitive and performant websites and web apps.
        </motion.p>
        <Button
          variants={item}
          custom={4}
          className="hero-button"
          path={"/about"}
          buttonText={"Learn More About Me"}
          title="Link to About Me Page"
        />
        {/* <motion.button variants={item}>test</motion.button> */}
      </motion.div>
      <HeroImage />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mobile-text"
      >
        <motion.p custom={3.75} variants={item}>
          Hi, I’m Alex, a full stack web developer and ux designer with a
          passion for building intuitive and performant websites and web apps.
        </motion.p>
        <Button
          variants={item}
          custom={4}
          className="hero-button"
          path={"/about"}
          buttonText={"Learn More About Me"}
          title="Link to About Me Page"
        />
      </motion.div>
    </StyledSection>
  );
}
