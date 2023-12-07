import { NavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  title: string;
  type?: string;
  onClick?: () => void;
}

export default function NavigationLink({
  to,
  title,
  type,
  onClick,
}: NavLinkProps) {
  if (onClick) {
    return (
      <li>
        <button className="font-normal" onClick={onClick}>
          <NavLink className="" to={to}>
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
