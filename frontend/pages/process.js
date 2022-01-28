import styled from "styled-components";
import ImageTextSection from "../components/ImageTextSection";
import HeaderSection from "../components/HeaderSection";
import MaxWidthWrapper from "../components/UI-Components/MaxWidthWrapper";
import LetsWorkTogetherSection from "../components/LetsWorkTogetherSection";
import consultation from "../public/images/process/consult.jpg";
import design from "../public/images/process/design.jpg";
import develop from "../public/images/process/develop.jpg";
import test from "../public/images/process/test.jpg";
import iterate from "../public/images/process/iterate.jpg";
import deploy from "../public/images/process/deploy.jpg";
import Head from "next/head";

const StyledProcessPage = styled.div`
  max-width: ;
`;

const headerData = {
  heading: "My Development Process",
  body: "All projects are unique and therefor require different approaches. Here is an outline of my workflow for most projects. It provides an explanation of the general process of developing a site from start to finish, and goes into detail about each step along the way. ",
};

const processCardData = [
  {
    title: "Consultation",
    src: consultation,
    body: [
      "Every project starts with a consultation. A brief meeting to talk about general site features, intended audience, marketplace competition,  project stakeholders, and project timeline.",
      "After completing the meeting I send a document for my client to review and to include any missing required information that was not provided during the initial call.",
      "Once I receive all the information needed (for the initial quote), I am then able to generate a three tiered quote. This is based on the MVP, a second version with added features, and a third version with all features including any wishlist add-ons.",
      "Once the client chooses which version they would like to have, we sign a contract and I request a list of sample websites that they like which will give me a starting point for their custom design.",
    ],
  },
  {
    title: "Design",
    src: design,
    body: [
      "The next phase of my development process is the design. This is the opportunity for me to exercise my creativity as well as work closely with the client to achieve the aesthetic that represents their brand.",
      "I find it helpful for the client to send me some directives that guide the design vision. This includes: 3-5 sites for design reference, a few examples of features they like, a list of their competitors, and any additional information they'd like to provide. In the best case scenario, the client can provide me with all of the images and content that they would like to include on the site.  I then research the field they are in, distill their list of features, and come up with a loose design for the home page and for one of the sub pages.",
      "I use Adobe XD to design and prototype my projects, but have used Sketch and Figma in the past. Xd allows me create desktop and mobile designs quickly and has great prototyping so the client can navigate the site links and get an idea of the the UX of the site during the design phase. During this first phase of design I generally create a design system for the project, including color scheme, typography, spacing, button styles, etc.",
      "After initial feedback from the client I then design the rest of the pages for the project, in both desktop and mobile sizes. This provides the client with a full picture of how the site will look, and makes the styling of the development process a breeze. After one final round of feedback, its time to start developing the project.",
    ],
  },
  {
    title: "Develop",
    src: develop,
    body: [
      "At the start of the development phase I further refine the list of tech that I plan to use for the project, this includes researching and exploring which libraries I can leverage to create a polished end product in an efficient timeline.",
      "I generally start my coding with setting up global styles, then work my way into sitewide layout components. Then I go page by page creating a component for each page section, and further creating components for items that are repetitive.",
      "Once the site has its functionality, I work on the individual component styling, and constantly refer to my design to have the end product match up with the design as close as possible.",
      "I generally will add minor UI animations to improve the overall flow and user experience of the site. Animations can seem superfluous but I believe that they provide a great polished feel to a site.",
    ],
  },
  {
    title: "Test",
    src: test,
    body: [
      "Once the development of the site is complete, it’s time to test the site for bugs, performance, accessibility, best practices, and cross browser compatibility.",
      "Depending on the size of the project, I will usually run the tests manually. However if the scope is large enough I will take a test driven development approach, including static code analysis, unit tests and integration testing.",
      "My testing procedure involves manually testing each page of the the application on every modern browser (Chrome, Firefox, Edge, Safari, Opera), on mobile, tablet and computer devices. I run performance tests using Lighthouse, WebPageTest.org and  GTmetrix.com.",
      "To ensure that deployment goes smoothly, I use a checklist method to ensure that my clients site will meet and exceed all performance, SEO, accessibility and Web Best practices. As a bonus I generally include PWA functionality, which adds potential user engagement and increases Lighthouse scores.",
    ],
  },
  {
    title: "Iterate",
    src: iterate,
    body: [
      "After running tests, I deploy the site to a preview link on Netlify or any other hosting platform, and then ask for feedback from my client either through a call or through email if the client prefers.",
      "After receiving the feedback, I will repeat the process above on a smaller scale: redesigning, developing, and testing the feedback.",
      "After all of the changes have been approved its time for the final step, deployment.",
    ],
  },
  {
    title: "Deploy",
    src: deploy,
    body: [
      "Undoubtedly this is the best part of the process for me and my client. All of the hard work and effort comes into to digital existence with the deployment of the site.",
      "I go over the checklist mentioned in the test section one more time, to make sure that the site has been optimized and looked over on my end, and then I pass it off to the client for one review. If I receive the green light I deploy the site on Netlify, Vercel, or any other platform that my client desires. Cue the balloons, confetti and champagne!",
    ],
  },
];

export default function ProcessPage() {
  return (
    <StyledProcessPage>
      <Head>
        <title>
          My Development Process - Alex Andres Development Portfolio
        </title>
        <meta
          name="description"
          content="Information on the development process of Alex Andres, a Los Angeles,
          CA based web developer. Alex specializes in developing websites and
          apps for small and medium size businesses with the latest proven
          technology and best practices."
        />
      </Head>
      <MaxWidthWrapper>
        <HeaderSection data={headerData} />
        <ImageTextSection data={processCardData} about={false} />
        <LetsWorkTogetherSection />
      </MaxWidthWrapper>
    </StyledProcessPage>
  );
}
