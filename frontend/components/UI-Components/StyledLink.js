import Link from "next/link";
import styled from "styled-components";
import {motion} from 'framer-motion';

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

const MotionAnchor = motion(Anchor);

export default function StyledLink({
  title,
  href,
  anchor,
  linkTitle,
  external,
  variants

}) {
  if (anchor) {
    return (
      <MotionAnchor
        href={`${href ? href : title}`}
        title={linkTitle ? linkTitle : `${title}`}
        variants={variants}
      >
        {title}
        <Animated aria-hidden={true}>{title}</Animated>
      </MotionAnchor>
    );
  } else if(external) {
    return (
      <MotionAnchor
        href={`${href ? href : title}`}
        title={linkTitle ? linkTitle : `${title}`}
        target="_blank"
        rel="noreferrer"
        variants={variants}
      >
        {title}
        <Animated aria-hidden={true}>{title}</Animated>
      </MotionAnchor>
    );
  } else {

    return (
      <Link href={`/${href ? href : title}`} passHref>
        <MotionAnchor title={linkTitle ? linkTitle : `${title}`} variants={variants}>
          {title}
          <Animated aria-hidden={true}>{title}</Animated>
        </MotionAnchor>
      </Link>
    );
  }
}
