import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import CartBadge from "../../ui/CartBadge";
import DarkModeToggle from "../../ui/DarkModeToggle";
import SearchIcon from "../../ui/SearchIcon";
import CloseButton from "./menu-components/CloseButton";
import MobileMenuLink from "./menu-components/MobileMenuLink";

export default function MobileMenu() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-lime-500 p-5 dark:bg-slate-900">
      <div className="flex justify-between">
        <p className="text-xl text-slate-100">UkExpress</p>
        <CloseButton />
      </div>
      <div className="flex items-center justify-between px-10 py-5">
        <SearchIcon size="text-4xl" />
        <DarkModeToggle size="text-3xl" />
        <NavLink to={`/users/${user?.id}/my-cart`}>
          <CartBadge size="text-4xl" />
        </NavLink>
      </div>
      <nav>
        <ul className="flex flex-col">
          <MobileMenuLink to="/" title="Home" />
          <MobileMenuLink to="/products" title="Products" />
        </ul>
      </nav>
    </div>
  );
}
