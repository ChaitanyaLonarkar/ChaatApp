import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import useLogout from "../hooks/useLogout";
export default function SideBar() {
  const { loading, logout } = useLogout();
  return (
    <>
      <div className="SideBar  w-84 bg-blue-200 p-5 flex flex-col gap-10 justify-between ">
        <div className="search bg-white rounded ">
          <input
            type="search"
            name="search"
            id="search"
            className="p-2 rounded-md w-46  bg-transparent"
            placeholder="search"
          />
          <button className="bg-transparent p-3" name="search">
            <FaSearch />
          </button>
        </div>
        <div className="allusers">
          <div className="user flex gap-3">
            <img src="" alt="" name="userProfile" width={50} height={50} />
            <div className="u-details">
              <p>User name</p>
            </div>
          </div>
          <div className="user flex gap-3">
            <img src="" alt="" name="userProfile" width={50} height={50} />
            <div className="u-details">
              <p>User name</p>
            </div>
          </div>
          <div className="user flex gap-3">
            <img src="" alt="" name="userProfile" width={50} height={50} />
            <div className="u-details">
              <p>User name</p>
            </div>
          </div>
        </div>

        <div className="logout">
          {!loading ? (
            <button onClick={logout}>
              <IoMdLogOut className=" text-xl" /> logout
            </button>
          ) : (
            <button type="button" class="bg-indigo-500 ..." disabled>
              <svg
                class="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
              Processing...
            </button>
          )}
        </div>
      </div>
    </>
  );
}
