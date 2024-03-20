import React from "react";

function Header() {
  return (
    <div>
      <div className="w-full bg-[#020071] h-24 flex justify-center">
        <div className="w-10/12 m-auto">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center h-10 ">
              <img src="/logos.svg" alt="logo image" className="mr-3" />
              <span className="text-[#f4edff] font-bold text-2xl">Harnoited</span>
            </div>
            <div></div>
            <div className="flex flex-row items-center gap-8 h-14 ">
              <div className="px-6 py-4 border border-[#cdccee]  font-bold rounded-lg min-w-18 text-[#f4edff]">
                <p>Sign up</p>
              </div>
              <div className="px-6 py-4 text-[#f4edff] border rounded-lg p-2 min-w-16 text-sm bg-[#abaae2] font-bold  flex justify-center ">
                <p>Login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
