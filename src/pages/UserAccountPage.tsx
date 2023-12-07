import { Outlet } from "react-router-dom";
import Sidebar from "../features/user-account/Sidebar";

export default function UserAccountPage() {
  return (
    <div className="mt-28 min-h-screen">
      <div className="flex">
        <Sidebar />
        <main className="min-h-screen w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
