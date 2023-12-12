import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SidebarLink from "../../ui/SidebarLink";
import { signOutUser } from "../auth/authSlice";

export default function Sidebar() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const userName = user?.user_metadata.firstName;

  return (
    <aside className="min-h-screen w-1/4">
      <div className="flex items-center justify-start p-6 pl-10">
        <h1 className="space-x-10 text-xl font-thin">
          Hello, <span className="text-2xl dark:text-cyan-500">{userName}</span>
        </h1>
      </div>
      <nav className="mt-16 border-r border-gray-300 dark:border-gray-500">
        <ul className="grid-col-1 grid">
          <SidebarLink to="account-information" title="ACCOUNT INFORMATION" />
          <SidebarLink to="my-cart" title="MY CART" />
          <SidebarLink to="change-password" title="CHANGE PASSWORD" />
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
