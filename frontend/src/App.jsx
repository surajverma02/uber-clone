import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import StartPage from "./pages/StartPage";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";

import useUserStore from "./stores/UseUserStore";
import useCaptainStore from "./stores/UseCaptainStore";
import CaptainHome from "./pages/CaptainHome";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const { authCaptain, fetchCaptain } = useCaptainStore();
  const { role, authUser, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
    fetchCaptain();
  }, [role]);

  return (
    <div>
      <Routes>
        <Route
          path="/authenticating..."
          element={
            authUser ? <Navigate to="/home" /> : <Navigate to="/captain-home" />
          }
        />
        <Route
          path="/"
          element={
            !(authUser || authCaptain) ? (
              <StartPage />
            ) : (
              <Navigate to="/authenticating..." />
            )
          }
        />
        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/captain-home"
          element={
            authCaptain ? <CaptainHome /> : <Navigate to="/captain-login" />
          }
        />
        <Route
          path="/login"
          element={!(authUser || authCaptain) ? <UserLogin /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!(authUser || authCaptain) ? <UserSignup /> : <Navigate to="/" />}
        />
        <Route
          path="/captain-login"
          element={!(authUser || authCaptain) ? <CaptainLogin /> : <Navigate to="/" />}
        />
        <Route
          path="/captain-signup"
          element={!(authUser || authCaptain) ? <CaptainSignup /> : <Navigate to="/" />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
};

export default App;
