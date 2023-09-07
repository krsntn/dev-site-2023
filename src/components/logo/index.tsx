import { ReactSVG } from "react-svg";
import css from "./logo.module.css";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <ReactSVG
      className="inline-block w-[1rem] h-[1rem]"
      src="./logo.svg"
      beforeInjection={(svg) => {
        svg.classList.add(css.logo);
        if (theme === "light") svg.classList.add(css.black);
      }}
    />
  );
};

export default Logo;
