import { useAppSelector } from "../../store/hooks";
import Sidebar from "./Sidebar";

export default function UserAccountPage() {
  const user = useAppSelector((state) => state.auth.user);
  const userName = user?.user_metadata.fullName.toUpperCase();

  return (
    <main className="min-h-screen">
      <div className=" flex items-center justify-start gap-5 p-10">
        <img
          className="w-12"
          src="/default-user.jpg"
          alt={user?.user_metadata.fullName}
        />
        <h1 className="space-x-10 text-4xl font-thin">HELLO {userName}</h1>
      </div>
      <Sidebar />
    </main>
  );
}
