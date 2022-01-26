import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--seaFoam);
  color: var(--black);
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: (--shadow-elevation-low);
  font-size: 1.375rem;
  line-height: 1.375rem;
  width: max-content;
  height: max-content;
`;

export default function Button({ buttonText, className, path }) {
  return (
    <Link href={path}>
      <a>
        <StyledButton className={className}>{buttonText}</StyledButton>
      </a>
    </Link>
  );
}
