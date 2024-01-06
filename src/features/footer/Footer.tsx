import ShopLinks from "./ShopLinks";
import LearnLinks from "./LearnLinks";
import FollowLinks from "./FollowLinks";
import PoliciesLinks from "./PoliciesLinks";

export default function Footer() {
  return (
    <footer className="flex h-60 flex-col justify-between border-t border-gray-300 p-4 text-black dark:border-gray-500 dark:bg-slate-900 dark:text-gray-400">
      <div className="flex items-center justify-between">
        <ShopLinks />
        <LearnLinks />
        <FollowLinks />
      </div>
      <PoliciesLinks />
    </footer>
  );
}
