import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeMobileMenu } from "./mobileMenuSlice";
import CartBadge from "../../ui/CartBadge";
import DarkModeToggle from "../header/dark-mode/DarkModeToggle";
import SearchIcon from "../../ui/SearchIcon";
import CloseButton from "./menu-components/CloseButton";
import MobileMenuLink from "./menu-components/MobileMenuLink";
import AuthHeaderButton from "../../ui/AuthHeaderButton";
import SignOutButton from "./menu-components/SignOutButton";
import whiteLogo from "../../assets/images/ukexpress-white-logo.svg";
import blackLogo from "../../assets/images/ukexpress-black-logo.svg";

export default function MobileMenu() {
  const { user, isAuthenticated, fullName } = useAppSelector(
    (state) => state.auth,
  );
  const { isDarkMode } = useAppSelector((state) => state.darkMode);
  const dispatch = useAppDispatch();

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-white p-5 dark:bg-slate-900">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-start justify-between">
            <img
              className="h-14"
              loading="lazy"
              role="presentation"
              decoding="async"
              src={isDarkMode ? whiteLogo : blackLogo}
              alt="Logo"
            />
            <CloseButton />
          </div>

          <div className="flex items-center justify-center py-10">
            {isAuthenticated !== "authenticated" && (
              <AuthHeaderButton
                type="sign-in"
                to="/sign-in"
                title="Sign in"
                onClose={() => dispatch(closeMobileMenu())}
              />
            )}
          </div>

          <ul className="flex items-center justify-between px-10 py-5">
            <SearchIcon size="text-4xl" />
            <DarkModeToggle size="text-3xl" />
            <MobileMenuLink to={`/users/${user?.id}/cart`}>
              <CartBadge size="text-4xl" />
            </MobileMenuLink>
          </ul>

          <nav>
            <ul className="flex flex-col items-center gap-4 py-10">
              <MobileMenuLink to="/" title="Home" />
              <MobileMenuLink to="/products" title="Products" />
              <MobileMenuLink to="/about" title="About" />
              <MobileMenuLink to="/faq" title="FAQ" />
              <MobileMenuLink to="/contact" title="Contact" />
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 py-10">
          {isAuthenticated === "authenticated" && (
            <p>
              Sign in as{" "}
              <span className="text-lg text-orange-500 dark:text-cyan-500">
                {fullName}
              </span>
            </p>
          )}
          <div className="flex items-center justify-center">
            {isAuthenticated === "authenticated" && <SignOutButton />}
          </div>
        </div>
      </div>
    </div>
  );
}
