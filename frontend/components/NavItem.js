import Link from "next/link";
import styled from "styled-components";

const NavItem__Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .NavItem__NavItemLink {
    position: relative;
    padding: 10px;
    font-size: 1.2rem;
    text-decoration: none;
    color: var(--black);
  }
`;

export default function NavItem({ title, scroll }) {
  const name = title[0].toUpperCase() + title.slice(1);
  if (scroll) {
    title = `#${title}`;
  }
  return (
    <NavItem__Wrapper>
      <Link href={`/${title}`}>
        <a className="NavItem__NavItemLink">{name}</a>
      </Link>
    </NavItem__Wrapper>
  );
}
