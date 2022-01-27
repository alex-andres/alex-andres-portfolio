import styled from "styled-components";
const IconContainer = styled.svg`
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--black);
  cursor: pointer;
`;

const Animated = styled.path`
  color: var(--seaFoam);
  position: absolute;
  top: 0;
  left: 0;
  filter: drop-shadow(0px 0px 4px white);
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: clip-path 1000ms;
  ${IconContainer}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }
`;

export default function MoonIcon({ className }) {
  return (
    <IconContainer
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></path>
      <Animated d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></Animated>
    </IconContainer>
  );
}
