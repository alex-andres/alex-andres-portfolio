import ThemeToggleIcon from "./icons/ThemeToggleIcon";
import { useTheme } from 'next-themes'

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  if (!theme) {
    return null;
  }
  return (
    <button
      aria-label="Activate Dark Mode"
      title="Activate Dark Mode"
      className="ThemeToggleIconWrapper"
      onClick={() =>
        theme === "light"
          ? setTheme("dark")
          : setTheme("light")
      }
    >
      <ThemeToggleIcon theme={theme} />
    </button>
  );
}
