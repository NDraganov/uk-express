import { useAppSelector } from "../store/hooks";

export default function UserBadge() {
  const userName = useAppSelector(
    (state) => state.auth.user?.user_metadata?.fullName,
  );
  return (
    <div>
      <p>
        Hello, <span className="font-semibold text-orange-400">{userName}</span>
      </p>
    </div>
  );
}
