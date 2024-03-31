import React from "react";

export default function SignUp() {
  return (
    <>
      <div className="login flex flex-col gap-5 justify-center rounded-md bg-white p-10">
        <div className="head flex flex-col gap-3 justify-center items-center">
          <h1 className="text-3xl font-semibold">Create new account</h1>
          <p>
            Have an account,{" "}
            <a href="/login" className="text-blue-700">
              {" "}
              Login
            </a>
          </p>
        </div>
        <form
          action="
          "
        >
          <div className="from-filelds flex  flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Enter Username"
              className="p-3 rounded-md border
border-gray-500 w-96 m-3 "
            />
            <input
              type="text"
              placeholder="Enter full name"
              className="p-3 rounded-md border
border-gray-500 w-96 m-3 "
            />
            <input
              type="email"
              placeholder="Enter email "
              className="p-3 rounded-md border
border-gray-500 w-96 m-3 "
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-md border
border-gray-500  m-3 w-96  "
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded-md border
border-gray-500 m-3 w-96  "
            />
            <button
              type="submit"
              className="p-3 text-white bg-gray-900 rounded-md w-96 m-3 "
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
