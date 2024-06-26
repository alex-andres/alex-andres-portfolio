import { motion } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import ImageTextSection from "../components/ImageTextSection";
import LetsWorkTogetherSection from "../components/LetsWorkTogetherSection";
import SpotifyPlayingSection from "../components/SpotifyPlayingSection";
import TwitterFeedSection from "../components/TwitterFeedSection";
import MaxWidthWrapper from "../components/UI-Components/MaxWidthWrapper";
import { getAccessToken, getCurrentlyPlaying } from "../library/spotify";
import costaRica from "../public/images/costa-rica-alex.jpg";

const StyledAboutPage = styled.div``;

const headerData = {
  heading: "About Me",
  body: "I have a fascination for life, and curiosity about the things I have yet to discover that motivates me to keep going.",
};

const aboutCardData = [
  {
    title: "Hiking in Costa Rica",
    src: costaRica,
    body: [
      "I’m a web developer from Pasadena, California, who recently moved to Zurich, Switzerland. Being raised by parents who both were teachers (math and art), I have always had the passion for learning, visual creativity and logical problem solving, all of which are satisfied by my career in web development.",
      "I strive to create memorable user experiences on the web through intuitive designs and writing clean html, css, and javascript. My current tech interest include React, Styled Components, Node, Express, Next JS, and learning Python.",
      "When I’m not working, I am spending time with  my lovely wife and our son, playing tennis and hiking, and cooking meals for and enjoying the company of my family and friends.",
    ],
  },
];
export default function AboutPage({ tweets, currentSong }) {
  return (
    <StyledAboutPage>
      <Head>
        <title>About Alex Andres - Alex Andres Development Portfolio</title>
        <meta
          name="description"
          content="Learn more about Alex&#39;s professional background and personal
          interests. Website Development and Web Design in Los Angeles, CA."
        />
      </Head>
      <MaxWidthWrapper>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <HeaderSection data={headerData} />
          <ImageTextSection data={aboutCardData} about={true} />
        </motion.div>
        <SpotifyPlayingSection />
        <LetsWorkTogetherSection />
      </MaxWidthWrapper>
    </StyledAboutPage>
  );
}
