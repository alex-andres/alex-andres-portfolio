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
    --transparentSeaFoam: hsl(143,100%,98%);
    --seaFoam: 	hsl(138, 42%, 65%);
    --aqua: hsl(175, 37%, 40%);
    --darkTeal: 	hsl(181, 56%, 17%);
    --dropShadow: hsla(0, 0%, 0%, 30%);
    --maxWidth: 1100px;
    --boxShadow: 0 3px 6px var(--dropShadow);
    --shadow-color: 0deg 0% 63%;
    --shadow-elevation-low:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-elevation-medium:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.29),
      0.7px 1.3px 1.7px -0.6px hsl(var(--shadow-color) / 0.29),
      1.3px 2.6px 3.3px -1.2px hsl(var(--shadow-color) / 0.29),
      2.6px 5.2px 6.5px -1.9px hsl(var(--shadow-color) / 0.29),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.29);
    --shadow-elevation-high:
      0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.27),
      1.2px 2.4px 3px -0.3px hsl(var(--shadow-color) / 0.27),
      2.1px 4.3px 5.4px -0.6px hsl(var(--shadow-color) / 0.27),
      3.2px 6.5px 8.2px -0.8px hsl(var(--shadow-color) / 0.27),
      4.7px 9.4px 11.8px -1.1px hsl(var(--shadow-color) / 0.27),
      6.8px 13.6px 17.1px -1.4px hsl(var(--shadow-color) / 0.27),
      9.6px 19.3px 24.3px -1.7px hsl(var(--shadow-color) / 0.27),
      13.5px 27px 34px -1.9px hsl(var(--shadow-color) / 0.27),
      18.5px 37.1px 46.6px -2.2px hsl(var(--shadow-color) / 0.27),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.27);
  }
    margin: 0;
    line-height: calc(1em + 0.625rem);
    -webkit-font-smoothing: antialiased;
  }
  *,::before, ::after{
    box-sizing: border-box;
  }
  html{
    overflow-x: hidden; 
  }
  body{
    margin: 0;
    height: 100%;
    font-family: Outfit, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    
    ::before{
      content: "";
      position: fixed;
      right: 0;
      bottom: 0;
      height: inherit;
      aspect-ratio: 75/66;
      background: url(./logo.svg);
      filter: opacity(10%);
      z-index: -1;
      @media (min-width: 1080px){
        position: absolute;
      }
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
