import styled from "styled-components";
import MobileNavBar from "./MobileNavBar";
import LogoLink from "./LogoLink";
import NavItem from "./NavItem";
import useScrollPositon from "../hooks/useScrollPosition";
import { MenuProvider } from "../state/Menu";
import StyledLink from "./UI-Components/StyledLink";
import { motion } from "framer-motion";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  background: ${(props) =>
    props.scrollPosition > 32 ? "var(--color-secondary)" : "none"};
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
    color: var(--color-text));
  }
  .Header__RightDesktop {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .ThemeToggleButtonWrapper {
    svg {
      height: 24px;
      width: 21.45px;
    }
  }
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    staggerChildren: 0.1,
  },
};

const item = {
  hidden: { opacity: 0 },
  show: (custom) => ({
    opacity: 1,
    transition: {
      duration: custom * 0.5,
      ease: [0.6, 0.01, 0.01, 1],
    },
  }),
};

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
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="Navigation__List"
              >
                <motion.li
                  custom={2}
                  variants={item}
                  className="Navigation__ListItem"
                >
                  <NavItem title={"projects"} scroll={true} />
                </motion.li>
                <motion.li
                  custom={2.25}
                  variants={item}
                  className="Navigation__ListItem"
                >
                  <NavItem title={"process"} />
                </motion.li>
                <motion.li
                  variants={item}
                  custom={2.5}
                  className="Navigation__ListItem"
                >
                  <NavItem title={"about"} />
                </motion.li>
                <motion.li
                  variants={item}
                  custom={2.75}
                  className="Navigation__ListItem"
                >
                  <motion.div
                    variants={item}
                    custom={3}
                    className="NavItem__Wrapper"
                  >
                    <div className="NavItem__NavItemLink">
                      <StyledLink
                        href="/Alex-Andres-CV-2023.pdf"
                        anchor={true}
                        title="Resume"
                      />
                    </div>
                  </motion.div>
                </motion.li>
              </motion.ul>
            </nav>
          </div>
          <div className="Header__RightDesktop">
            <ThemeToggleButton />
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
