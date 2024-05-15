"use client";

import React from "react";
import { LuArrowUpToLine } from "react-icons/lu";

const BtnBackTop = () => {
  return (
    <div className="fixed bottom-7 sm:bottom-5 right-5 flex flex-row items-center justify-center gap-3 sm:gap-5 z-20">
      <div
        onClick={() => {
          window?.scrollTo({
            top: 0,
          });
        }}
        className="text-base sm:text-lg lg:text-xl shadow border-2 border-white bg-main transition duration-300 rounded-xl p-3 cursor-pointer text-white"
      >
        <LuArrowUpToLine />
      </div>
    </div>
  );
};

export default BtnBackTop;
