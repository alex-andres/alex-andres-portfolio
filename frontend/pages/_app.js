import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/layout";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Outfit';
    src: url('/fonts/Outfit-Regular.woff2') format('woff2'),
         url('/fonts/Outfit-Regular.woff') format('woff'),
         url('/fonts/Outfit-VariableFont_wght.ttf')  format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  :root{
    --black: hsl(0, 0%, 3%);
    --white: hsl(0, 100%, 100%);
    --transparentSeaFoam: hsl(140, 100%, 98%);
    --seaFoam: 	hsl(138, 42%, 65%);
    --aqua: hsl(175, 37%, 40%);
    --darkTeal: 	hsl(181, 56%, 17%);
    --dropShadow: hsla(0, 0%, 0%, 30%);
    --maxWidth: 1100px;
    --boxShadow: 0 3px 6px var(--dropShadow);
  }
    margin: 0;
    line-height: calc(1em + 0.625rem);
    -webkit-font-smoothing: antialiased;
  }
  *,::before, ::after{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    height: 100%;
    font-family: Outfit, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    ::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: url(./logo.svg);
      filter: opacity(15%);
    }
  }
  ul{
    padding: 0px;
  }
  button{
    display: block;
    margin: 0px;
    padding: 0px;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    font: inherit;
  }
`;
const theme = {
  colors: {
    primary: "#fafafa",
  },
};
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
