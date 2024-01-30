import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SidebarLink from "./SidebarLink";
import { signOutUser } from "../auth/authSlice";

export default function Sidebar() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const userName = user?.user_metadata.firstName;

  return (
    <aside className="hidden min-h-screen w-1/4 sm:block">
      <div className="flex items-center justify-start p-6 pl-10">
        <h1 className="space-x-10 text-xl font-thin">
          Hello, <span className="text-2xl dark:text-cyan-500">{userName}</span>
        </h1>
      </div>
      <nav className="mt-16 border-r border-gray-300 dark:border-gray-500">
        <ul className="grid-col-1 grid">
          <SidebarLink to="account" title="ACCOUNT INFORMATION" />
          <SidebarLink to="cart" title="MY CART" />
          <SidebarLink to="password" title="CHANGE PASSWORD" />
          <SidebarLink
            to="/"
            title="SIGN OUT"
            onClick={() => dispatch(signOutUser())}
          />
        </ul>
      </nav>
    </aside>
  );
}
