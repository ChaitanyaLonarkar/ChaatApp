import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
import { IoLogoWechat } from "react-icons/io5";
export default function ChaatContainer() {
  const noChat = true;
  return (
    <>
      {noChat ? (
        <div className=" container chat w-96 bg-blue-200">
          <div className="header flex gap-4 m-4">
            <img src="" alt="jkhdjf" name="userProfile" />
            <p name="username"> username</p>
          </div>

          <div className="chatbox  h-96 p-3 text-white bg-gray-600 overflow-auto">
            {/* <div className="chat chat-end ">fdgdfg</div> */}
            <div class="box sb1">I'm speech bubble</div>
            <div class="box sb2">I'm speech bubble</div>
            <div class="box sb1">I'm speech bubble</div>
            <div class="box sb2">I'm speech bubble</div>
            <div class="box sb1">I'm speech bubble</div>
            <div class="box sb2">I'm speech bubble</div>
            <div class="box sb1">I'm speech bubble</div>
            <div class="box sb2">I'm speech bubble</div>
          </div>

          <form action="">
            <div className="footer  flex gap-5   bg-white rounded m-2">
              <input
                type="text"
                placeholder="Type a message"
                className="p-3 w-full bg-transparent"
              />
              <button className="bg-transparent px-5 text-xl">
                <BsFillSendFill />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="nochat  container chat w-96 bg-blue-200 flex justify-center items-center">
          <p className="tex text-xl w-60 text-center">
            Hello Chaitanya <br />Select friend to chat with
            <IoLogoWechat className=" text-5xl text-center m-auto" />
          </p>
        </div>
      )}
    </>
  );
}
