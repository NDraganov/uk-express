import { Spinner } from "flowbite-react";
import { useAppSelector } from "../store/hooks";
import Icon from "./Icon";
import { CiLogout } from "react-icons/ci";

interface LogoutButtonProps {
  onLogout: () => void;
}

export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  const { isLoading } = useAppSelector((state) => state.auth);
  return (
    <button title="Logout" onClick={onLogout} disabled={isLoading}>
      <Icon
        value={{ className: "fill-slate-200 hover:fill-orange-500 text-3xl" }}
      >
        {isLoading ? <Spinner /> : <CiLogout />}
      </Icon>
    </button>
  );
}
