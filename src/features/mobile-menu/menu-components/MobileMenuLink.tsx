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
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-xl hover:text-orange-500 dark:text-white dark:hover:text-cyan-300 ${
            isActive ? "text-orange-500 dark:text-cyan-500" : ""
          }`
        }
        title={title}
        onClick={() => dispatch(closeMobileMenu())}
      >
        {title || children}
      </NavLink>
    </li>
  );
}
