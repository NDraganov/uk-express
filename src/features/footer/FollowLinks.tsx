import Icon from "../../ui/Icon";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function FollowLinks() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h5 className="text-lg dark:text-slate-200">FOLLOW</h5>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Icon value={{ clasName: "fill-slate-300" }}>
            <BsTwitterX />
          </Icon>
          <p>Twiteer</p>
        </div>

        <div className="flex items-center gap-2">
          <Icon value={{ clasName: "fill-slate-300" }}>
            <FaFacebookF />
          </Icon>
          <p>Facebook</p>
        </div>

        <div className="flex items-center gap-2">
          <Icon value={{ clasName: "fill-slate-300" }}>
            <BsInstagram />
          </Icon>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
}
