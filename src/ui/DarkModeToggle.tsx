import { useEffect, useState } from "react";
import Icon from "./Icon";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";

interface DarkModeToggleProps {
  size: string;
}

export default function DarkModeToggle({ size }: DarkModeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [isDarkMode],
  );

  return (
    <div className="flex items-center">
      <button className="" onClick={() => setIsDarkMode((isDark) => !isDark)}>
        {isDarkMode ? (
          <Icon
            value={{
              className: `fill-cyan-500 hover:fill-cyan-300 ${size}`,
            }}
          >
            <BsFillSunFill />
          </Icon>
        ) : (
          <Icon
            value={{
              className: `fill-cyan-500 hover:fill-cyan-300 ${size}`,
            }}
          >
            <BsMoonStars />
          </Icon>
        )}
      </button>
    </div>
  );
}
