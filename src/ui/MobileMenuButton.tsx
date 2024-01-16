import Icon from "./Icon";
import { CiMenuFries } from "react-icons/ci";

export default function MobileMenuButton() {
  return (
    <button className="block sm:hidden">
      <Icon value={{ className: "text-lg" }}>
        <CiMenuFries />
      </Icon>
    </button>
  );
}
