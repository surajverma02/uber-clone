import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import StartPage from "./pages/StartPage";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";

import useUserStore from "./stores/UseUserStore";

const App = () => {
  const { authUser, fetchProfile } = useUserStore();

  useEffect(() => {
    async function fetchData() {
      await fetchProfile();
    }
    fetchData();
  }, [fetchProfile]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={!authUser ? <StartPage /> : <Navigate to="/home" />}
        />
        <Route 
          path="/home" 
          element={authUser ? <Home /> : <Navigate to="/login" />} 
        />  
        <Route
          path="/login"
          element={!authUser ? <UserLogin /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <UserSignup /> : <Navigate to="/home" />}
        />
        <Route
          path="/captain-login"
          element={!authUser ? <CaptainLogin /> : <Navigate to="/home" />}
        />
        <Route
          path="/captain-signup"
          element={!authUser ? <CaptainSignup /> : <Navigate to="/home" />}
        />
      </Routes>
    </div>
  );
};

export default App;
