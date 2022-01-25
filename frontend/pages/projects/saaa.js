import styled from "styled-components";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectTextSection from "../../components/ProjectTextSection";
import MaxWidthWrapper from "../../components/UI-Components/MaxWidthWrapper";
import header from "../../public/images/projects/saaa/homepage-floating.png";
import gatsbyLogo from "../../public/images/techLogos/gatsby-logo.svg";
import emotionLogo from "../../public/images/techLogos/emotion-logo.png";
import contentfulLogo from "../../public/images/techLogos/contentful-logo.svg";
import graphqlLogo from "../../public/images/techLogos/graphql-logo.svg";
import reactLogo from "../../public/images/techLogos/react-logo.svg";
import netlifyLogo from "../../public/images/techLogos/netlify-logo.svg";
import ProjectTechStackSection from "../../components/ProjectTechStackSection";
import about from "../../public/images/projects/saaa/gallery/about.png";
import blog from "../../public/images/projects/saaa/gallery/blog.png";
import contact from "../../public/images/projects/saaa/gallery/contact.png";
import services from "../../public/images/projects/saaa/gallery/services.png";
import ProjectScreenshotGallerySection from "../../components/ProjectScreenShotGallery";
import mockup from "../../public/images/projectCards/saaa.jpg";
import ProjectMockupSection from "../../components/ProjectMockupSection";
import LetsWorkTogetherSection from "../../components/LetsWorkTogetherSection";
import Head from "next/head";
const StyledSAAAPage = styled.div``;

const project = {
  header: {
    title: "Sabrina Andres Art Advisory",
    imageSrc: header,
    description:
      "Sabrina Andres Art Advisory is a website I designed and developed for my wife’s Art Advisory Business. The site functions as a portfolio and blog to showcase Sabrina’s background, services, past work, and artist interviews. The site provides Sabrina with the ability to create blog posts and projects pages dynamically with Contentful, a headless CMS platform.",
    projectType: "Individually Designed and Developed",
    techStack: [
      "Gatsby",
      "Contentful",
      "Netlify",
      "Instagram Graph API",
      "Mailchimp API",
    ],
    repositoryURL: "https://github.com/alex-andres/sabrina-andres-portfolio",
    siteURL: "https://sabrinaandres.com",
  },
  purposeAndGoals: {
    heading: "Project Purpose and Goals",
    body: [
      "Sabrina had recently started her own art advisory business and needed a professional website that would allow her to share her work, highlight artists, share posts from her instagram, and make blog posts.",
      "The goal of the project was to give Sabrina a completely custom site that represented her business well, and provided clients with information about her background and her art placements,  all while being performant, intuitive and CMS editable.",
    ],
  },
  techStack: {
    imageData: [
      {
        src: gatsbyLogo,
        techTitle: "Gatsby",
        url: "https://www.gatsbyjs.com/",
      },
      {
        src: emotionLogo,
        techTitle: "Emotion",
        url: "https://emotion.sh/docs/introduction",
      },
      {
        src: contentfulLogo,
        techTitle: "Contentful",
        url: "https://www.contentful.com/",
      },
      { src: graphqlLogo, techTitle: "GraphQL", url: "https://graphql.org/" },
      { src: reactLogo, techTitle: "React", url: "https://reactjs.org/" },
      {
        src: netlifyLogo,
        techTitle: "Netlify",
        url: "https://www.netlify.com/",
      },
    ],
    heading: "Tech Stack: What and Why?",
    body: [
      "I chose to develop this project with Gatsby as it provides lightning fast static builds that harness the ease of programming of React. I used Emotion Css to scope my CSS to each individual component, along with a small amount of global CSS.",
      "For the Backend I decided go with Contentful as a Headless CMS as it has great compatibility with Gatsby. There is a plugin that allows you to access Contentful data with GraphQL queries. I deployed the site to Netlify because it too offers great ease of use with this stack and allows for continuous integration, with rebuilds and redeploys when Sabrina makes a new posts on Instagram, updates content on her CMS, or when I push new code to GitHub.",
      "The site was also built with the following libraries, features and APIs: Loadable Components, Sass, Recaptcha, Progressive Web App,  Instagram Graph API, Mail Chimp API.",
    ],
  },
  challengesAndResolutions: {
    heading: "Challenges and Resolutions",
    body: [
      "Every project has its challenges, one I faced was figuring out a way to get the custom animation to show only on the first visit. The animation is a nice presentation add on, and allows the whole home page and other resources to be loaded in the background on the first visit. The site uses caching for subsequent loads, so having the animation run is really only useful once.",
      "I solved the issue by  using cookies and  React Context to globalize the visited state and prevent the animation from loading everytime the home page was loaded, even when new sessions were started.",
    ],
  },
  screenshotGallery: {
    imageData: [
      { src: about, title: "About" },
      { src: blog, title: "Blog" },
      { src: contact, title: "Contact" },
      { src: services, title: "Services" },
    ],
  },
  keyTakeaways: {
    heading: "Key Takeaways",
    body: [
      "This project was my first time working with this tech stack and it proved difficult at times but I learned a ton of useful things. It was the first project where I used React Hooks, Styled Components, GraphQL, Headless CMS and multiple web hooks for deployment. Getting more comfortable with all of the different Hooks available in React was my biggest lesson, and it is a great alternative to using class based components in certain use cases.",
    ],
  },
  mockupImage: {
    src: mockup,
    title: "Sabrina Andres Art Advisory",
  },
};

export default function SAAAPage() {
  return (
    <StyledSAAAPage>
      <Head>
        <title>
          Sabrina Andres Art Advisory - Project Details - Alex Andres
          Development Portfolio
        </title>
        <meta
          property="description"
          content="
          Sabrina Andres Art Advisory Business Website project overview
          including details about purpose of the project, techstack, lessons
          learned, and images. Website Development and Web Design in Los
          Angeles, CA."
        />
      </Head>
      <MaxWidthWrapper>
        <ProjectHeader data={project.header} />
        <ProjectTextSection data={project.purposeAndGoals} />
        <ProjectTechStackSection data={project.techStack} />
        <ProjectTextSection data={project.challengesAndResolutions} />
        <ProjectScreenshotGallerySection data={project.screenshotGallery} />
        <ProjectTextSection data={project.keyTakeaways} />
        <ProjectMockupSection data={project.mockupImage} />
        <LetsWorkTogetherSection />
      </MaxWidthWrapper>
    </StyledSAAAPage>
  );
}
