import { Loading } from "@/components/Loading";
import { useAuthContext } from "@/context/auth-provider";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading className="h-10 w-10" />
      </div>
    );
  }
  return user ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default AuthRoute;
