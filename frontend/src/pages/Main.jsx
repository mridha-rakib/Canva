import React from "react";
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="min-w-screen h-screen bg-black">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen">
        <div className="w-[80px] bg-[#18191b] z-50 h-full text-gray-400 overflow-auto"></div>
      </div>
    </div>
  );
};

export default Main;
