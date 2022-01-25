import Image from "next/image";
import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: -32px;
  padding-bottom: 96px;
  @media only screen and (min-width: 960px) {
    padding-bottom: 128px;
  }
  .header-wrapper {
    @media only screen and (min-width: 960px) {
      display: flex;
      flex-direction: column;
    }
  }
  h1 {
    padding-bottom: 32px;
    max-width: 812px;
    font-size: 2.5rem;
    @media only screen and (min-width: 960px) {
      padding-top: 16px;
      order: 1;
      padding-bottom: 48px;
    }
  }
  .header-image-wrapper {
    padding-bottom: 32px;
    margin-left: -10px;
    filter: drop-shadow(var(--boxShadow));
    @media only screen and (min-width: 960px) {
      margin-left: -16px;
      order: 4;
    }
    img {
    }
  }
  .description {
    padding-bottom: 64px;
    max-width: 812px;
    @media only screen and (min-width: 960px) {
      order: 2;
      padding-bottom: 96px;
    }
  }
  .project-details {
    text-align: center;
    max-width: 812px;
    @media only screen and (min-width: 768px) {
      display: flex;
      order: 3;
      justify-content: space-between;
      text-align: left;
      padding-bottom: 96px;
    }
    p,
    ul {
      padding-bottom: 24px;
    }
    ul {
      list-style: none;
    }
    &__project-type {
      @media only screen and (min-width: 768px) {
        max-width: 170px;
      }
    }
  }
`;

export default function ProjectHeader({
  data: {
    title,
    imageSrc,
    description,
    projectType,
    techStack,
    designURL,
    repositoryURL,
    siteURL,
  },
}) {
  const techStackList = techStack.map((item) => <li key={item}>{item}</li>);
  return (
    <StyledSection>
      <div className="header-wrapper">
        <h1>{title}</h1>
        <div className="header-image-wrapper">
          <Image src={imageSrc} alt={`${title} Homepage Screenshot`} />
        </div>
        <p className="description">{description}</p>
        <div className="project-details">
          <div className="project-details__project-type">
            <strong>Project Type</strong>
            <p>{projectType}</p>
          </div>
          <div className="project-details__tech-stack">
            <strong>Tech Stack</strong>
            <ul>{techStackList}</ul>
          </div>
          {designURL && (
            <div className="project-details__design">
              <strong>Design</strong>
              <p>
                <a
                  href={designURL}
                  title="View Adobe XD Design in new window"
                  target="_blank"
                  rel="noreferrer"
                >
                  XD Design
                </a>
              </p>
            </div>
          )}
          {repositoryURL && (
            <div className="project-details__source-code">
              <strong>Source Code</strong>{" "}
              <p>
                <a
                  href={repositoryURL}
                  title="View Github Repository in new window"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repository
                </a>
              </p>
            </div>
          )}
          <div className="project-details__live">
            <strong>Live</strong>
            <p>
              <a
                href={siteURL}
                title={`View ${title} live site in new window`}
                target="_blank"
                rel="noreferrer"
              >
                {siteURL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
