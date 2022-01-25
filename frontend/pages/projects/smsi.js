import styled from "styled-components";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectTextSection from "../../components/ProjectTextSection";
import MaxWidthWrapper from "../../components/UI-Components/MaxWidthWrapper";
import header from "../../public/images/projects/smsi/homepage-floating.png";
import gatsbyLogo from "../../public/images/techLogos/gatsby-logo.svg";
import styledcomponentsLogo from "../../public/images/techLogos/styled-components.png";
import sanityLogo from "../../public/images/techLogos/sanity-logo.svg";
import graphqlLogo from "../../public/images/techLogos/graphql-logo.svg";
import reactLogo from "../../public/images/techLogos/react-logo.svg";
import netlifyLogo from "../../public/images/techLogos/netlify-logo.svg";
import ProjectTechStackSection from "../../components/ProjectTechStackSection";
import projects from "../../public/images/projects/smsi/gallery/projects.png";
import contact from "../../public/images/projects/smsi/gallery/contact.png";
import theCannery from "../../public/images/projects/smsi/gallery/the-cannery.png";
import customFabrication from "../../public/images/projects/smsi/gallery/custom-fabrication.png";
import ProjectScreenshotGallerySection from "../../components/ProjectScreenShotGallery";
import mockup from "../../public/images/projectCards/smsi.jpg";
import ProjectMockupSection from "../../components/ProjectMockupSection";
import LetsWorkTogetherSection from "../../components/LetsWorkTogetherSection";
import Head from "next/head";
const StyledSMSIPage = styled.div``;

const project = {
  header: {
    title: "Sheet Metal Systems Inc.",
    imageSrc: header,
    description:
      "Sheet Metal Systems Inc. is an Architectural Sheet Metal Business in Hollister CA that was looking for a new site to share their past projects and provide future clients with background on the type of service they offer. All fields of the site are able to updated with Sanity Headless CMS and the site features  a map that features projects that are dynamically generated from the project being created in the CMS.",
    projectType: "Individually Designed and Developed",
    techStack: [
      "Gatsby",
      "Styled Components",
      "Sanity",
      "Netlify",
      "Mapbox API",
    ],
    designURL:
      "https://xd.adobe.com/view/28e0b68e-256d-42fb-b495-fdaeb1908a45-7db3/",
    repositoryURL: "https://github.com/alex-andres/SMS-website ",
    siteURL: "https://sheetmetalsystems.netlify.app/",
  },
  purposeAndGoals: {
    heading: "Project Purpose and Goals",
    body: [
      "Sheet Metal Systems is a Architectural Sheet Metal Contractor that builds in the Bay Area. The business was in need of a new web site that represents the high level of work they do. The business wanted the ability to create pages via CMS and to update the content on all pages. My goal was to deliver a site that was lightning fast, showcased all the details of the business and their work, and had a smooth user experience.",
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
        src: styledcomponentsLogo,
        techTitle: "Styled Components",
        url: "https://styled-components.com/",
      },
      {
        src: sanityLogo,
        techTitle: "Sanity",
        url: "https://www.sanity.io/",
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
      "This was my second project built with Gatsby, and I traded out some parts of the stack to expand my knowledge. I used styled components and found it very comparable to Emotion CSS which I had used in the past.",
      "For the Backend I wanted to try a new type of headless CMS. Sanity is CMS option that uses structured content versus a more typical page based approach that most CMSs use. This allows for more flexibility and reusability of the data. I again used Netlify for deployment as it offers easy integration with this stack and allows for web hook triggered deploys that I use for pushing code to git and publishing new content on the CMS.",
      "The site was also built with the following libraries, features and APIs: Loadable Components, Sass, Recaptcha,  Progressive Web App,  and Mapbox API.",
    ],
  },
  challengesAndResolutions: {
    heading: "Challenges and Resolutions",
    body: [
      "My big challenge with this project was using the Mapbox API, an open source mapping tool with great docs and features, to create project points on the map from the project address entered in the CMS. I pulled the projects from CMS using GraphQL, converted the address to a decode using the OpenCage Geocode library, then created a new projects node on the Gatsby Project State. I then used the new projects node to pass all of the project data to the Mapbox API and then map-box can generate a marker with a small popup box that includes the project title description and link that can be opened when the marker is clicked.",
    ],
  },
  screenshotGallery: {
    imageData: [
      { src: projects, title: "Projects" },
      { src: contact, title: "Contact" },
      { src: theCannery, title: "The Cannery" },
      { src: customFabrication, title: "Custom Fabrication" },
    ],
  },
  keyTakeaways: {
    heading: "Key Takeaways",
    body: [
      "I really enjoyed this project from start to finish. I worked really hard on designing this project with Adobe XD, and found the front-end development went much more smoothly due to all of the work done up front on the design. I also really focused on making components as reusable and as cleanly written as possible. Lastly I am very satisfied with the lighthouse performance of this site and this project has definitely set the standard for my lighthouse ratings going forward.",
    ],
  },
  mockupImage: {
    src: mockup,
    title: "Sabrina Andres Art Advisory",
  },
};

export default function SMSIPage() {
  return (
    <StyledSMSIPage>
      <Head>
        <title>
          Sheet Metal Systems Inc. - Project Details - Alex Andres Development
          Portfolio
        </title>
        <meta property="description">
          Sheet Metal Systems Inc. Business Website project overview including
          details about purpose of the project, techstack, lessons learned, and
          images. Website Development and Web Design in Los Angeles, CA.
        </meta>
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
    </StyledSMSIPage>
  );
}
