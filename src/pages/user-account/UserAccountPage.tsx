import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";
import Sidebar from "./Sidebar";

export default function UserAccountPage() {
  return (
    <div className="min-h-screen">
      <UserHeader />
      <div className="flex">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
