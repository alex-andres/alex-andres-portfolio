import styled from "styled-components";
import Image from "next/image";
import { useTheme } from "next-themes";

const StyledSection = styled.div`
  padding-bottom: 64px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 128px;
  }
`;

export default function ProjectMockupSection({
  data: { src, darkSrc, title },
}) {
  const { theme } = useTheme();
  return (
    <StyledSection>
      <Image
        src={theme === "light" ? src : darkSrc}
        alt={`${title} Desktop and MobileMockup Image`}
      />
    </StyledSection>
  );
}
