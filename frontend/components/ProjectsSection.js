import styled from "styled-components";
import Card from "./Card";
import saaa from "../public/images/projectCards/saaa.jpg";
import smsi from "../public/images/projectCards/smsi.jpg";
import al4m from "../public/images/projectCards/al4m.jpg";
import aadp from "../public/images/projectCards/aadp.jpg";
import { motion } from "framer-motion";

const StyledSection = styled.section`
  padding-bottom: 128px;
  h2 {
    text-align: center;
    padding-bottom: 48px;
    ::before {
      display: block;
      content: "";
      margin-top: -100px;
      height: 100px;
      visibility: hidden;
      pointer-events: none;
    }
  }
  .card-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;
    @media only screen and (min-width: 748px) {
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (min-width: 1164px) {
      grid-column-gap: 128px;
      grid-row-gap: 64px;
    }
    .project-card {
      width: 100%;
      max-width: 342px;
      .image-wrapper {
        margin-bottom: 24px;
        aspect-ratio: 1.2;
        position: relative;
        object-fit: cover;
      }
      h3 {
        font-size: 1.5rem;
        padding-bottom: 16px;
        @media only screen and (min-width: 748px) {
          paddin-bottom: 24px;
        }
      }
      p {
        font-size: 1rem;
        color: var(--darkgrey);
        padding-bottom: 18px;
        @media only screen and (min-width: 748px) {
          padding-bottom: 26px;
        }
      }
      @media only screen and (min-width: 748px) {
        max-width: 518px;
        .image-wrapper {
          aspect-ratio: 1.5;
        }
      }
    }
  }
`;
const cardData = [
  {
    title: "Sabrina Andres Art Advisory",
    imageSrc: saaa,
    description:
      "Custom Business Website designed with Adobe XD, built with Gatsby, Emotion CSS, Framer Motion, GraphQL, Contentful, Netlify and multiple integrated APIs",
    path: "/projects/saaa",
  },
  {
    title: "Sheet Metal Systems Inc.",
    imageSrc: smsi,
    description:
      "Custom Business Website designed with Adobe XD, built with Gatsby, Styled Components, Framer Motion, GraphQL, Sanity, Netlify and multiple integrated APIs",
    path: "/projects/smsi",
  },
  {
    title: "Asher Luzatto for Mayor",
    imageSrc: al4m,
    description:
      "Los Angeles Mayoral Campaign Website built with NextJS, Styled Components, Node, Firebase Functions, Firestore, and Firebase Hosting with multiple integrated APIs",
    path: "/projects/al4m",
  },
  {
    title: "Alex Andres Dev Portfolio",
    imageSrc: aadp,
    description:
      "Portfolio Website built with NextJS, TypeScript, MDX,  Tailwind, Framer Motion, GraphQL, Apollo, KeystoneJS, Node, and Vercel with multiple integrated APIs",
    path: "/projects/aadp",
  },
];

const container = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export default function ProjectsSection() {
  const projectCards = cardData.map((card) => (
    <Card
      title={card.title}
      imageSrc={card.imageSrc}
      alt={`Desktop and Mobile Mockups of ${card.title}`}
      description={card.description}
      buttonText="View Project"
      path={card.path}
      className="project-card"
      key={card.title}
    />
  ));
  return (
    <StyledSection>
      <h2 id="projects">Projects</h2>
      <motion.div
        variants={container}
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="card-container"
      >
        {projectCards}
      </motion.div>
    </StyledSection>
  );
}
