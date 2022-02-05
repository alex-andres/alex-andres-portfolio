import { createGlobalStyle } from "styled-components";
// import { ThemeProvider } from "../components/ThemeContext";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import { MagicScriptTag } from "../components/Theme/InlineCSSVariables";

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
    --darkgrey: hsl(0, 0%, 20%);
    --white: hsl(0, 100%, 100%);
    --transparentSeaFoam: hsl(143,100%,98%);
    --seaFoam: 	hsl(138, 42%, 65%);
    --aqua: hsl(175, 37%, 40%);
    --darkTeal: 	hsl(181, 56%, 17%);
    --dropShadow: hsla(0, 0%, 0%, 30%);
    --maxWidth: 1164px;
    --boxShadow: 2px 2px 8px var(--dropShadow);
    --color-text: hsl(0, 0%, 2%);
    --color-background: hsl(0, 0%, 100%);
    --color-primary: hsl(340, 100%, 40%);
    --color-secondary: hsl(0, 0%, 100%);
    --color-secondary-text: hsl(0, 0%, 20%);
    --color-shadows: 0deg 0% 63%;
    --color-mobile-bg: hsla(0deg, 0%, 100%, 0.75);
    --color-twitter-hover: hsl(180deg 14% 97%);
    --shadow-elevation-low:
      0.3px 0.5px 0.7px hsl(var(--color-shadows) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--color-shadows) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--color-shadows) / 0.34);
    --shadow-elevation-medium:
      0.3px 0.5px 0.7px hsl(var(--color-shadows) / 0.29),
      0.7px 1.3px 1.7px -0.6px hsl(var(--color-shadows) / 0.29),
      1.3px 2.6px 3.3px -1.2px hsl(var(--color-shadows) / 0.29),
      2.6px 5.2px 6.5px -1.9px hsl(var(--color-shadows) / 0.29),
      5px 10px 12.6px -2.5px hsl(var(--color-shadows) / 0.29);
    --shadow-elevation-high:
      0.3px 0.5px 0.7px hsl(var(--color-shadows) / 0.27),
      1.2px 2.4px 3px -0.3px hsl(var(--color-shadows) / 0.27),
      2.1px 4.3px 5.4px -0.6px hsl(var(--color-shadows) / 0.27),
      3.2px 6.5px 8.2px -0.8px hsl(var(--color-shadows) / 0.27),
      4.7px 9.4px 11.8px -1.1px hsl(var(--color-shadows) / 0.27),
      6.8px 13.6px 17.1px -1.4px hsl(var(--color-shadows) / 0.27),
      9.6px 19.3px 24.3px -1.7px hsl(var(--color-shadows) / 0.27),
      13.5px 27px 34px -1.9px hsl(var(--color-shadows) / 0.27),
      18.5px 37.1px 46.6px -2.2px hsl(var(--color-shadows) / 0.27),
      25px 50px 62.9px -2.5px hsl(var(--color-shadows) / 0.27);
    margin: 0;
    line-height: calc(1em + 0.625rem);
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    

  }
  /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

[data-theme='dark']{
  --color-text: hsl(0, 0%, 100%);
  --color-background: hsl(0, 0%, 5%);
  --color-primary: hsl(50, 100%, 50%);
  --color-secondary: hsl(0, 0%, 4%);
  --color-secondary-text: hsl(0, 0%, 100%);
  --color-shadows: hsl(0, 0% 37%);
  --color-mobile-bg: hsla(0, 0%, 5%, 0.85);
  --color-twitter-hover: hsl(180, 14% 3%);
}
#__next{
  position: relative;
  ::before{
      content: "";
      position: fixed;
      top:0;
      right: 0;
      height: 150vh;
      aspect-ratio: 75/66;
      background: url(./logo.svg);
      filter: opacity(10%);
      z-index: -1;
      @media only screen and (min-width: 1080px){
        top: 0;
        right: 0;
        height: 200vh;
      }
    }
}
  *,::before, ::after{
    box-sizing: border-box;
  }
  html{
    overflow-x: hidden; 
    scroll-behavior: smooth;
  }
  body{
    margin: 0;
    height: 100%;
    font-family: Outfit, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5, h6, p{
    font-weight: 300;
  }

  h1{
    font-size: 3.125rem;
  } 
  h2{
    font-size: 2.5rem;
    @media only screen and (min-width: 1201px){
      font-size: 4rem;
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
  a{
    text-decoration: none;
    &:visted{
      color: inherit;
    }
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <MagicScriptTag />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
