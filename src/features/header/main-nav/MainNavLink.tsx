import { NavLink } from "react-router-dom";

type MainNavLinkProps = {
  title: string;
  to: string;
};

export default function MainNavLink({ title, to }: MainNavLinkProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `text-base hover:text-gray-500 dark:hover:text-gray-300 ${
            isActive ? "text-orange-500 dark:text-cyan-500" : ""
          }`
        }
        to={to}
      >
        {title}
      </NavLink>
    </li>
  );
}
