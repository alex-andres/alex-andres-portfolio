import Head from "next/head";
import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import ImageTextSection from "../components/ImageTextSection";
import LetsWorkTogetherSection from "../components/LetsWorkTogetherSection";
import MaxWidthWrapper from "../components/UI-Components/MaxWidthWrapper";
import consultation from "../public/images/process/consult.jpg";
import design from "../public/images/process/design.jpg";
import develop from "../public/images/process/develop.jpg";
const StyledAboutPage = styled.div``;

const headerData = {
  heading: "About Me",
  body: "I have a fascination for many things in life, and curiosity about the things I have yet to discover that motivates me to keep going.",
};

const aboutCardData = [
  {
    title: "Consultation",
    src: consultation,
    body: [
      "My fascination with computers started at an early age, I came across my first “bug” at age 2 when I attempted to stuff two floppy disks into my dad’s computer. Fortunately the computer wasn’t damaged, and neither was my eagerness to find out how computers worked and all the potential they held within them.",
      "I was raised by parents who were both teachers, My dad a math teacher and my mom an art teacher. Both of their backgrounds help to nurture my love for experimentation, rigor, logic and creativity, perspective, and intuition.",
      "After graduating UCLA with a biology degree in 2014 and getting an administrative job on campus that provided me a lot of down time and assured me that administrative jobs weren’t for me, I went looking for what my next step was. As a millennial I have seen the evolution of a limitless resource of information in the internet. The internet is the most vital tool of my life and I have learned so much through interacting with it. While searching on the internet for career suggestions, the answer clicked, the medium I was searching on was the answer! I yearned for a career path that would satisfy both my creative and logical sides,  web development was and is the perfect fit.",
    ],
  },
  {
    title: "Design",
    src: design,
    body: [
      `My first job in the field was as a front end developer for Webstyle a company  that built static websites for small and medium size businesses. This job honed my frontend skills with an emphasis on programming performant sites that followed web best practices, as organic SEO was a big selling point for the company, it also gave me the opportunity to design and build sites from “ground up”.`,
      "Due to the pandemic Webstyle had to shut down, and as the saying goes, when one door closes another one opens.",
      "I have spent the last 6 months freelancing, working on the projects highlighted on this site, working on both my skills as a designer and as a full stack developer, and continually taking online courses on development topics to broaden my knowledge base. This time has been invaluable to me as it has given me the opportunity to focus on building projects with tech that I want to learn, to refine my communication skills with direct client and developer interaction, and provided me the freedom to ponder what the next steps will be.",
      "While I have enjoyed my time working mostly alone, I am eager to join a team and use my knowledge and skillset to be a part of a bigger mission. I am excited to work with and learn from my future teammates. I want to take on big technical challenges and to continue to push my abilities to the limits. I am really looking for an opportunity to immerse myself in the work, and to do all I can to help the growth of my future company and overall mission.",
    ],
  },
  {
    title: "Develop",
    src: develop,
    body: [
      "When I’m not clacking away at the keyboard, I enjoy a long list of hobbies, but I’ll keep it to the essentials.",
      "I start every weekday with some early morning tennis with my close friends. It gives me the opportunity to see the sun rise, wake up with movement, and spend time with people I care about. Morning tennis for the past year and a half has taught me the importance of discipline and consistency, and I strive to implement these lessons towards all of the other facets of my life.",
      "Some other daily routines I practice are meditating and going on walks with my wife, both activities give us the chance to be present and spend quality time with each other while experiencing the world, outside us and within. They have taught me the value of being present in whatever I am doing, to be patient, intentional and to enjoy the journey.",
      "My favorite pastime is to cook and share a meal with friends (old and new) and/or family. Cooking satisfies my curiosity for learning as there are endless recipes to try, and each one shines a light on an essential part of the culture it comes from. I enjoy the procedural side of cooking but also love the improvisation and creativity that can come from tweaking a dish. Sharing a meal with people really satisfies a primal instinct, creating trust and community. I hope one day to break bread with you.",
    ],
  },
];
export default function AboutPage() {
  return (
    <StyledAboutPage>
      <Head>
        <title>About Alex Andres - Alex Andres Development Portfolio</title>
        <meta
          property="description"
          content="Learn more about Alex&#39;s professional background and personal
          interests. Website Development and Web Design in Los Angeles, CA."
        />
      </Head>
      <MaxWidthWrapper>
        <HeaderSection data={headerData} />
        <ImageTextSection data={aboutCardData} about={true} />
        <LetsWorkTogetherSection />
      </MaxWidthWrapper>
    </StyledAboutPage>
  );
}
