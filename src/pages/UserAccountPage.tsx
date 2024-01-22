import { Outlet } from "react-router-dom";
import Sidebar from "../features/user-account/Sidebar";
import MobileUserNav from "../features/user-account/MobileUserNav";

export default function UserAccountPage() {
  return (
    <div className="mt-28 min-h-screen">
      <div className="sm:flex">
        <Sidebar />
        <MobileUserNav />
        <main className="min-h-screen w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
