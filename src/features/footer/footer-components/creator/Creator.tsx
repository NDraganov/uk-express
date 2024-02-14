import { NavLink } from "react-router-dom";
import CreatorLinks from "./CreatorLinks";

export default function Creator() {
  return (
    <div className="flex items-center gap-4">
      <NavLink
        to="https://nedyalko-draganov.vercel.app"
        className="hover:text-white dark:text-slate-300 dark:hover:text-slate-100"
        title="Creator's portfolio site"
        target="_blank"
        rel="noopener"
      >
        Nedyalko Draganov
      </NavLink>
      <CreatorLinks />
    </div>
  );
}
