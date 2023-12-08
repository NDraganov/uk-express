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
    <button className="flex gap-2 font-normal hover:text-orange-500 dark:hover:text-cyan-300">
      <NavLink to={to}>{title}</NavLink>
      {type === "sign-in" ? (
        <Icon value={{ className: "text-2xl" }}>
          <FaUserCheck />
        </Icon>
      ) : (
        <Icon value={{ className: "text-2xl" }}>
          <FaUserPlus />
        </Icon>
      )}
    </button>
  );
}
