import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignupPage from "../src/Pages/SignUp";
import LoginPage from "../src/Pages/Login";
import HomePage from "../src/Pages/Home";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  // const [count, setCount] = useState(0)
  const {authUser} = useAuthContext();
  console.log("that is the auth  user value", authUser);
  return (
    <>
      {/* <div className="containerr flex h-screen flex-col w-screen items-center justify-center bg-purple-200"> */}
      <div className="containerr flex h-screen flex-col w-screen items-center justify-center   bg-slate-900">

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/login"
              element={authUser ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route
              path="/signup"
              element={authUser ? <Navigate to="/" /> : <SignupPage />}
            />
          </Routes>
         
        </BrowserRouter>
        <Toaster />
      </div>
    </>
  );
}

export default App;
