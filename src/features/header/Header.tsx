import { type FormEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeCart, openCart } from "../cart/cartSlice";
import { closeUserBadge } from "../auth/authSlice";
import MainNav from "./main-nav/MainNav";
import CartModal from "../cart/CartModal";
import CartBadge from "../../ui/CartBadge";
import AuthHeaderButton from "../../ui/AuthHeaderButton";
import UserBadge from "./user-badge/UserBadge";
import DarkModeToggle from "../../ui/DarkModeToggle";
import MobileMenuButton from "../../ui/MobileMenuButton";
import SearchIcon from "../../ui/SearchIcon";

export default function Header() {
  const { isVisible } = useAppSelector((state) => state.cart);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  function handleOpenCart(e: FormEvent) {
    e.stopPropagation();
    dispatch(openCart());
  }

  useEffect(() => {
    document.body.addEventListener("click", () => {
      dispatch(closeCart());
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
              className="w-28"
              loading="lazy"
              role="presentation"
              decoding="async"
              src="/src/assets/images/ukexpress-logo.svg"
              alt=""
            />
          </NavLink>

          <MainNav />
        </div>

        <div className="hidden sm:block">
          <div className="flex items-center gap-4">
            <SearchIcon size="text-lg" />
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

        {isVisible === true && <CartModal />}
      </header>
    </div>
  );
}
