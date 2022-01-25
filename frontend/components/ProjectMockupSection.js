import styled from "styled-components";
import Image from "next/image";

const StyledSection = styled.div`
  padding-bottom: 64px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 128px;
  }
`;

export default function ProjectMockupSection({ data: { src, title } }) {
  return (
    <StyledSection>
      <Image src={src} alt={`${title} Desktop and MobileMockup Image`} />
    </StyledSection>
  );
}
