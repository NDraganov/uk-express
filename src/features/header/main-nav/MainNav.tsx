import MainNavLink from "./MainNavLink";

export default function MainNav() {
  return (
    <nav>
      <ul className="flex items-center">
        <MainNavLink title="Home" to="/" />
        <MainNavLink title="About us" to="/about_us" />
        <MainNavLink title="FAQ" to="/faq" />
        <MainNavLink title="Contact us" to="/contact_us" />
      </ul>
    </nav>
  );
}
