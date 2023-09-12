import React from "react";

function Header() {
  return (
    <main className="h-[100px] flex shadow-md relative">
      <img
        src="Frame.png"
        className="w-[62px] h-[60px] absolute ml-[38px] mt-[20px]"
        alt=""
      />
      <img
        src="Union.png"
        className="w-[189.996px] h-[53.446px] absolute ml-[110.35px] mt-[22.96px]"
        alt=""
      />

      <p className="flex justify-center absolute w-full items-center h-full text-[24px] uppercase leading-[140%] font-bold text-[#005A92]">
        9th Global Conference of Young Parliamentarians
      </p>
    </main>
  );
}

export default Header;
