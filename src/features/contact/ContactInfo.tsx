import { NavLink } from "react-router-dom";
import Icon from "../../ui/Icon";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <aside className="flex flex-col items-center justify-center py-10 sm:h-screen sm:w-2/6">
      <div className="my-4 flex flex-col gap-4">
        <h1 className="text-5xl font-light dark:text-white">Get in touch</h1>
        <p className="flex items-center gap-2">
          <Icon value={{ className: "dark:fill-slate-200" }}>
            <FaPhoneAlt />
          </Icon>
          <span className="dark:text-gray-300">+44 7654321890</span>
        </p>
        <p className="flex items-center gap-2">
          <Icon value={{ className: "dark:fill-slate-200" }}>
            <MdEmail />
          </Icon>
          <span className="dark:text-gray-300">uk-express@gmail.com</span>
        </p>
        <address className="flex items-center gap-2">
          <Icon value={{ className: "dark:fill-slate-200" }}>
            <FaLocationDot />
          </Icon>
          <span className="not-italic dark:text-gray-300">
            Wembley Park 306, NE10 6AR, London, UK
          </span>
        </address>
        <NavLink
          className="text-sm underline hover:text-orange-500 dark:text-slate-200 dark:hover:text-cyan-300"
          to="/faq"
        >
          Why not check our FAQ first?
        </NavLink>
      </div>
    </aside>
  );
}
