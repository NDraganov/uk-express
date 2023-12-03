import { Outlet } from "react-router-dom";
import UserHeader from "../features/user-account/UserHeader";
import Sidebar from "../features/user-account/Sidebar";

export default function UserAccountPage() {
  return (
    <div className="mt-20 min-h-screen">
      <UserHeader />
      <div className="flex">
        <Sidebar />
        <main className="min-h-screen w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
