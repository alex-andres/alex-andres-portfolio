import Image from "next/image";
import styled from "styled-components";

const StyledSection = styled.section`
  padding-bottom: 64px;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
  .image-wrapper {
    padding-bottom: 32px;
    filter: drop-shadow(var(--boxShadow));
  }
`;

export default function ProjectScreenshotGallerySection({
  data: { imageData },
}) {
  const images = imageData.map((image) => (
    <div key={image.title} className="image-wrapper">
      <Image src={image.src} alt={`${image.Title} Page Title`} />
    </div>
  ));
  const firstContainerImages = images.slice(0, 2);
  const secondContainerImages = images.slice(2, 4);
  return (
    <StyledSection>
      <div className="image-container">{firstContainerImages}</div>
      <div className="image-container">{secondContainerImages}</div>
    </StyledSection>
  );
}
