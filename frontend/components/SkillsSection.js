import { motion } from "framer-motion";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 64px;
  @media only screen and (min-width: 1200px) {
    padding-bottom: 128px;
  }
  h2,
  h3 {
    text-align: center;
    padding-bottom: 16px;
  }
  h2 {
    line-height: 3.125rem;
    text-align: center;
    padding-bottom: 32px;
    @media only screen and (min-width: 768px) {
      padding-bottom: 64px;
    }
  }
  p {
    font-size: 1rem;
    line-height: 1.75;
    padding-bottom: 32px;
    max-width: 768px;
    @media only screen and (min-width: 768px) {
      padding-bottom: 64px;
    }
  }
  .skill-section {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  h3 {
    font-size: 1.5rem;
    @media only screen and (min-width: 768px) {
      font-size: 1.6rem;
    }
  }
  ul {
    list-style: none;
    text-align: center;
    @media only screen and (min-width: 768px) {
      text-align: left;
    }
  }
  li {
    @media only screen and (min-width: 768px) {
      font-size: 1.125rem;
    }
    line-height: 2;
  }
  li:last-of-type {
    padding-bottom: 32px;
  }
`;

const itemVariants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.4,
    },
  },
};
const listVariants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const MotionSection = motion(StyledSection);

export default function SkillsSection() {
  return (
    <MotionSection
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ease: "easeOut", staggerChildren: 0.05 }}
    >
      <motion.h2 variants={itemVariants}>My Skills</motion.h2>
      <motion.p variants={itemVariants}>
        Web development is a vast world that has given me the opportunity to be
        a career student. Throughout my learning I have solidified my
        understanding of computer science fundamentals and web development and
        user experience best practices. Each new project I work on is an
        opportunity to further develop my skills and broaden my skillset.
      </motion.p>
      <div className="skill-section">
        <motion.div  
        initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ease: "easeOut", staggerChildren: 0.05 }}
      className="frontend">
          <motion.h3 variants={itemVariants}>Frontend & Design</motion.h3>
          <ul>
            <motion.li variants={listVariants}>Javascript ES6</motion.li>
            <motion.li variants={listVariants}>HTML5 & CSS</motion.li>
            <motion.li variants={listVariants}>
              SASS
            </motion.li>
            <motion.li variants={listVariants}>
              Styled Components
            </motion.li>
            <motion.li variants={listVariants}>
              React
            </motion.li>
            <motion.li variants={listVariants}>
              Next JS
            </motion.li>
            <motion.li variants={listVariants}>
              Gatsby
            </motion.li>
            <motion.li variants={listVariants}>
              Framer Motion
            </motion.li>
            <motion.li variants={listVariants}>
              PHP
            </motion.li>
            <motion.li variants={listVariants}>
              TypeScript
            </motion.li>
            <motion.li variants={listVariants}>SEO Best Practices</motion.li>
            <motion.li variants={listVariants}>A11y Best Practices</motion.li>
            <motion.li variants={listVariants}>Adobe XD</motion.li>
            <motion.li variants={listVariants}>Photoshop</motion.li>
            <motion.li variants={listVariants}>Illustrator</motion.li>
          </ul>
        </motion.div>
        <motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ease: "easeOut", staggerChildren: 0.05 }} className="backend">
          <motion.h3 variants={itemVariants}>Backend & Dev Tools</motion.h3>
          <ul>
            <motion.li variants={listVariants}>Node JS</motion.li>
            <motion.li variants={listVariants}>Express</motion.li>
            <motion.li variants={listVariants}>Axios</motion.li>
            <motion.li variants={listVariants}>WebPack</motion.li>
            <motion.li variants={listVariants}>SQL DBs</motion.li>
            <motion.li variants={listVariants}>NoSQL DBs</motion.li>
            <motion.li variants={listVariants}>GraphQL</motion.li>
            <motion.li variants={listVariants}>REST APIs </motion.li>
            <motion.li variants={listVariants}>VS Code</motion.li>
            <motion.li variants={listVariants}>Jest</motion.li>
            <motion.li variants={listVariants}>Selenium</motion.li>
          </ul>
        </motion.div>
      </div>
    </MotionSection>
  );
}
