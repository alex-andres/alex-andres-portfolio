import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

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

const StyledSection = styled.section`
  padding-bottom: 64px;
  .process-row {
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    &:last-of-type {
      padding-bottom: 0;
    }
    ::before {
      display: block;
      content: "";
      margin-top: -100px;
      height: 100px;
      visibility: hidden;
      pointer-events: none;
    }
    @media only screen and (min-width: 768px) {
      &:nth-of-type(even) {
        .image-container {
          order: 2;
        }
        .text-container {
          margin-left: -64px;
        }
      }
      &:nth-of-type(odd) {
        .image-container {
          margin-left: -64px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 128px;
    .process-row {
      flex-direction: row;
      gap: 64px;
      max-width: 1200px;
      padding-bottom: 64px;

      @media only screen and (min-width: 768px) {
        padding-bottom: 128px;
      }
    }
  }
  h1 {
    font-size: 2.5rem;
    padding-bottom: 32px;
    @media only screen and (min-width: 768px) {
      padding-bottom: 64px;
    }
  }
  .image-container {
    display: grid;
    width: 100%;
    min-height: 200px;
    padding-bottom: 32px;
    @media only screen and (min-width: 768px) {
      width: 50%;
      aspect-ratio: 0.75;
      padding-bottom: 0;
    }
  }
  .image-wrapper {
    grid-area: 1 / 1;
    position: relative;
    img {
      object-fit: cover;
    }
  }
  .heading-wrapper {
    grid-area: 1 / 1;
    background-color: hsla(0, 0%, 0%, 30%);
    display: grid;
    position: relative;
    place-items: center;
    height: 100%;
    h2 {
      font-size: 1.5rem;
      color: var(--white);
      @media only screen and (min-width: 768px) {
        font-size: 2.25rem;
      }
    }
  }
  .heading-4 {
    background-color: hsla(0, 0%, 100%, 10%);
  }
  .number-container {
    grid-area: 1 / 1;
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 20rem;
    color: hsla(0, 0%, 0%, 40%);
  }
  .number-4 {
    color: hsl(0, 0%, 0%);
  }
  .text-container {
    p {
      padding-bottom: 16px;
      &:last-of-type {
        padding-bottom: 0;
      }
    }
    @media only screen and (min-width: 768px) {
      width: 50%;
      padding-top: 32px;
      padding-bottom: 32px;
    }
  }
`;

export default function ImageTextSection({ data, about }) {
  const processCards = data.map((card, index) => {
    const bodyParagraphs = card.body.map((text, index) => {
      return <p key={index}>{text}</p>;
    });
    const id = card.title.toLowerCase();
    if (!about) {
      return (
        <motion.article
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2, staggerChildren: 0.15 }}
          key={card.title}
          className="process-row"
          id={id}
        >
          <motion.div variants={itemVariants} className="image-container">
            <div className="image-wrapper">
              <Image
                src={card.src}
                alt={`${card.title} process image`}
                layout="fill"
              />
            </div>
            <div className={`number-${index + 1} number-container`}>
              {index + 1}
            </div>
            <div className={`heading-wrapper heading-${index + 1}`}>
              <h2>{card.title}</h2>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-container">
            {bodyParagraphs}
          </motion.div>
        </motion.article>
      );
    } else {
      return (
        <motion.article
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, staggerChildren: 0.15 }}
          key={card.title}
          className="process-row"
          id={id}
        >
          <motion.div variants={itemVariants} className="image-container">
            <div className="image-wrapper">
              <Image
                src={card.src}
                alt={`${card.title} process image`}
                layout="fill"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-container">
            {bodyParagraphs}
          </motion.div>
        </motion.article>
      );
    }
  });
  return <StyledSection>{processCards}</StyledSection>;
}
