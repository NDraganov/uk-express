import PolicyNavLink from "./PolicyNavLink";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";

export default function PoliciesNav() {
  return (
    <div className="flex flex-col items-center border border-l-0 border-r-0 border-t-0 border-slate-400 pt-4 dark:border-gray-500">
      <h1 className="text-3xl dark:text-white">UkExpress Policies</h1>
      <nav className="mt-4">
        <ul className="flex items-center">
          <PolicyNavLink
            title="Terms & Conditions"
            to="terms&conditions"
            icon={<IoDocumentTextSharp />}
          />
          <PolicyNavLink title="Privacy" to="privacy" icon={<MdPrivacyTip />} />
        </ul>
      </nav>
    </div>
  );
}
