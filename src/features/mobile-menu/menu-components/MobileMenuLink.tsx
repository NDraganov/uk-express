import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { closeMobileMenu } from "../mobileMenuSlice";
import { type ReactNode } from "react";

interface MobileMenuLinkProps {
  to: string;
  title?: string;
  children?: ReactNode;
}

export default function MobileMenuLink({
  to,
  title,
  children,
}: MobileMenuLinkProps) {
  const dispatch = useAppDispatch();

  return (
    <NavLink
      to={to}
      className="py-2 text-xl hover:text-orange-500 dark:text-white dark:hover:text-cyan-300"
      onClick={() => dispatch(closeMobileMenu())}
    >
      {({ isActive }) => (
        <li
          className={`${isActive ? "text-orange-500 dark:text-cyan-500" : ""}`}
        >
          {title || children}
        </li>
      )}
    </NavLink>
  );
}
