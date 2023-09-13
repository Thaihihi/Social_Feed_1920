import React from "react";
import "./header.css";

function Header() {
  return (
    <main className="sm:h-[100px] h-[60px] flex shadow-md relative">
      <img src="Frame.png" className=" absolute sm:ml-[38px] sm:mt-[20px] w-[41.357px] h-[40px] ml-[16px] mt-[9px]" alt="" />
      <img
        src="Union.png"
        className="sm:w-[189.996px] sm:h-[53.446px] w-[126.737px] h-[36px] absolute sm:ml-[110.35px] sm:mt-[22.96px] ml-[64.26px] mt-[10.97px]"
        alt=""
      />

      <p className="flex headertitle justify-center absolute w-full items-center h-full text-[24px] uppercase leading-[140%] font-bold text-[#005A92] max-sm:hidden">
        9th Global Conference of Young Parliamentarians
      </p>
    </main>
  );
}

export default Header;
