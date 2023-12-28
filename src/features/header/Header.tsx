import { type FormEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showSearchModal } from "./search/searchSlice";
import { closeCart, openCart } from "../cart/cartSlice";
import MainNav from "./main-nav/MainNav";
import CartModal from "../cart/CartModal";
import CartBadge from "../../ui/CartBadge";
import AuthHeaderButton from "../../ui/AuthHeaderButton";
import UserBadge from "../../ui/UserBadge";
import CategoriesNav from "./CategoriesNav";
import DarkModeToggle from "../../ui/DarkModeToggle";
import Icon from "../../ui/Icon";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const cart = useAppSelector((state) => state.cart.isVisible);
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

  return (
    <div className="fixed left-0 right-0 top-0 z-10 bg-white text-black dark:bg-slate-900 dark:text-white">
      <header className="flex h-14 items-center justify-between px-3 py-2">
        <h2 className="text-2xl font-light hover:text-orange-500 dark:hover:text-cyan-300">
          <NavLink className="flex items-baseline" to="/">
            UkExpress
            <span className="hidden text-base sm:block">.co.uk</span>
          </NavLink>
        </h2>

        <MainNav />

        <div className="flex items-center gap-4 ">
          <button onClick={() => dispatch(showSearchModal())}>
            <Icon
              value={{
                className:
                  "text-xl hover:fill-slate-400 dark:hover:fill-cyan-300",
              }}
            >
              <IoIosSearch />
            </Icon>
          </button>
          <DarkModeToggle />
          {isAuthenticated === "authenticated" ? (
            <UserBadge />
          ) : (
            <div className="flex items-center gap-2">
              <AuthHeaderButton type="sign-in" to="/sign-in" title="Sign in" />
              {/* <AuthHeaderButton type="sign-up" to="/sign-up" title="SIGN UP" /> */}
            </div>
          )}
          <CartBadge onOpen={(e) => handleOpenCart(e)} />
        </div>

        {cart === true && <CartModal />}
      </header>
      <CategoriesNav />
    </div>
  );
}
