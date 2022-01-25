import Head from "next/head";
import HeroSection from "../components/HeroSection";
import LetsWorkTogetherSection from "../components/LetsWorkTogetherSection";
import ProcessSection from "../components/ProcessSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import MaxWidthWrapper from "../components/UI-Components/MaxWidthWrapper";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Home - Alex Andres Development Portfolio</title>
        <meta property="description">
          The web devleopment portfolio of Alex Andres, a Los Angeles, CA based
          web developer. Alex specializes in developing websites and apps for
          small and medium size businesses with the latest proven technology and
          best practices.
        </meta>
      </Head>
      <HeroSection />
      <MaxWidthWrapper>
        <ProjectsSection />
        <ProcessSection />
        <SkillsSection />
        <LetsWorkTogetherSection />
      </MaxWidthWrapper>
    </>
  );
}
