export const COLORS = {
  text: {
    light: "hsl(0deg, 0%, 2%)", // white
    dark: "hsl(0deg, 0%, 100%)", // near-black
  },
  background: {
    light: "hsl(0deg, 0%, 100%)", // white
    dark: "hsl(0deg, 0%, 10%)", // dark grey
  },
  primary: {
    light: "hsl(340deg, 100%, 40%)", // Pinkish-red
    dark: "hsl(50deg, 100%, 50%)", // Yellow
  },
  secondary: {
    light: "hsl(0deg, 0%, 100%)", // Purplish-blue
    dark: "hsl(0deg, 0%, 5%)", // near-black
  },
  "secondary-text": {
    light: "hsl(0, 0%, 20%)", // dark-grey
    dark: "hsl(0deg, 0%, 100%)", // near-black
  },
  shadows: {
    light: "0deg 0% 63%;",
    dark: "0deg 0% 37%;",
  },
  "mobile-bg": {
    light: "hsla(0deg, 0%, 100%, 0.75)",
    dark: "hsla(0deg, 0%, 5%, 0.85)",
  },
};

export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
