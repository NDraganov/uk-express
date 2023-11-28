import { useAppSelector } from "../../store/hooks";
import SidebarLink from "../../ui/SidebarLink";

export default function Sidebar() {
  const userId = useAppSelector((state) => state.auth.user?.id);

  return (
    <aside className="h-screen w-1/4 border-r-2 border-gray-200">
      <nav>
        <ul className="grid min-h-screen grid-flow-row">
          <SidebarLink
            to={`/users/${userId}/account-information`}
            title="ACCOUNT INFORMATION"
          />
          <SidebarLink to={`/users/${userId}/my-cart`} title="MY CART" />
          <SidebarLink
            to={`/users/${userId}/change-password`}
            title="CHANGE PASSWORD"
          />
          <SidebarLink to="/" title="LOG OUT" />
        </ul>
      </nav>
    </aside>
  );
}
