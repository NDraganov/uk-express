import SidebarLink from "../../ui/SidebarLink";

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-1/4 border-r-2 border-gray-200">
      <nav className="h-full">
        <ul className="flex flex-col items-start">
          <SidebarLink to="account-information" title="ACCOUNT INFORMATION" />
          <SidebarLink to="my-card" title="MY CART" />
          <SidebarLink to="change-password" title="CHANGE PASSWORD" />
          <SidebarLink to="/" title="SIGN OUT" />
        </ul>
      </nav>
    </aside>
  );
}
