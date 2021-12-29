import styled from "styled-components";
import Link from "next/link";
import Logo from "./Logo";

const StyledLink = styled(Link)``;

export default function LogoLink({ size }) {
  return (
    <StyledLink href="/">
      <a>
        <Logo size={size} />
      </a>
    </StyledLink>
  );
}
