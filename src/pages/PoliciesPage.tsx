import { Outlet } from "react-router-dom";
import PoliciesNav from "../features/policies/PoliciesNav";

export default function PoliciesPage() {
  return (
    <div className="mt-28 min-h-screen">
      <PoliciesNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
