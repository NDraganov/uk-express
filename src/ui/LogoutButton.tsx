import { useAppSelector } from "../store/hooks";
import { Spinner } from "flowbite-react";
import Icon from "./Icon";
import { CiLogout } from "react-icons/ci";

interface LogoutButtonProps {
  onLogout: () => void;
}

export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  const { isLoading } = useAppSelector((state) => state.auth);

  return (
    <button title="Sign out" onClick={onLogout} disabled={isLoading}>
      <Icon
        value={{ className: "fill-slate-200 hover:fill-orange-400 text-3xl" }}
      >
        {isLoading ? <Spinner /> : <CiLogout />}
      </Icon>
    </button>
  );
}
