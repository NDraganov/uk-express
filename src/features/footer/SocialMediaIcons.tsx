import Icon from "../../ui/Icon";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-4">
      <Icon value={{ clasName: "fill-slate-300" }}>
        <BsTwitterX />
      </Icon>
      <Icon value={{ clasName: "fill-slate-300" }}>
        <FaFacebookF />
      </Icon>
      <Icon value={{ clasName: "fill-slate-300" }}>
        <BsInstagram />
      </Icon>
    </div>
  );
}
