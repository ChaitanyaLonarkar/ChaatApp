import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";


export default function useLogout() {


  const [loading, setloading] = useState(false);
  const {authUser ,setAuthUser}= useAuthContext();

  const logout = async () => {

    setloading(true);
    try {
      const res = await fetch("/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //localstrorage
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      //   console.log(data)

    } catch (error) {
      toast.error(error.message);

    } finally {
      setloading(false);
    }
  };

  return { loading, logout };
}