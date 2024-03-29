import styled from "styled-components";
import Link from "next/link";
import { useMenuContext } from "../state/Menu";
import { motion, AnimatePresence } from "framer-motion";
import MoonIcon from "./icons/ThemeToggleIcon";
import ThemeToggleButton from "./ThemeToggleButton";

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
    background: var(--color-mobile-bg);
    backdrop-filter: blur(8px);
  }
  .MobileNav__NavLink {
    position: relative;
    display: block;
    text-decoration: none;
    padding: 16px 16px 16px 32px;
    color: var(--color-text);
    font-size: 28px;
  }
  .MobileNav__Bottom {
    padding-top: 10vh;
    .ThemeToggleIconWrapper {
      padding: 16px 16px 16px 32px;
    svg {
      fill: var(--color-text));
      height: 40px !important;
      width: auto !important;
    }
    }
  }
`;

const MotionMobileNavMenu = motion(StyledMobileNavMenu);
const MotionMobileNav = motion.div;
const list = {
  visible: {
    transition: {
      ease: "easeIn",
      duration: 0.25,
    },
  },
  hidden: {
    transition: {
      ease: "easein",
      duration: 0.25,
    },
  },
};
export default function MobileNavMenu() {
  const { closeMenu } = useMenuContext();
  return (
    <MotionMobileNavMenu
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <AnimatePresence>
        <motion.button
          initial={{
            opacity: 0,
            transition: { ease: "easeIn", duration: 0.4 },
          }}
          animate={{
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.1 },
          }}
          exit={{
            opacity: 0,
            transition: { ease: "easeIn", duration: 0.4 },
          }}
          className="MobileNav__Backdrop"
          onClick={closeMenu}
          key="button-background"
        />
      </AnimatePresence>
      <nav className="MobileNav__Nav">
        <MotionMobileNav
          initial="hidden"
          animate="visible"
          variants={list}
          className="MobileNav__Top"
        >
          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
                x: -125,
                transition: { ease: "easeIn", duration: 0.4 },
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { ease: "easeOut", duration: 0.1 },
              }}
              exit={{
                opacity: 0,
                x: -125,
                transition: { ease: "easeIn", duration: 0.4 },
              }}
              key="home"
            >
              <Link href="/">
                <a onClick={closeMenu} className="MobileNav__NavLink">
                  Home
                </a>
              </Link>
            </motion.div>
            <motion.div
              variants={{
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { ease: "easeOut", duration: 0.42 },
                },
                hidden: { x: -125, opacity: 0 },
              }}
              key="projects"
            >
              <Link href="/#projects">
                <a onClick={closeMenu} className="MobileNav__NavLink">
                  Projects
                </a>
              </Link>
            </motion.div>
            <motion.div
              variants={{
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { ease: "easeOut", duration: 0.46 },
                },
                hidden: { x: -125, opacity: 0 },
              }}
              key="process"
            >
              <Link href="/process">
                <a onClick={closeMenu} className="MobileNav__NavLink">
                  Process
                </a>
              </Link>
            </motion.div>
            {/* <div>
            <Link href="/blog">
              <a className="MobileNav__NavLink">Blog</a>
            </Link>
          </div> */}
            <motion.div
              variants={{
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { ease: "easeOut", duration: 0.52 },
                },
                hidden: { x: -125, opacity: 0 },
              }}
              key="about"
            >
              <Link href="/about">
                <a onClick={closeMenu} className="MobileNav__NavLink">
                  About
                </a>
              </Link>
            </motion.div>
            <motion.div
              variants={{
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { ease: "easeOut", duration: 0.6 },
                },
                hidden: { x: -125, opacity: 0 },
              }}
              key="resume"
            >
              <a
                onClick={closeMenu}
                href="/Alex-Andres-CV-2023.pdf"
                className="MobileNav__NavLink"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </motion.div>
            <motion.div
              className="MobileNav__Bottom"
              variants={{
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { ease: "easeOut", duration: 0.7 },
                },
                hidden: { x: -125, opacity: 0 },
              }}
              key="dark-mode"
            >
              <ThemeToggleButton className={"theme-toggle-button"} />
            </motion.div>
          </AnimatePresence>
        </MotionMobileNav>
      </nav>
    </MotionMobileNavMenu>
  );
}
