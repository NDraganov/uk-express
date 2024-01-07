import ButtonToTop from "./footer-components/ButtonToTop";
import ShopLinks from "./footer-components/ShopLinks";
import LearnLinks from "./footer-components/LearnLinks";
import FollowLinks from "./footer-components/FollowLinks";
import PoliciesLinks from "./footer-components/PoliciesLinks";

export default function Footer() {
  return (
    <footer className="flex h-60 flex-col justify-between border-t border-gray-300 bg-gradient-to-b from-lime-700 to-lime-500 p-4 text-black dark:border-gray-500 dark:bg-slate-900 dark:from-slate-900 dark:to-slate-700 dark:text-gray-400">
      <div className="flex items-start justify-between">
        <ShopLinks />
        <LearnLinks />
        <FollowLinks />
        <ButtonToTop />
      </div>
      <PoliciesLinks />
    </footer>
  );
}
