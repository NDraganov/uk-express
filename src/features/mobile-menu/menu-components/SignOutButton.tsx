import { useAppDispatch } from "../../../store/hooks";
import { signOutUser } from "../../auth/authSlice";
import Icon from "../../../ui/Icon";
import { BiLogOut } from "react-icons/bi";

export default function SignOutButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="flex items-center justify-center gap-2 dark:text-slate-200"
      onClick={() => dispatch(signOutUser())}
    >
      <Icon
        value={{
          className:
            "fill-orange-500 dark:fill-cyan-500 dark:hover:fill-cyan-300",
        }}
      >
        <BiLogOut />
      </Icon>
      Sign out
    </button>
  );
}
