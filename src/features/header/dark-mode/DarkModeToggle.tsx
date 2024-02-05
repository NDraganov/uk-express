import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Icon from "../../../ui/Icon";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { toggleDarkMode } from "./darkModeSlice";

interface DarkModeToggleProps {
  size: string;
}

export default function DarkModeToggle({ size }: DarkModeToggleProps) {
  const { isDarkMode } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

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
      <button
        title="Toggle dark and light mode"
        onClick={() => dispatch(toggleDarkMode())}
      >
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
