import { type FormEvent } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { showUserBadge, signOutUser } from "../../auth/authSlice";
import { HiLogout } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { IoBagCheck } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import Icon from "../../../ui/Icon";

export default function UserBadge() {
  const { user, isUserBadgeVisible, fullName, isLoading } = useAppSelector(
    (state) => state.auth,
  );
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function handleOpenUserBadge(e: FormEvent) {
    e.stopPropagation();
    dispatch(showUserBadge());
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="hover:cursor-pointer hover:text-gray-600 dark:hover:text-lime-400"
        onClick={(e) => handleOpenUserBadge(e)}
      >
        {fullName}
      </div>

      {isUserBadgeVisible && (
        <div className="absolute top-14 rounded-md border border-slate-300 bg-white py-1 shadow-md dark:border-gray-500 dark:bg-slate-800 dark:shadow-slate-700">
          <div className="border-b border-slate-300 px-3 pb-2 dark:border-gray-500 dark:text-gray-300">
            <span className="block text-sm">{fullName}</span>
            <span className="block truncate text-xs font-light">
              {user?.email}
            </span>
          </div>

          <div className="flex flex-col border-b border-slate-300 py-1 dark:border-gray-500">
            <NavLink
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:text-gray-400 hover:dark:bg-slate-700"
              to={`/users/${user?.id}/account-information`}
            >
              <Icon value={{ className: "dark:fill-slate-200" }}>
                <HiOutlineViewGrid />
              </Icon>
              My Account
            </NavLink>
            <NavLink
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:text-gray-400 hover:dark:bg-slate-700"
              to={`/users/${user?.id}/my-cart`}
            >
              <Icon value={{ className: "text-lg dark:fill-slate-200" }}>
                <GiShoppingCart />
              </Icon>
              My Cart
            </NavLink>
            <NavLink
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:text-gray-400 hover:dark:bg-slate-700"
              to={`${
                items.length === 0 ? `/users/${user?.id}/my-cart` : "/checkout"
              }`}
            >
              <Icon value={{ className: "dark:fill-slate-200" }}>
                <IoBagCheck />
              </Icon>
              Checkout
            </NavLink>
          </div>

          <div
            className="mt-1 flex items-center gap-2 px-3 py-2 hover:cursor-pointer hover:bg-gray-100 dark:text-gray-400 hover:dark:bg-slate-700"
            onClick={() => dispatch(signOutUser())}
          >
            {isLoading && <p>Loading...</p>}
            <Icon value={{ className: "dark:fill-slate-200" }}>
              <HiLogout />
            </Icon>
            Sign out
          </div>
        </div>
      )}
    </div>
  );
}
