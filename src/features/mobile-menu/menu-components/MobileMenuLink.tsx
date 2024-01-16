import { NavLink } from "react-router-dom";

interface MobileMenuLinkProps {
  to: string;
  title: string;
}
export default function MobileMenuLink({ to, title }: MobileMenuLinkProps) {
  return (
    <NavLink
      to={to}
      className="py-2 text-xl hover:text-orange-500 dark:text-white dark:hover:text-cyan-300"
    >
      {({ isActive }) => (
        <li
          className={`${isActive ? "text-orange-500 dark:text-cyan-500" : ""}`}
        >
          {title}
        </li>
      )}
    </NavLink>
  );
}
