import styled from "styled-components";
import Link from "next/link";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useMenuContext } from "../state/Menu";

const StyledMobileNavMenu = styled.div`
  position: fixed;
  overflow: hidden;
  inset: 0px;
  z-index: 10000;
  @media screen and (min-width: 769px) {
    display: none;
  }
  .MobileNav__Nav {
    position: absolute;
    left: 0px;
    bottom: 100px;
    width: 75%;
    height: 75%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .MobileNav__Backdrop {
    opacity: 1;
    touch-action: none;
    @media (prefers-reduced-motion: no-preference) {
      transition: opacity 500ms ease 0s;
    }
    position: absolute;
    inset: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: hsla(0deg, 0%, 100%, 0.9);
    backdrop-filter: blur(8px);
  }
  .MobileNav__NavLink {
    position: relative;
    display: block;
    text-decoration: none;
    padding: 16px 16px 16px 32px;
    color: var(--black);
    font-size: 28px;
  }
  .DarkModeToggle__IconWrapper {
    padding: 16px 16px 16px 32px;
    svg {
      fill: var(--black);
      height: 40px !important;
      width: auto !important;
    }
  }
`;
export default function MobileNavMenu() {
  const { closeMenu } = useMenuContext();
  return (
    <StyledMobileNavMenu>
      <button className="MobileNav__Backdrop" onClick={closeMenu} />
      <nav className="MobileNav__Nav">
        <div className="MobileNav__Top">
          <div>
            <Link href="/">
              <a onClick={closeMenu} className="MobileNav__NavLink">
                Home
              </a>
            </Link>
          </div>
          <div>
            <Link href="/#projects">
              <a onClick={closeMenu} className="MobileNav__NavLink">
                Projects
              </a>
            </Link>
          </div>
          <div>
            <Link href="/process">
              <a onClick={closeMenu} className="MobileNav__NavLink">
                Process
              </a>
            </Link>
          </div>
          {/* <div>
            <Link href="/blog">
              <a className="MobileNav__NavLink">Blog</a>
            </Link>
          </div> */}
          <div>
            <Link href="/about">
              <a onClick={closeMenu} className="MobileNav__NavLink">
                About
              </a>
            </Link>
          </div>
          <div>
            <a
              onClick={closeMenu}
              href="/Alex-Andres-Resume.pdf"
              className="MobileNav__NavLink"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="MobileNav__Bottom">
          <button
            aria-label="Activate Dark Mode"
            title="Activate Dark Mode"
            className="DarkModeToggle__IconWrapper"
          >
            <RiMoonFill />
          </button>
        </div>
      </nav>
    </StyledMobileNavMenu>
  );
}
