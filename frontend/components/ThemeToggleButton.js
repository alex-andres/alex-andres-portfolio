import { useContext } from "react";
import ThemeToggleIcon from "./icons/ThemeToggleIcon";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggleButton() {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const setTheme = () => {
    console.log(colorMode);
    console.log("clicked");
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <button
      aria-label="Activate Dark Mode"
      title="Activate Dark Mode"
      className="ThemeToggleIconWrapper"
      onClick={setTheme}
    >
      <ThemeToggleIcon colorMode={colorMode} />
    </button>
  );
}
