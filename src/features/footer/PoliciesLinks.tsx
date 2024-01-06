import { NavLink } from "react-router-dom";
import CurrentYear from "./CurrentYear";

export default function PoliciesLinks() {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <CurrentYear />
      <div className="flex items-center gap-2 text-xs">
        <NavLink className="hover:text-slate-600" to="/policies/privacy">
          Privacy policy
        </NavLink>
        <NavLink
          className="hover:text-slate-600"
          to="/policies/terms&conditions"
        >
          Terms & conditions
        </NavLink>
        <NavLink className="hover:text-slate-600" to="/policies/refund">
          Refund policy
        </NavLink>
      </div>
    </div>
  );
}
