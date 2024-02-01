import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import Spinner from "./Spinner";

export default function ProtectedRoute() {
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/sign-in");
    },
    [navigate, isAuthenticated, isLoading],
  );

  if (isAuthenticated === "authenticated" || !isLoading) return <Outlet />;

  if (isLoading)
    return (
      <main>
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      </main>
    );
}
