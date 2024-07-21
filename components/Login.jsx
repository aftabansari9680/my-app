"use client";

import React, { useState } from "react";

const Login = () => {
  const [move, setMove] = useState(false);

  function onBtn() {
    setMove(!move);
  }
  return (
    <div className="h-screen bg-slate-100 flex flex-col justify-center items-center ">
      <div className="h-[60%] w-[70%] flex bg-white items-center rounded-2xl relative overflow-hidden shadow-black shadow-2xl">
        <div
          className={` h-full w-1/2  rounded-2xl ${
            move ? "translate-x-full rounded-bl-full bg-black" : "rounded-tr-full bg-[#19156d] "
          } transition-all duration-1000 z-30 p-10`}
        ></div>

        <div
          className={` ${
            move ? "-translate-x-full opacity-0" : " "
          } z-30 flex flex-col gap-5 items-center absolute left-40 transition-all duration-1000 `}
        >
          <button
            onClick={onBtn}
            className="border border-white p-2 px-9 text-white rounded-3xl "
          >
            click
          </button>
          <h1 className="text-4xl text-white">Hello World</h1>
        </div>

        <div
          className={` ${
            move ? "" : "translate-x-full opacity-0 duration-1000 "
          } z-30 flex flex-col gap-5 items-center absolute right-40 transition-all duration-1000 `}
        >
          <button
            onClick={onBtn}
            className="border border-white p-2 px-9 text-white rounded-3xl "
          >
            click
          </button>
          <h1 className="text-4xl text-white">Hello World</h1>
        </div>

        <div
          className={` ${
            move ? "-translate-x-full opacity-0" : ""
          } z-20 flex flex-col gap-5 items-center absolute right-44 transition-all duration-1000`}
        >
          <h1 className="text-4xl">Hi Coder</h1>
          <p>Join Me With Click Button</p>
          <button
            onClick={onBtn}
            className="border border-white p-2 px-9 bg-red-600 text-white rounded-3xl"
          >
            click
          </button>
        </div>

        <div
          className={` ${
            move ? "" : "translate-x-full opacity-0"
          } z-20 flex flex-col gap-5 items-center absolute left-40 transition-all duration-1000`}
        >
          <h1 className="text-4xl font-bold">Sign In</h1>
          <p className="text-gray-600">Join Me With Click Button</p>
          <input
            type="text"
            placeholder="Enter-Email"
            className="px-3 py-1  text-sm rounded-xl bg-slate-200 border-2 border-slate-100 hover:border-zinc-800 duration-300  "
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="px-3 py-1 text-sm rounded-xl bg-slate-200 border-2 border-slate-100 hover:border-zinc-800 duration-300  "
          />
          <p className="text-gray-400">Forgot Your Password </p>
          <button
            onClick={onBtn}
            className="border border-white p-2 px-9 bg-red-600 text-white rounded-3xl"
          >
            click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
