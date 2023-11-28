import { useAppSelector } from "../store/hooks";
import { NavLink } from "react-router-dom";

export default function UserBadge() {
  const user = useAppSelector((state) => state.auth.user);
  const id = useAppSelector((state) => state.auth.user?.id);

  const userName = user?.user_metadata.firstName;

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
