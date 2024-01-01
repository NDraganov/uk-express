import MainNavLink from "./MainNavLink";

export default function MainNav() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <MainNavLink title="HOME" to="/" />
        <MainNavLink title="ABOUT US" to="/about_us" />
        <MainNavLink title="FAQ" to="/faq" />
        <MainNavLink title="CONTACT US" to="/contact_us" />
      </ul>
    </nav>
  );
}
