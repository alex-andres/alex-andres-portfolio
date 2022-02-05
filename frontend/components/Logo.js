import styled from "styled-components";

const LogoContainer = styled.div`
  height: ${(props) => (props.size ? props.size : "35px")};
  @media only screen and (min-width: 540px) {
    height: ${(props) => (props.size ? props.size : "50px")};
  }
  svg {
    height: ${(props) => (props.size ? props.size : "35px")};
    @media only screen and (min-width: 540px) {
      height: ${(props) => (props.size ? props.size : "50px")};
    }
    width: auto;
  }
`;

export default function Logo({ size }) {
  return (
    <LogoContainer size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 57.1716 50.3499"
        shapeRendering="geometricPrecision"
      >
        <path
          fill="#134243"
          d="M44.695 46.371h-2.569L26.191 12.013h-.448L9.808 46.371h-2.57L24.229 9.732h3.476l16.99 36.639z"
        />
        <path
          fill="#418c86"
          d="M25.967 21.57L13.572 50.342 0 50.35 23.488 0h5.011l21.456 46.371h-2.556l-20.37-44.03-2.051-.033L3.685 47.992h8.37l11.314-26.304 2.598-.118z"
        />
        <path
          fill="#80cb96"
          d="M42.879 48.013l1.078 2.326h13.215L33.691 0h-2.565l22.396 48.014-10.643-.001z"
        />
      </svg>
    </LogoContainer>
  );
}
