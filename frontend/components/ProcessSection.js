import styled from "styled-components";
import Card from "./Card";
import cd from "../public/images/process/consult.jpg";
import di from "../public/images/process/develop.jpg";
import td from "../public/images/process/deploy.jpg";

const StyledSection = styled.section`
  width: 100%;
  max-width: 1110px;
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
    grid-column-gap: 12px;
    grid-row-gap: 64px;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, 1fr);
    .process-card {
      width: 100%;
      max-width: 356px;
      background: var(--white);
      border-radius: 8px;
      box-shadow: var(--shadow-elevation-medium);
      @media only screen and (min-width: 716px) {
        &:nth-of-type(3) {
          grid-column: 1 / 3;
        }
      }
      @media only screen and (min-width: 1047px) {
        &:nth-of-type(3) {
          grid-column: 3 / 4;
        }
      }
      .header {
        display: grid;
        .image-wrapper {
          grid-area: 1 / 1;
          aspect-ratio: 2;
          position: relative;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          overflow: hidden;
        }
        .heading-wrapper {
          grid-area: 1 / 1;
          position: relative;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          background-color: hsla(0, 0%, 0%, 30%);
          display: grid;
          place-items: center;
          h3 {
            font-size: 1.5rem;
            padding-bottom: 24px;
            color: var(--white);
          }
        }
      }
      .text-container {
        padding: 24px;
        min-height: 299px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-size: 1.2rem;
          color: var(--darkgrey);
          padding-bottom: 24px;
        }
      }
    }
  }
`;
const cardData = [
  {
    title: "Consult & Design",
    imageSrc: cd,
    description:
      "Meet with Client outlining scope, features, design, and provide advice for desired business outcomes. Create responsive, interactive prototype using Adobe XD and Stock Assets.",
    path: "/process#consult",
  },
  {
    title: "Develop & Iterate",
    imageSrc: di,
    description:
      "Build Website or Native app using the latest proven tech stack for the constraints of the project, deliver a demo, and iterate based on client input and feedback.",
    path: "/process#develop",
  },
  {
    title: "Test & Deploy",
    imageSrc: td,
    description:
      "Test website functionality on multiple devices and platforms, audit site for performance, SEO, accessibility and web best practices. Deploy site and provide client with resources.",
    path: "/process#test",
  },
];

export default function ProcessSection() {
  const processCards = cardData.map((card) => (
    <Card
      title={card.title}
      imageSrc={card.imageSrc}
      alt={`Desktop and Mobile Mockups of ${card.title}`}
      description={card.description}
      buttonText="View Details"
      path={card.path}
      className="process-card"
    />
  ));
  return (
    <StyledSection>
      <h2 id="process">My Process</h2>
      <div className="card-container">{processCards}</div>
    </StyledSection>
  );
}
