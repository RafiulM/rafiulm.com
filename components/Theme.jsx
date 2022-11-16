import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export function ThemeChanger() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        className="text-1xl px-2 py-2 rounded-full ml-4 dark:bg-white dark:text-black"
        aria-label="light theme"
        onClick={() => setTheme("light")}
      >
        <BsSunFill />
      </button>
    );
  } else {
    return (
      <button
        className="text-1xl px-2 py-2 rounded-full ml-4 text-white bg-black"
        aria-label="dark theme"
        onClick={() => setTheme("dark")}
      >
        <BsFillMoonStarsFill />
      </button>
    );
  }
}
