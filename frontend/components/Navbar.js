import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import MobileNavPortal from "./MobileNavbarPortal";
import { useState } from "react";
import MobileNavBar from "./MobileNavbar";
import LogoLink from "./LogoLink";

const MaxWidthWrapper = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  padding: 0 32px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: var(--white);
  .Header__Wrapper {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
  .Header__Left {
    flex: 1 1 0%;
    display: flex;
    align-items: center;
  }
  .Logo__Wrapper {
    margin-right: 32px;
  }
  .Navigation__Wrapper {
    display: flex;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .Navigation__List {
    display: flex;
    list-style: none;
  }
  .Navigation__ListItem {
    margin: 10px;
  }
  .NavItem__Wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  .NavItem__NavItemLink {
    position: relative;
    padding: 10px;
    font-size: 1rem;
    text-decoration: none;
    color: var(--black);
  }
  .Header__RightDesktop {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .DarkModeToggle__IconWrapper {
  }
`;

export default function Navbar() {
  return (
    <MaxWidthWrapper>
      <header className="Header__Wrapper">
        <div className="Header__Left">
          <div className="Logo__Wrapper">
            <LogoLink />
          </div>
          <nav className="Navigation__Wrapper">
            <ul className="Navigation__List">
              <li className="Navigation__ListItem">
                <div className="NavItem__Wrapper">
                  <Link href="/projects">
                    <a className="NavItem__NavItemLink">Projects</a>
                  </Link>
                </div>
              </li>
              <li className="Navigation__ListItem">
                <div className="NavItem__Wrapper">
                  <Link href="/process">
                    <a className="NavItem__NavItemLink">Process</a>
                  </Link>
                </div>
              </li>
              <li className="Navigation__ListItem">
                <div className="NavItem__Wrapper">
                  <Link href="/blog">
                    <a className="NavItem__NavItemLink">Blog</a>
                  </Link>
                </div>
              </li>
              <li className="Navigation__ListItem">
                <div className="NavItem__Wrapper">
                  <Link href="/about">
                    <a className="NavItem__NavItemLink">About</a>
                  </Link>
                </div>
              </li>
              <li className="Navigation__ListItem">
                <div className="NavItem__Wrapper">
                  <a
                    className="NavItem__NavItemLink"
                    href="https://drive.google.com/file/d/1YECREGOHfolmrIrjWCqNfxFzJjUaPq0S/view"
                  >
                    Resume
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="Header__RightDesktop">
          <button
            aria-label="Activate Dark Mode"
            title="Activate Dark Mode"
            className="DarkModeToggle__IconWrapper"
          >
            <RiMoonFill />
          </button>
        </div>
        <div className="Header__RightMobile">
          <MobileNavPortal>
            <MobileNavBar />
          </MobileNavPortal>
        </div>
      </header>
      {}
    </MaxWidthWrapper>
  );
}
