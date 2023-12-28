import { NavLink } from "react-router-dom";

type MainNavLinkProps = {
  title: string;
  to: string;
};

export default function MainNavLink({ title, to }: MainNavLinkProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <li
          className={`rounded-md px-4 py-1 text-base hover:bg-zinc-100 dark:hover:bg-slate-800 ${
            isActive
              ? "bg-zinc-100 text-orange-500 dark:bg-slate-800 dark:text-cyan-500"
              : ""
          }`}
        >
          {title}
        </li>
      )}
    </NavLink>
  );
}
