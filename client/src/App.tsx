import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "@/pages/errors/NotFound";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Home from "@/pages/main/Home";

import PublicRoute from "@/routes/PublicRoute";
import AuthRoute from "@/routes/AuthRoute";

import BaseLayout from "@/layouts/BaseLayout";
import AppLayout from "@/layouts/AppLayout";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyMfa from "./pages/main/VerifyMfa";

import { AuthProvider } from "@/context/auth-provider";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route element={<BaseLayout />}>
              <Route path="sign-in" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="verify-mfa" element={<VerifyMfa />} />
            </Route>
          </Route>

          <Route element={<AuthRoute />}>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
