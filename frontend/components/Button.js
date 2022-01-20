import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--seaFoam);
  color: var(--white);
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: (--shadow-elevation-low);
  font-size: 1.375rem;
  line-height: 1.375rem;
`;

export default function Button({ buttonText }) {
  return <StyledButton>{buttonText}</StyledButton>;
}
