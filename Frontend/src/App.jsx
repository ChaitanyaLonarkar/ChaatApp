import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignupPage from "../src/Pages/SignUp";
import LoginPage from "../src/Pages/Login";
import HomePage from "../src/Pages/Home";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div> */}
      <div className="containerr flex h-screen flex-col w-screen items-center justify-center bg-purple-200">
        {/* <LoginPage /> */}
        {/* <SignupPage/> */}
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
          <Toaster/>
      </div>
    </>
  );
}

export default App;
