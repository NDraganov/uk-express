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
      <NavLink to={to}>
        {({ isActive }) => (
          <li>
            <button
              className={`w-max rounded-md border px-4 py-1 text-sm  hover:bg-zinc-100 dark:hover:bg-slate-700 ${
                isActive && title !== "All products"
                  ? "border-black text-black dark:border-cyan-500 dark:text-cyan-500"
                  : "border-gray-500 text-gray-500 dark:text-slate-300"
              }`}
              title={title}
              onClick={onClick}
            >
              {title}
            </button>
          </li>
        )}
      </NavLink>
    );
  } else {
    return (
      <button
        className={`my-1 text-sm font-light ${
          type === "terms"
            ? "text-slate-800 dark:text-cyan-500"
            : "text-slate-800 dark:text-gray-400"
        }  underline hover:text-slate-500  dark:hover:text-gray-300`}
        title={title}
      >
        <NavLink to={to}>{title}</NavLink>
      </button>
    );
  }
}
