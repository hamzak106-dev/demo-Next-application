import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  setTheme("light")

};

export default ThemeToggler;
