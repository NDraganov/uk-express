import { Outlet } from "react-router-dom";
import PoliciesNav from "../features/policies/PoliciesNav";

export default function PoliciesPage() {
  return (
    <div className="-mt-10 min-h-screen sm:mt-5">
      <PoliciesNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
