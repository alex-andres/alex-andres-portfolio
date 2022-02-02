import { motion } from "framer-motion";
import styled from "styled-components";

const StyledSection = styled.section`
  display: block;
  max-width: 468px;
  padding-bottom: 64px;
  align-self: flex-start;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    padding-bottom: 128px;
  }
  h1 {
    font-size: 2.5rem;
    padding-bottom: 16px;
    text-align: center;
    @media only screen and (min-width: 768px) {
      padding-bottom: 64px;
    }
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
      duration: 0.5,
    },
  },
};

const MotionSection = motion(StyledSection);
export default function HeaderSection({ data: { heading, body } }) {
  return (
    <MotionSection
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h1 variants={itemVariants}>{heading}</motion.h1>
      <motion.p variants={itemVariants}>{body}</motion.p>
    </MotionSection>
  );
}
