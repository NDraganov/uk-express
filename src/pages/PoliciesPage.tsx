import { Outlet } from "react-router-dom";
import PoliciesNav from "../features/policies/PoliciesNav";
import AnimationPageWrapper from "../ui/AnimationPageWrapper";

export default function PoliciesPage() {
  return (
    <div className="-mt-10 min-h-screen sm:mt-5">
      <AnimationPageWrapper>
        <PoliciesNav />
        <main>
          <Outlet />
        </main>
      </AnimationPageWrapper>
    </div>
  );
}
