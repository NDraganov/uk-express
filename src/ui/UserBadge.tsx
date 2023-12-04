import { useAppDispatch, useAppSelector } from "../store/hooks";
import { NavLink } from "react-router-dom";
import { Dropdown, Spinner } from "flowbite-react";
import { HiLogout } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import { signOutUser } from "../features/auth/authSlice";

export default function UserBadge() {
  const user = useAppSelector((state) => state.auth.user);
  const id = useAppSelector((state) => state.auth.user?.id);
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const userName =
    user?.user_metadata.firstName + " " + user?.user_metadata.lastName;
  const userEmail = user?.email;

  return (
    <div>
      <Dropdown className="dark:bg-slate-800" label={userName} inline>
        <Dropdown.Header className="dark:text-gray-400">
          <span className="block text-sm dark:text-white">{userName}</span>
          <span className="block truncate text-xs font-light">{userEmail}</span>
        </Dropdown.Header>
        <Dropdown.Item
          className="dark:text-gray-400"
          as={NavLink}
          to={`/users/${id}`}
          icon={HiOutlineViewGrid}
        >
          My Account
        </Dropdown.Item>
        <Dropdown.Item
          className="dark:text-gray-400"
          as={NavLink}
          to={`/users/${id}/my-cart`}
          icon={GiShoppingCart}
        >
          My Cart
        </Dropdown.Item>
        <Dropdown.Item className="dark:text-gray-400" icon={IoBagCheckOutline}>
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
