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
          className={`text-base hover:text-gray-500 dark:hover:text-gray-300 ${
            isActive ? "text-orange-500 dark:text-cyan-500" : ""
          }`}
        >
          {title}
        </li>
      )}
    </NavLink>
  );
}
