import styled from "styled-components";
import Head from "next/head";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectTextSection from "../../components/ProjectTextSection";
import MaxWidthWrapper from "../../components/UI-Components/MaxWidthWrapper";
import header from "../../public/images/projects/aadp/homepage-floating.png";
import nextjsLogo from "../../public/images/techLogos/nextjs-logo.svg";
import nextjsDarkLogo from "../../public/images/techLogos/nextjs-logo-dark.svg";
import styledcomponentsLogo from "../../public/images/techLogos/styled-components.png";
// import mdxLogo from "../../public/images/techLogos/mdx-logo.svg";
// import keystonejsLogo from "../../public/images/techLogos/keystonejs-logo.svg";
// import typescriptLogo from "../../public/images/techLogos/typescript-logo.svg";
// import mongodbLogo from "../../public/images/techLogos/mongodb-logo.svg";
import ProjectTechStackSection from "../../components/ProjectTechStackSection";
import about from "../../public/images/projects/aadp/gallery/about.png";
import process from "../../public/images/projects/aadp/gallery/process.png";
import projectImage from "../../public/images/projects/aadp/gallery/project.png";
import home from "../../public/images/projects/aadp/gallery/home.png";
import ProjectScreenshotGallerySection from "../../components/ProjectScreenShotGallery";
import mockup from "../../public/images/projectCards/aadp.jpg";
import mockupDark from "../../public/images/projectCards/aadp-dark.jpg";
import ProjectMockupSection from "../../components/ProjectMockupSection";
import LetsWorkTogetherSection from "../../components/LetsWorkTogetherSection";
import { useTheme } from "next-themes";
const StyledAADPPage = styled.div``;

const project = {
  header: {
    title: "Alex Andres Developer Portfolio",
    imageSrc: header,
    description:
      "This is my most recent project and is a great representation of my skills as a developer.  NextJS, TypeScript, MDX,  Styled Components, Framer Motion, GraphQL, Apollo, KeystoneJS, Node, and Vercel with multiple integrated APIs",
    techStack: [
      "Next JS",
      "TypeScript",
      "Styled Components",
      "MDX",
      "Keystone JS",
      "MongoDB",
    ],
    designURL:
      "https://xd.adobe.com/view/7461c17b-b75f-4b8e-9285-3a22e60a404a-2132/grid",
    repositoryURL: "https://github.com/alex-andres/alex-andres-portfolio",
    siteURL: "https://aandres.dev",
  },
  purposeAndGoals: {
    heading: "Project Purpose and Goals",
    body: [
      "The purpose of my portfolio is to showcase my work as a developer and provide me a space to create blog posts about the problems I have been working on. My goal while developing this site was continue my use of modern web frameworks and libraries and to challenge myself to incorporate new technologies that I have yet to work with.",
    ],
  },
  techStack: {
    imageData: [
      {
        src: nextjsLogo,
        darkSrc: nextjsDarkLogo,
        techTitle: "NextJS",
        url: "https://nextjs.org/",
        themed: true,
      },
      {
        src: styledcomponentsLogo,
        techTitle: "Styled Components",
        url: "https://styled-components.com/",
      },
      // {
      //   src: mdxLogo,
      //   techTitle: "MDX",
      //   url: "https://mdxjs.com/",
      // },
      // {
      //   src: keystonejsLogo,
      //   techTitle: "Keystone JS",
      //   url: "https://keystonejs.com/",
      // },
      // {
      //   src: typescriptLogo,
      //   techTitle: "TypeScript",
      //   url: "https://www.typescriptlang.org/",
      // },
      // {
      //   src: mongodbLogo,
      //   techTitle: "MongoDB",
      //   url: "https://www.mongodb.com/",
      // },
    ],
    heading: "Tech Stack: What and Why?",
    body: [
      "I chose Next.js again as the framework for this project, as it gives the flexibility of static site generation and server side rendering when I need it.",
      "The site is mostly static content but I have added features on the blog that require use of server side rendering, such as likes on a post.",
      "I chose Styled Components for the css, and Framer Motion for the page animations. The content for the pages will be managed with Keystone CMS, and the blog posts will be written using MDX to give me the ease of writing in markdown with more flexibility than a normal CMS rich text data type. The markdown is also data that can be queried, meaning I can easily filter, search and sort the posts.",
      "As I have become more confident with my javascript skills, I have decided its finally time to get into the world of TypeScript, for the predictability, quality assurance, and the IDE embedded feedback and notes while using VS Code.",
      "The data that is associated with the posts will be stored in MongoDB.",
    ],
  },
  challengesAndResolutions: {
    heading: "Challenges and Resolutions",
    body: [],
  },
  screenshotGallery: {
    imageData: [
      { src: about, title: "About" },
      { src: process, title: "Process" },
      { src: projectImage, title: "Project" },
      { src: home, title: "Home" },
    ],
  },
  keyTakeaways: {
    heading: "Key Takeaways",
    body: [
      "This project was my first time working with this tech stack and it proved difficult at times but I learned a ton of useful things. It was the first project where I used React Hooks, Styled Components, GraphQL, Headless CMS and multiple web hooks for deployment. Getting more comfortable with all of the different Hooks available in React was my biggest lesson, and it is a great alternative to using class based components for most use cases.",
    ],
  },
  mockupImage: {
    src: mockup,
    darkSrc: mockupDark,
    title: "Alex Andres Developer Portfolio",
  },
};

export default function AADPPage() {
  const { theme } = useTheme();
  return (
    <StyledAADPPage>
      <Head>
        <title>
          Alex Andres Portfolio - Project Details - Alex Andres Development
          Portfolio
        </title>
        <meta
          name="description"
          content="
          Alex Andres Development Portfolio Details including details about
          purpose of the project, techstack, lessons learned, and images.
          Website Development and Web Design in Los Angeles, CA."
        />
      </Head>
      <MaxWidthWrapper>
        <ProjectHeader data={project.header} />
        <ProjectTextSection data={project.purposeAndGoals} />
        <ProjectTechStackSection data={project.techStack} theme={theme} />
        <ProjectScreenshotGallerySection data={project.screenshotGallery} />
        <ProjectMockupSection data={project.mockupImage} />
        <LetsWorkTogetherSection />
      </MaxWidthWrapper>
    </StyledAADPPage>
  );
}
