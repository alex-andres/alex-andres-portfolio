import Image from "next/image";
import styled from "styled-components";
import ProjectTextSection from "./ProjectTextSection";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 64px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media only screen and (min-width: 960px) {
    padding-bottom: 128px;
  }
  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .image {
      padding-bottom: 32px;
      &:last-of-type {
        padding-bottom: 64px;
      }
    }
    .image-wrapper {
      width: 200px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .text-container {
    max-width: 812px;
    @media only screen and (min-width: 768px) {
      width: 50%;
      max-width: 536px;
    }
    h2 {
      font-size: 1.75rem;
      padding-bottom: 32px;
    }
    p {
      padding-bottom: 16px;
    }
  }
`;

export default function ProjectTechStackSection({
  data: { imageData, heading, body },
}) {
  const images = imageData.map((image) => (
    <a
      href={image.url}
      title={`View ${image.techTitle}'s Website`}
      target="_blank"
      rel="noreferer"
      className="image"
    >
      <div className="image-wrapper">
        <Image
          src={image.src}
          alt={`${image.techTitle} Logo`}
          layout="responsive"
        />
      </div>
    </a>
  ));
  const bodyParagraphs = body.map((paragraph) => <p>{paragraph}</p>);
  return (
    <StyledSection>
      <div className="image-container">{images}</div>
      <div className="text-container">
        <h2>{heading}</h2>
        <div>{bodyParagraphs}</div>
      </div>
    </StyledSection>
  );
}
