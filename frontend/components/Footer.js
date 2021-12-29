import styled from "styled-components";
import {
  FaDribbble,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import LogoLink from "./LogoLink";

const StyledFooter = styled.footer`
  background-color: var(--transparentSeaFoam);
  .Footer__InnerWrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100vw;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 32px;
    align-items: center;
    @media screen and (min-width: 1100px) {
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
      align-items: end;
    }
  }
  .Footer__LogoWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 1100px) {
      justify-content: start;
    }
  }
  .Footer__SocialIconWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 452px;
    margin: 0 auto;
  }
  .SocialIcon {
    height: 40px !important;
    width: 40px !important;
  }
  .Footer__Copyright {
    text-align: center;
    font-size: 12px;
    br {
      display: none;
    }
    width: 100%;
    @media screen and (min-width: 1100px) {
      text-align: right;
      br {
        display: inline-block;
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className="Footer__InnerWrapper">
        <div className="Footer__LogoWrapper">
          <LogoLink size="58px" />
        </div>
        <div className="Footer__SocialIconWrapper">
          <FaDribbble
            className="SocialIcon"
            shape-rendering="geometricPrecision"
          />
          <FaLinkedin className="SocialIcon" />
          <FaTwitter className="SocialIcon" />
          <FaInstagram className="SocialIcon" />
          <FaGithub className="SocialIcon" />
        </div>
        <div className="Footer__Copyright">
          Alex Andres © 2021 <br /> All Rights Reserved
        </div>
      </div>
    </StyledFooter>
  );
}
