import styled from "styled-components";
import Link from "next/link";
import Logo from "./Logo";

const StyledLink = styled(Link)``;

export default function LogoLink({ size }) {
  return (
    <StyledLink href="/">
      <a aria-label="Branding logo Link to home page">
        <Logo size={size} />
      </a>
    </StyledLink>
  );
}
