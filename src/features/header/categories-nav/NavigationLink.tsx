import { NavLink, type NavLinkProps } from "react-router-dom";

type NavigationLinkProps = {
  to: string;
  title: string;
  type?: string;
  onClick?: () => void;
} & NavLinkProps;

export default function NavigationLink({
  to,
  title,
  type,
  onClick,
}: NavigationLinkProps) {
  if (onClick) {
    return (
      <li>
        <button
          className="w-max text-sm hover:text-orange-500 dark:hover:text-cyan-500"
          onClick={onClick}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-orange-500 dark:text-cyan-500" : ""
            }
            to={to}
          >
            {title}
          </NavLink>
        </button>
      </li>
    );
  } else {
    return (
      <button
        className={`my-1 text-sm font-light ${
          type === "terms"
            ? "text-slate-800 dark:text-cyan-500"
            : "text-slate-800 dark:text-gray-400"
        }  underline hover:text-slate-500  dark:hover:text-gray-300`}
      >
        <NavLink to={to}>{title}</NavLink>
      </button>
    );
  }
}
