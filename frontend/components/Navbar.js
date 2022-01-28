import styled from "styled-components";
// import dynamic from "next/dynamic";
// const MobileNavBar = dynamic(() => import("../MobileNavBar"));
import MobileNavBar from "./MobileNavBar";
import LogoLink from "./LogoLink";
import NavItem from "./NavItem";
import useScrollPositon from "../hooks/useScrollPosition";
import { MenuProvider } from "../state/Menu";
import StyledLink from "./UI-Components/StyledLink";
import MoonIcon from "./icons/MoonIcon";

const Header = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  background: ${(props) =>
    props.scrollPosition > 32 ? "var(--white)" : "none"};
  box-shadow: ${(props) =>
    props.scrollPosition > 32 ? "var(--shadow-elevation-medium)" : "none"};
  transition: box-shadow ease-in 0.15s;
  .Header__Wrapper {
    margin: 0 auto;
    max-width: var(--maxWidth);
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    @media only screen and (min-width: 768px) {
      padding: 0px 32px;
    }
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
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--black);
  }
  .Header__RightDesktop {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .DarkModeToggle__IconWrapper {
    svg {
      height: 24px;
      width: 21.45px;
    }
  }
`;

export default function Navbar() {
  const scrollPosition = useScrollPositon();
  return (
    <MenuProvider>
      <Header scrollPosition={scrollPosition}>
        <div className="Header__Wrapper">
          <div className="Header__Left">
            <div className="Logo__Wrapper">
              <LogoLink />
            </div>
            <nav className="Navigation__Wrapper">
              <ul className="Navigation__List">
                <li className="Navigation__ListItem">
                  <NavItem title={"projects"} scroll={true} />
                </li>
                <li className="Navigation__ListItem">
                  <NavItem title={"process"} />
                </li>
                <li className="Navigation__ListItem">
                  <NavItem title={"about"} />
                </li>
                <li className="Navigation__ListItem">
                  <div className="NavItem__Wrapper">
                    <div className="NavItem__NavItemLink">
                      <StyledLink
                        href="/Alex-Andres-Resume-2022.pdf"
                        anchor={true}
                        title="Resume"
                      />
                    </div>
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
              <MoonIcon />
            </button>
          </div>
          <div className="Header__RightMobile">
            <MobileNavBar />
          </div>
        </div>
        {}
      </Header>
    </MenuProvider>
  );
}
