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

export default function SkillsSection() {
  return (
    <StyledSection>
      <h2>My Skills</h2>
      <p>
        Web development is a vast world that has given me the opportunity to be
        a career student. Throughout my learning I have solidified my
        understanding of computer science fundamentals and web development and
        user experience best practices. Each new project I work on is an
        opportunity to further develop my skills and broaden my skillset.
      </p>
      <div className="skill-section">
        <div className="frontend">
          <h3>Frontend & Design</h3>
          <ul>
            <li>Javascript ES6</li>
            <li>HTML5 & CSS</li>
            <li>SASS</li>
            <li>Styled Components</li>
            <li>React</li>
            <li>Framer Motion</li>
            <li>PHP</li>
            <li>TypeScript</li>
            <li>SEO Best Practices</li>
            <li>A11y Best Practices</li>
            <li>Adobe XD</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>
        <div className="backend">
          <h3>Backend & Dev Tools</h3>
          <ul>
            <li>Node JS</li>
            <li>Express</li>
            <li>Axios</li>
            <li>WebPack</li>
            <li>SQL DBs</li>
            <li>NoSQL DBs</li>
            <li>GraphQL</li>
            <li>REST APIs </li>
            <li>VS Code</li>
            <li>Jest</li>
            <li>Selenium</li>
          </ul>
        </div>
      </div>
    </StyledSection>
  );
}
