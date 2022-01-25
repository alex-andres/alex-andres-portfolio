// import styled from "styled-components";

// const StyledMaxWidthWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   max-width: ${(props) => (props.width ? props.width : "var(--maxWidth)")};
//   margin: 0 auto;
//   padding: 48px 32px 0px;
//   @media screen and (min-width: 564px) {
//     padding: 48px 32px 0px;
//   }
// `;

// export default function MaxWidthWrapper({ width, children }) {
//   return <MaxWidthWrapper width={width}>{children}</MaxWidthWrapper>;
// }

import styled from "styled-components";

const MaxWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 48px 32px 0px;
  @media screen and (min-width: 564px) {
    padding: 48px 32px 0px;
  }
`;

export default MaxWidthWrapper;
