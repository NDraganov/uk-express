import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { showUserBadge, signOutUser } from "../../auth/authSlice";
import { HiLogout } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function UserBadge() {
  const { user, isUserBadgeVisible, fullName, isLoading } = useAppSelector(
    (state) => state.auth,
  );
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div
        className="hover:cursor-pointer hover:text-gray-600"
        onClick={() => dispatch(showUserBadge())}
      >
        {fullName}
      </div>

      {isUserBadgeVisible && (
        <div className="absolute rounded-md border bg-white p-4">
          <div className="border-b pb-4 dark:text-gray-400">
            <span className="block text-sm dark:text-white">{fullName}</span>
            <span className="block truncate text-xs font-light">
              {user?.email}
            </span>
          </div>

          <div className="flex flex-col gap-2 border-b py-4">
            <NavLink
              className="flex items-center gap-2 dark:text-gray-400"
              to={`/users/${user?.id}/account-information`}
            >
              <HiOutlineViewGrid /> My Account
            </NavLink>
            <NavLink
              className="flex items-center gap-2 dark:text-gray-400"
              to={`/users/${user?.id}/my-cart`}
            >
              <GiShoppingCart /> My Cart
            </NavLink>
            <NavLink
              className="flex items-center gap-2 dark:text-gray-400"
              to={`${
                items.length === 0 ? `/users/${user?.id}/my-cart` : "/checkout"
              }`}
            >
              <IoBagCheckOutline /> Checkout
            </NavLink>
          </div>

          <div
            className="flex items-center gap-2 pt-4 hover:cursor-pointer dark:text-gray-400"
            onClick={() => dispatch(signOutUser())}
          >
            {isLoading && <p>Loading...</p>}
            <HiLogout /> Sign out
          </div>
        </div>
      )}
    </div>
  );
}
