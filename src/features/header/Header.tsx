import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { NavLink } from "react-router-dom";
import { openCart } from "../cart/cartSlice";
import Input from "../../ui/Input";
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

  return (
    <div className="fixed left-0 right-0 top-0 z-10 bg-white text-black dark:bg-slate-900 dark:text-white">
      <header className="flex h-14 items-center justify-between px-3 py-2">
        <h2 className="text-2xl font-light hover:text-orange-500 dark:hover:text-cyan-300">
          <NavLink to="/">
            UkExpress
            <span className="text-base">.co.uk</span>
          </NavLink>
        </h2>
        <div className="flex items-center rounded-md border border-gray-400 pr-2 dark:border-gray-500">
          <Input />
          <Icon value={{ className: "text-[1.5rem]" }}>
            <IoIosSearch />
          </Icon>
        </div>
        <div className="flex items-center gap-4 ">
          <DarkModeToggle />
          {isAuthenticated === "authenticated" ? (
            <UserBadge />
          ) : (
            <div className="flex items-center gap-2">
              <AuthHeaderButton type="sign-in" to="/sign-in" title="SIGN IN" />
              {/* <AuthHeaderButton type="sign-up" to="/sign-up" title="SIGN UP" /> */}
            </div>
          )}
          <CartBadge onOpen={() => dispatch(openCart())} />
        </div>

        {cart === true && <CartModal />}
      </header>
      <CategoriesNav />
    </div>
  );
}
