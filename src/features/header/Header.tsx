import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { NavLink } from "react-router-dom";
import { openCart } from "../cart/cartSlice";
import Input from "../../ui/Input";
import CartModal from "../cart/CartModal";
import CartBadge from "../../ui/CartBadge";
import AuthHeaderButton from "../../ui/AuthHeaderButton";
import UserBadge from "../../ui/UserBadge";
import Icon from "../../ui/Icon";
import { IoIosSearch } from "react-icons/io";
import CategoriesNav from "./CategoriesNav";

export default function Header() {
  const cart = useAppSelector((state) => state.cart.isVisible);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  function handleOpenCart() {
    dispatch(openCart());
  }

  return (
    <div className="fixed left-0 right-0 top-0 z-10 bg-white">
      <header className="flex h-14 items-center justify-between border-b border-gray-300 px-3 py-2 text-black">
        <h2 className="text-2xl font-light">
          <NavLink to="/">
            UkExpress
            <span className="text-base">.co.uk</span>
          </NavLink>
        </h2>
        <div className="flex items-center rounded-md border border-gray-400 pr-2">
          <Input />
          <Icon value={{ className: "text-[1.5rem]" }}>
            <IoIosSearch />
          </Icon>
        </div>
        <div className="flex items-center gap-4 ">
          {isAuthenticated === "authenticated" ? (
            <UserBadge />
          ) : (
            <div className="flex items-center gap-2">
              <AuthHeaderButton to="/sign-in" title="Login" />
              <AuthHeaderButton to="/sign-up" title="Register" />
            </div>
          )}
          <CartBadge onOpen={handleOpenCart} />
        </div>

        {cart === true && <CartModal />}
      </header>
      <CategoriesNav />
    </div>
  );
}
