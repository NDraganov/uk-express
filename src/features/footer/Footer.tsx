import ButtonToTop from "./footer-components/ButtonToTop";
import ShopLinks from "./footer-components/ShopLinks";
import LearnLinks from "./footer-components/LearnLinks";
import FollowLinks from "./footer-components/FollowLinks";
import PoliciesLinks from "./footer-components/PoliciesLinks";
import FooterNewsLetter from "./footer-components/FooterNewsLetter";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-10 border-t border-gray-300 bg-gradient-to-b from-lime-700 to-lime-500 p-4 text-black dark:border-gray-500 dark:bg-slate-900 dark:from-slate-900 dark:to-slate-700 dark:text-gray-400">
      <div className="flex flex-col-reverse items-start justify-between gap-8 sm:flex-row">
        <FooterNewsLetter />
        <div className="flex w-full items-start justify-between sm:pl-20">
          <ShopLinks />
          <LearnLinks />
          <FollowLinks />
          <ButtonToTop />
        </div>
      </div>
      <PoliciesLinks />
    </footer>
  );
}
