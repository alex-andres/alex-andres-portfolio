import Link from "next/link";
import styled from "styled-components";
import StyledLink from "./UI-Components/StyledLink";

const NavItem__Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export default function NavItem({ title, scroll }) {
  const name = title[0].toUpperCase() + title.slice(1);
  if (scroll) {
    title = `#${title}`;
  }
  return (
    <NavItem__Wrapper>
      <StyledLink title={name} href={title} />
    </NavItem__Wrapper>
  );
}
