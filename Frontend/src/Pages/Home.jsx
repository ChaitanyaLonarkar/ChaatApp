import React from "react";
import SideBar from "../Components/SideBar";
import ChaatContainer from "../Components/ChaatContainer";

export default function Home() {
  return (
    <>
      <div className=".container home flex  gap-10 justify-center h  bg-sla bg-slate-950 rounded-md  p-10">
        <SideBar />
        <ChaatContainer/>
      </div>
    </>
  );
}
