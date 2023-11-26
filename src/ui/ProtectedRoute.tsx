import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { Spinner } from "flowbite-react";
import { useEffect } from "react";

// interface ProtectedRouteProps {
//   children: ReactNode;
// }

export default function ProtectedRoute() {
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [navigate, isAuthenticated, isLoading],
  );

  if (isAuthenticated === "authenticated" || !isLoading) return <Outlet />;

  if (isLoading)
    return (
      <main>
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      </main>
    );
}
