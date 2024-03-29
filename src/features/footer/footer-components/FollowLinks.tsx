import { Link } from "react-router-dom";
import Icon from "../../../ui/Icon";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function FollowLinks() {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-lg font-medium text-slate-200 dark:text-slate-200">
        FOLLOW
      </p>

      <div className="flex flex-col gap-2">
        <Link to="https://twitter.com" target="_blank" rel="noopener">
          <div className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-200 dark:text-slate-300 dark:hover:text-slate-100">
            <Icon value={{ clasName: "fill-slate-300" }}>
              <BsTwitterX />
            </Icon>
            <p>Twiteer</p>
          </div>
        </Link>

        <Link to="https://en-gb.facebook.com" target="_blank" rel="noopener">
          <div className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-200 dark:text-slate-300 dark:hover:text-slate-100">
            <Icon value={{ clasName: "fill-slate-300" }}>
              <FaFacebookF />
            </Icon>
            <p>Facebook</p>
          </div>
        </Link>

        <Link to="https://www.instagram.com" target="_blank" rel="noopener">
          <div className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-200 dark:text-slate-300 dark:hover:text-slate-100">
            <Icon value={{ clasName: "fill-slate-300" }}>
              <BsInstagram />
            </Icon>
            <p>Instagram</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
