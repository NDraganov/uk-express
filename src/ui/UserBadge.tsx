import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { signOutUser } from "../features/auth/authSlice";
import { Dropdown, Spinner } from "flowbite-react";
import { HiLogout } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function UserBadge() {
  const { user, fullName, isLoading } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Dropdown className="dark:bg-slate-800" label={fullName} inline>
        <Dropdown.Header className="dark:text-gray-400">
          <span className="block text-sm dark:text-white">{fullName}</span>
          <span className="block truncate text-xs font-light">
            {user?.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item
          className="dark:text-gray-400"
          as={NavLink}
          to={`/users/${user?.id}`}
          icon={HiOutlineViewGrid}
        >
          My Account
        </Dropdown.Item>
        <Dropdown.Item
          className="dark:text-gray-400"
          as={NavLink}
          to={`/users/${user?.id}/my-cart`}
          icon={GiShoppingCart}
        >
          My Cart
        </Dropdown.Item>
        <Dropdown.Item
          className="dark:text-gray-400"
          as={NavLink}
          to={`${
            items.length === 0 ? `/users/${user?.id}/my-cart` : "/checkout"
          }`}
          icon={IoBagCheckOutline}
        >
          Checkout
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          className="dark:text-gray-400"
          icon={isLoading ? <Spinner /> : HiLogout}
          onClick={() => dispatch(signOutUser())}
        >
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
