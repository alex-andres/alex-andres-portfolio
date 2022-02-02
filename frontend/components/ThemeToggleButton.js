import { useContext } from "react";
import ThemeToggleIcon from "./icons/ThemeToggleIcon";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggleButton() {
  const { colorMode, rawSetColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }
  return (
    <button
      aria-label="Activate Dark Mode"
      title="Activate Dark Mode"
      className="ThemeToggleIconWrapper"
      onClick={() =>
        colorMode === "light"
          ? rawSetColorMode("dark")
          : rawSetColorMode("light")
      }
    >
      <ThemeToggleIcon colorMode={colorMode} />
    </button>
  );
}
