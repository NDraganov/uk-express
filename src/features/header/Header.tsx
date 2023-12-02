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

export default function Header() {
  const cart = useAppSelector((state) => state.cart.isVisible);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  function handleOpenCart() {
    dispatch(openCart());
  }

  return (
    <header className="flex h-14 items-center justify-between bg-black px-3 py-2 text-slate-200">
      <h2 className="flex items-baseline text-2xl font-bold">
        <NavLink to="/">UkExpress</NavLink>
        <span className="text-base font-normal">.co.uk</span>
      </h2>
      <div className="flex items-center">
        <Input />
        <div className="rounded-r-md bg-orange-600 p-1">
          <Icon value={{ className: "text-[1.5rem]" }}>
            <IoIosSearch />
          </Icon>
        </div>
      </div>
      <div className="flex items-baseline gap-4 ">
        {isAuthenticated === "authenticated" ? (
          <UserBadge />
        ) : (
          <div className="flex items-center gap-2">
            <AuthHeaderButton to="/sign-in" title="Login" />
            /
            <AuthHeaderButton to="/sign-up" title="Register" />
          </div>
        )}
        <CartBadge onOpen={handleOpenCart} />
      </div>

      {cart === true && <CartModal />}
    </header>
  );
}
