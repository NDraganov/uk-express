import { NavLink, type NavLinkProps } from "react-router-dom";

type MobileUserNavLinkProps = {
  to: string;
  title: string;
} & NavLinkProps;

export default function MobileUserNavLink({
  to,
  title,
  ...restProps
}: MobileUserNavLinkProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive
              ? "text-orange-500 dark:text-cyan-500"
              : "text-black dark:text-white"
          }`
        }
        {...restProps}
      >
        {title}
      </NavLink>
    </li>
  );
}
