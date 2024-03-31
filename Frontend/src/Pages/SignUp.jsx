import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
export default function SignUp() {
  const [inputs, setinputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

const onValueChange=(event)=>{
    // Updating the state with the selected radio button's value
    inputs.gender(event.target.value)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if(inputs.password !=inputs.confirmPassword){
        toast.error("password not match")
    }
  };

  return (
    <>
      <div className="login flex flex-col gap-5 justify-center rounded-md bg-white p-10">
        <div className="head flex flex-col gap-3 justify-center items-center">
          <h1 className="text-3xl font-semibold">Create new account</h1>
          <p>
            Have an account,
            <a href="/login" className="text-blue-700">
              Login
            </a>
          </p>
        </div>
        <form
          action="
          "
          onSubmit={handleSubmit}
        >
          <div className="from-filelds flex  flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Enter Username"
              className="p-3 rounded-md border
border-gray-500 w-96 m-3 "
              value={inputs.username}
              onChange={(e) => {
                setinputs({ ...inputs, username: e.target.value });
              }}
            required />
            <input
              type="text"
              placeholder="Enter full name"
              className="p-3 rounded-md border
border-gray-500 w-96 m-3 "
              value={inputs.fullName}
              onChange={(e) => {
                setinputs({ ...inputs, fullName: e.target.value });
              }}
            required />
            <input
              type="email"
              placeholder="Enter email "
              className="p-3 rounded-md border
border-gray-500 w-96 m-3 "
              value={inputs.email}
              onChange={(e) => {
                setinputs({ ...inputs, email: e.target.value });
              }}
            required />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-md border
border-gray-500  m-3 w-96  "
              value={inputs.password}
              onChange={(e) => {
                setinputs({ ...inputs, password: e.target.value });
              }}
            required />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded-md border
border-gray-500 m-3 w-96  "
              value={inputs.confirmPassword}
              onChange={(e) => {
                setinputs({ ...inputs, confirmPassword: e.target.value });
              }}
            required />
            <div className="gender flex gap-3 my-3">
              <b>Gender:</b>
              <label htmlFor="" value={inputs.gender}
              onChange={(e) => {
                setinputs({ ...inputs, gender: e.target.value });
              }}>
                <input type="radio" name="gender" id="male" value={"male"} required/>
              Male
              </label>
              <label htmlFor="" value={inputs.gender}
              onChange={(e) => {
                setinputs({ ...inputs, gender: e.target.value });
              }}>
                <input type="radio" name="gender" id="female" value={"female"} required />
              Female
              </label>
            </div>
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
