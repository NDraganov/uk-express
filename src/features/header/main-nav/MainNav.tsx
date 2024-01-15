import MainNavLink from "./MainNavLink";

export default function MainNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-4">
        <MainNavLink title="Home" to="/" />
        <MainNavLink title="Products" to="/products" />
        <MainNavLink title="About" to="/about_us" />
        <MainNavLink title="FAQ" to="/faq" />
        <MainNavLink title="Contact" to="/contact_us" />
      </ul>
    </nav>
  );
}
