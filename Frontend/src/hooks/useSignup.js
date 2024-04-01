import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";


export default function useSignup() {


  const [loading, setloading] = useState(false);
  const setauthUser= useAuthContext();

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setloading(true);

    
    try {
      const res = await fetch("/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //localstrorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setauthUser(data);
      //   console.log(data)

    } catch (error) {
      toast.error(error.message);

    } finally {
      setloading(false);
    }
  };

  return { loading, signUp };
}

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("all fields are mandetory to fill");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Passwords must be atleast 6 characters");
    return false;
  }
  return true;
}
