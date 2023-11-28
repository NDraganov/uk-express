import { useAppSelector } from "../store/hooks";
import { NavLink } from "react-router-dom";

export default function UserBadge() {
  const userName = useAppSelector(
    (state) => state.auth.user?.user_metadata?.fullName,
  );
  const id = useAppSelector((state) => state.auth.user?.id);

  return (
    <div>
      <p>
        Hello,{" "}
        <NavLink to={`/users/${id}`}>
          <span className="font-semibold text-orange-400">{userName}</span>
        </NavLink>
      </p>
    </div>
  );
}
