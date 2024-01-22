import { useAppDispatch } from "../../store/hooks";
import { signOutUser } from "../auth/authSlice";
import MobileUserNavLink from "./MobileUserNavLink";

export default function RegularNav() {
  const dispatch = useAppDispatch();

  return (
    <div className="sm:hidden">
      <nav>
        <ul className="flex items-center justify-around">
          <MobileUserNavLink to="account-information" title="Account" />
          <MobileUserNavLink to="my-cart" title="Cart" />
          <MobileUserNavLink to="change-password" title="Password" />
          <MobileUserNavLink
            to="/"
            title="Sign Out"
            onClick={() => dispatch(signOutUser())}
          />
        </ul>
      </nav>
    </div>
  );
}
