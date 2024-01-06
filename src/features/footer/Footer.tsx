import { NavLink } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";
import learnOptions from "../data/FooterLearn.json";
import PoliciesLinks from "./PoliciesLinks";

export default function Footer() {
  return (
    <footer className="flex h-60 flex-col justify-between border-t border-gray-300 p-4 text-black dark:border-gray-500 dark:bg-slate-900 dark:text-gray-400">
      <div className="flex items-center justify-between">
        <SocialMediaIcons />
        {learnOptions.map((option) => (
          <NavLink to={option.path}>{option.title}</NavLink>
        ))}
      </div>
      <PoliciesLinks />
    </footer>
  );
}
