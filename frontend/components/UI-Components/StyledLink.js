import Link from "next/link";
import styled from "styled-components";

const Anchor = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--black);
  cursor: pointer;
`;
const Animated = styled.span`
  color: var(--seaFoam);
  position: absolute;
  top: 0;
  left: 0;
  filter: drop-shadow(0px 0px 4px white);
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: clip-path 1000ms;
  ${Anchor}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: clip-path 300ms;
  }
`;

export default function StyledLink({
  title,
  href,
  scroll,
  anchor,
  linkTitle,
  color,
}) {
  if (anchor) {
    return (
      <Anchor
        href={`${href ? href : title}`}
        title={linkTitle ? linkTitle : `${title}`}
      >
        {title}
        <Animated aria-hidden={true}>{title}</Animated>
      </Anchor>
    );
  } else {
    return (
      <Link href={`/${href ? href : title}`} passHref>
        <Anchor title={linkTitle ? linkTitle : `${title}`}>
          {title}
          <Animated aria-hidden={true}>{title}</Animated>
        </Anchor>
      </Link>
    );
  }
}
