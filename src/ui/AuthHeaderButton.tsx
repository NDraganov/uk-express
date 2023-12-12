import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { FaUserCheck } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

interface AuthHeaderButtonProps {
  to: string;
  title: string;
  type: string;
}

export default function AuthHeaderButton({
  to,
  title,
  type,
}: AuthHeaderButtonProps) {
  return (
    <button className="font-normal hover:text-orange-500 dark:hover:text-cyan-300">
      <NavLink className="flex items-center gap-2 text-sm" to={to}>
        {title}
        {type === "sign-in" ? (
          <Icon value={{ className: "text-xl" }}>
            <FaUserCheck />
          </Icon>
        ) : (
          <Icon value={{ className: "text-2xl" }}>
            <FaUserPlus />
          </Icon>
        )}
      </NavLink>
    </button>
  );
}
