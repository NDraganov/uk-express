import { type FormEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeCartModal, openCartModal } from "../cart/cartSlice";
import { closeUserBadge } from "../auth/authSlice";
import blackLogo from "../../assets/images/ukexpress-black-logo.svg";
import whiteLogo from "../../assets/images/ukexpress-white-logo.svg";
import MainNav from "./main-nav/MainNav";
import CartBadge from "../../ui/CartBadge";
import AuthHeaderButton from "../../ui/AuthHeaderButton";
import UserBadge from "./user-badge/UserBadge";
import DarkModeToggle from "./dark-mode/DarkModeToggle";
import MobileMenuButton from "../../ui/MobileMenuButton";
import SearchIcon from "../../ui/SearchIcon";

export default function Header() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { isDarkMode } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  function handleOpenCart(e: FormEvent) {
    e.stopPropagation();
    dispatch(openCartModal());
  }

  useEffect(() => {
    document.body.addEventListener("click", () => {
      dispatch(closeCartModal());
    });
  }, [dispatch]);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      dispatch(closeUserBadge());
    });
  }, [dispatch]);

  return (
    <div className="fixed left-0 right-0 top-0 z-10 border-b border-gray-300 bg-white text-black dark:border-gray-500 dark:bg-slate-900 dark:text-white">
      <header className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-4">
          <NavLink to="/" title="Home">
            <img
              className="h-14"
              loading="lazy"
              role="presentation"
              decoding="async"
              src={isDarkMode ? whiteLogo : blackLogo}
              alt="Logo"
            />
          </NavLink>

          <MainNav />
        </div>

        <div className="hidden sm:block">
          <div className="flex items-center gap-4">
            <SearchIcon size="text-xl" />
            <DarkModeToggle size="text-lg" />
            {isAuthenticated === "authenticated" ? (
              <UserBadge />
            ) : (
              <div className="flex items-center gap-2">
                <AuthHeaderButton
                  type="sign-in"
                  to="/sign-in"
                  title="Sign in"
                />
              </div>
            )}
            <CartBadge size="text-[1.5rem]" onOpen={(e) => handleOpenCart(e)} />
          </div>
        </div>
        <MobileMenuButton />
      </header>
    </div>
  );
}
