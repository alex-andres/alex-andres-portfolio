import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "./Logo";

const StyledLoadingAnimation = styled.div`
  background-color: var(--black);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
`;

// const AnimationContainer = styled(motion.div)`

// `;

const StyledIcon = styled(motion.svg)`
  width: 50vw;
  height: auto;
  /* .path {
    fill: none;
    stroke: var(--white);
    stroke-width: 5px;
  } */
  @media screen and (min-width: 768px) {
    width: 25vw;
  }
`;

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function LoadingAnimation() {
  return (
    <StyledLoadingAnimation>
      <StyledIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57.1716 50.3499"
        shapeRendering="geometricPrecision"
        initial="hidden"
        animate="visible"
        key="svg"
      >
        <motion.path
          key="path1"
          variants={{
            hidden: {
              opacity: 0,
              pathLength: 0,
            },
            visible: {
              opacity: 1,
              pathLenght: 1,
              transition: {
                transition: {
                  pathLength: {
                    delay: 0.4,
                    type: "spring",
                    duration: 1.5,
                    bounce: 0,
                  },
                  opacity: { duration: 1 },
                },
              },
            },
          }}
          className="path"
          fill="#134243"
          d="M44.695 46.371h-2.569L26.191 12.013h-.448L9.808 46.371h-2.57L24.229 9.732h3.476l16.99 36.639z"
        />
        <motion.path
          key="path2"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 1,
                opacity: { duration: 1 },
              },
            },
          }}
          className="path"
          fill="#418c86"
          d="M25.967 21.57L13.572 50.342 0 50.35 23.488 0h5.011l21.456 46.371h-2.556l-20.37-44.03-2.051-.033L3.685 47.992h8.37l11.314-26.304 2.598-.118z"
        />
        <motion.path
          key="path3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 2,
                opacity: { duration: 1 },
              },
            },
          }}
          className="path"
          fill="#80cb96"
          d="M42.879 48.013l1.078 2.326h13.215L33.691 0h-2.565l22.396 48.014-10.643-.001z"
        />
      </StyledIcon>
    </StyledLoadingAnimation>
  );
}
