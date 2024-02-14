import Icon from "../../../../ui/Icon";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function CreatorLinks() {
  return (
    <div className="flex items-center gap-2">
      <button title="Creator's GitHub">
        <NavLink
          to="https://github.com/NDraganov"
          target="_blank"
          rel="noopenener"
        >
          <Icon
            value={{
              className:
                "text-lg hover:fill-white dark:text-slate-300 dark:hover:text-slate-100",
            }}
          >
            <FaGithub />
          </Icon>
        </NavLink>
      </button>
      <button title="Creator's LinkedIn">
        <NavLink
          to="https://www.linkedin.com/in/nedyalko-draganov-12958a235/"
          target="_blank"
          rel="noopenener"
        >
          <Icon
            value={{
              className:
                "text-lg hover:fill-white dark:text-slate-300 dark:hover:text-slate-100",
            }}
          >
            <FaLinkedin />
          </Icon>
        </NavLink>
      </button>
    </div>
  );
}
