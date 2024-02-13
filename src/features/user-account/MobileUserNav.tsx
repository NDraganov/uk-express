import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { signOutUser } from "../auth/authSlice";
import MobileUserNavLink from "./MobileUserNavLink";

export default function RegularNav() {
  const { fullName } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="sm:hidden">
      <nav>
        <ul className="flex items-center justify-around">
          <MobileUserNavLink to={`${fullName}/account`} title="Account" />
          <MobileUserNavLink to={`${fullName}/cart`} title="Cart" />
          <MobileUserNavLink to={`${fullName}/password`} title="Password" />
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
