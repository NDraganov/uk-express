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
      <NavLink to={to} {...restProps}>
        {title}
      </NavLink>
    </li>
  );
}
