import { Outlet } from "react-router-dom";
import Sidebar from "../features/user-account/Sidebar";
import MobileUserNav from "../features/user-account/MobileUserNav";
import AnimationPageWrapper from "../ui/AnimationPageWrapper";

export default function UserAccountPage() {
  return (
    <div className="-mt-8 sm:mt-0 sm:min-h-screen ">
      <AnimationPageWrapper>
        <div className="sm:flex">
          <Sidebar />
          <MobileUserNav />
          <main className="w-full sm:min-h-screen">
            <Outlet />
          </main>
        </div>
      </AnimationPageWrapper>
    </div>
  );
}
