import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import { FaUserCheck } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

interface AuthHeaderButtonProps {
  to: string;
  title: string;
  type: string;
  onClose?: () => void;
}

export default function AuthHeaderButton({
  to,
  title,
  type,
  onClose,
}: AuthHeaderButtonProps) {
  return (
    <button
      className="rounded-md bg-lime-400 px-2 py-1 hover:bg-lime-300 dark:text-black"
      title="Sign in"
    >
      <NavLink
        className="flex items-center gap-2 text-sm"
        to={to}
        onClick={onClose}
      >
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
