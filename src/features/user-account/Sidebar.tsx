import SidebarLink from "../../ui/SidebarLink";

export default function Sidebar() {
  return (
    <aside className="h-screen w-2/6 border-r-2 border-gray-200">
      <nav>
        <ul className="grid min-h-screen grid-flow-row">
          <SidebarLink to="account-information" title="ACCOUNT INFORMATION" />
          <SidebarLink to="my-card" title="MY CART" />
          <SidebarLink to="change-password" title="CHANGE PASSWORD" />
          <SidebarLink to="/" title="SIGN OUT" />
        </ul>
      </nav>
    </aside>
  );
}
