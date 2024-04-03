import React,{useState} from "react";
import useLogin from "../hooks/useLogin"


export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const {loading,login}=useLogin();


  const handleSubmit= async(e)=>{
    e.preventDefault();
    await login(username,password)
  }

  return (
    <>
      <div className="login flex flex-col gap-10 justify-center h  bg-white  bg-teal-700 rounded-md  p-10">
        <div className="head flex flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl font-semibold">Login to your account</h1>
          <p>
            Don't have an account
            <a href="/signup" className="text-blue-700">
              {" "}
              SignUp
            </a>
          </p>
        </div>
        <form
          action="
          "
          onSubmit={handleSubmit}
        >
          <div className="from-filelds flex  flex-col">
            <input
              type="text"
              placeholder="Enter Username"
              className="p-3 border rounded-md  w-96 m-3 "
              required
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className=" border-gray-500p-3 border  p-3 rounded-md  m-3 w-96  tex"
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="p-3 text-white bg-gray-900 rounded-md  m-3 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
