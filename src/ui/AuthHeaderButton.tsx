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
    <button className="rounded-md bg-lime-400 px-2 py-1 hover:bg-lime-300 dark:text-black">
      <NavLink className="flex items-center gap-2 text-sm" to={to}>
        {title}
        {type === "sign-in" ? (
          <Icon value={{ className: "" }}>
            <FaUserCheck />
          </Icon>
        ) : (
          <Icon value={{ className: "" }}>
            <FaUserPlus />
          </Icon>
        )}
      </NavLink>
    </button>
  );
}
