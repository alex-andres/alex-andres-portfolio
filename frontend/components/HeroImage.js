import styled from "styled-components";
import Image from "next/image";
import headshot from "../public/images/hero/square-portrait.jpg";
import { motion } from "framer-motion";
import { useIsLarge } from "../hooks/useMediaQuery";

const HeroImageContainer = styled.div`
  margin-left: -32px;
  margin-right: -32px;
  padding-bottom: 32px;
  .image-wrapper {
    aspect-ratio: 1.58;
    overflow: hidden;
  }

  @media only screen and (min-width: 1000px) {
    padding-bottom: 0;
    .image-wrapper {
      aspect-ratio: auto;
      height: calc(100vh - 92px);
      max-height: 720px;
      /* clip-path: polygon(0 100%, 100% 100%, 100% 100%, 335px 100%); */
      /* will-change: clip-path; */
      @media only screen and (min-height: 752px) {
        /* animation: clipPath cubic-bezier(0.17, 0.15, 0.25, 1.31) forwards;
        animation-duration: 1000ms;
        animation-delay: 600ms;*/
      }
    }
    img {
      height: 100%;
    }
  }
  /* @keyframes clipPath {
    from {
      clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 335px 100%);
    }
  } */
`;

export default function HeroImage() {
  const isLarge = useIsLarge();

  const image = isLarge
    ? {
        initial: {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 0.25,
        },
        animate: {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%) ",
          scale: 1,
          transition: {
            duration: 1.6,
            ease: [0.6, 0.01, 0.01, 1],
          },
        },
      }
    : {
        initial: {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
        },
        animate: {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) ",
          transition: {
            duration: 1.6,
            ease: [0.6, 0.01, 0.01, 1],
          },
        },
      };
  return (
    <motion.div
      variants={image}
      initial="initial"
      animate="animate"
      className="hero-image-container"
    >
      <HeroImageContainer>
        <div className="image-wrapper">
          <Image src={headshot} alt="Portrait of Alex Andres" />
        </div>
      </HeroImageContainer>
    </motion.div>
  );
}
