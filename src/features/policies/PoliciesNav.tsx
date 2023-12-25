import PolicyNavLink from "./PolicyNavLink";

export default function PoliciesNav() {
  return (
    <div className="flex flex-col items-center pt-4">
      <h1 className="text-3xl">UkExpress Policies</h1>
      <nav className="mt-4">
        <ul className="flex items-center gap-4">
          <PolicyNavLink title="Terms and Conditions" to="terms&conditions" />
          <PolicyNavLink title="Privacy" to="privacy" />
        </ul>
      </nav>
    </div>
  );
}
