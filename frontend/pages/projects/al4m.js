import styled from "styled-components";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectTextSection from "../../components/ProjectTextSection";
import MaxWidthWrapper from "../../components/UI-Components/MaxWidthWrapper";
import header from "../../public/images/projects/al4m/homepage-floating.png";
import nextjsLogo from "../../public/images/techLogos/nextjs-logo.svg";
import styledcomponentsLogo from "../../public/images/techLogos/styled-components.png";
import firebaseLogo from "../../public/images/techLogos/firebase-logo.svg";
import reactLogo from "../../public/images/techLogos/react-logo.svg";
import ProjectTechStackSection from "../../components/ProjectTechStackSection";
import about from "../../public/images/projects/al4m/gallery/about.png";
import artsAndCulture from "../../public/images/projects/al4m/gallery/arts-and-culture.png";
import joinUs from "../../public/images/projects/al4m/gallery/join-us.png";
import shop from "../../public/images/projects/al4m/gallery/shop.png";
import ProjectScreenshotGallerySection from "../../components/ProjectScreenShotGallery";
import mockup from "../../public/images/projectCards/al4m.jpg";
import ProjectMockupSection from "../../components/ProjectMockupSection";
import LetsWorkTogetherSection from "../../components/LetsWorkTogetherSection";
import Head from "next/head";
const StyledAL4MPage = styled.div``;

const project = {
  header: {
    title: "Asher Luzatto for Mayor",
    imageSrc: header,
    description:
      "Asher Luzatto for Mayor is a campaign website for Los Angeles Mayoral Candidate Asher Luzatto. The site was initially designed and developed by another developer and I was brought on to convert the site from a simple static HTML site into a site that will eventually need server side rendering for the user engagement planned for future versions.",
    projectType: "Individually Designed and Developed",
    techStack: [
      "Gatsby",
      "Contentful",
      "Netlify",
      "Instagram Graph API",
      "Mailchimp API",
    ],
    siteURL: "https://asherformayor.com/",
  },
  purposeAndGoals: {
    heading: "Project Purpose and Goals",
    body: [
      "The purpose of the site is to provide its visitors with information on the campaign, enable them to sign up for the newsletter, to contribute ideas, and to volunteer to join the campaign. In total the site is 34 pages and has 5 separate forms. The goal was convert the project over to react and to utilize the component based approach of react to simplify the conversion.",
    ],
  },
  techStack: {
    imageData: [
      {
        src: nextjsLogo,
        techTitle: "NextJS",
        url: "https://nextjs.org/",
      },
      {
        src: styledcomponentsLogo,
        techTitle: "Styled Components",
        url: "https://styled-components.com/",
      },
      {
        src: firebaseLogo,
        techTitle: "Firebase",
        url: "https://firebase.google.com/",
      },
      { src: reactLogo, techTitle: "React", url: "https://reactjs.org/" },
    ],
    heading: "Tech Stack: What and Why?",
    body: [
      "I decided to go with Next.js for this build as it provided a great framework for a project like this, that would eventually need to have server side rendering. I also chose to use styled components again as it is now my preferred means of writing my css.",
      "For the Backend and Deployment, per the other developer’s request we used Firebase. It provided an easy plug and play approach to a backend, but had its challenges as well. I used firebase as a place to store page content, user input from forms, and store files submitted by users. I built API endpoints using Next.js and Node. I also used Firebase Cloud Functions to deploy the NextJS server that is required for Next projects.",
      "The site was also built with the following libraries, features and APIs: sendinblue API,  google analytics, next-optimized-images,  and dynamic component loading.",
    ],
  },
  challengesAndResolutions: {
    heading: "Challenges and Resolutions",
    body: [
      "Two chanllenges I had with this project was deploying the NextJS server to Firebase and getting the next-optimized-images library to work in deployment. Their is limited information on how to deploy a NextJS Server on a third party server because Vercel the creators of next encourage you to use their own server. After a lot of reconfiguring and 30 different variations of deploys I got the Next server to finally work, with the end resolution being that the server function folder required all of the npm packages that the actual project included. ",
      "After getting the project deployed none of the image optimization that worked in the development environment was working. This is due to the fact that the next Img component only works with deploying the server to Vercel. I came across next-optimize-image as an alternative, and now all of the images are optimized for different screen sizes during build time.",
    ],
  },
  screenshotGallery: {
    imageData: [
      { src: artsAndCulture, title: "Arts and Culture" },
      { src: joinUs, title: "Contact" },
      { src: shop, title: "Shop" },
      { src: about, title: "About" },
    ],
  },
  keyTakeaways: {
    heading: "Key Takeaways",
    body: [
      "This was a great project that really pushed me to the edge of my frustration as a programmer. It taught me the important lesson of adding more time to my initial time estimates, and to build a couple things with a framework before taking it into a professional setting. This project also gave me a chance to get a really good grasp of NextJS as a framework, and I will be using it again on future projects.",
    ],
  },
  mockupImage: {
    src: mockup,
    title: "Asher Luzatto for Mayor",
  },
};

export default function AL4mPage() {
  return (
    <StyledAL4MPage>
      <Head>
        <title>
          Asher Luzatto for Mayor - Project Details - Alex Andres Development
          Portfolio
        </title>
        <meta
          name="description"
          content="
          Asher Luzatto Mayoral Campaign Website project overview including
          details about purpose of the project, techstack, lessons learned, and
          images. Website Development and Web Design in Los Angeles, CA."
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
    </StyledAL4MPage>
  );
}
