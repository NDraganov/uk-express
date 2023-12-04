import { useEffect, useState } from "react";
import Icon from "./Icon";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

export default function DarkModeToggle() {
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
    <div>
      <button className="" onClick={() => setIsDarkMode((isDark) => !isDark)}>
        {isDarkMode ? (
          <Icon value={{ className: "fill-cyan-500 dark:fill-amber-500" }}>
            <IoSunnyOutline />
          </Icon>
        ) : (
          <Icon value={{ className: "fill-cyan-500 dark:fill-cyan-500" }}>
            <BsMoonStars />
          </Icon>
        )}
      </button>
    </div>
  );
}
