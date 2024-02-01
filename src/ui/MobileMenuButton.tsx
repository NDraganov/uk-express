import { useAppDispatch } from "../store/hooks";
import { openMobileMenu } from "../features/mobile-menu/mobileMenuSlice";
import Icon from "./Icon";
import { CiMenuFries } from "react-icons/ci";

export default function MobileMenuButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="block sm:hidden"
      title="Menu"
      onClick={() => dispatch(openMobileMenu())}
    >
      <Icon value={{ className: "text-lg" }}>
        <CiMenuFries />
      </Icon>
    </button>
  );
}
