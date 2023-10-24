import React from "react";
import "./main.css";
import sarvesh1 from "../photo/sarvesh1.jpg";
// import sarvesh from "../photo/sarvesh.jpg";

import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="flex bg-blue-950 h-full z-50 fixed min-w-fit justify-center content-center object-center+ item-center">
      <div id="main" className="p-5 ">
        <div className="mb-5">
          <img
            src={sarvesh1}
            alt=""
            srcset=""
            className="w-32 rounded-full mt-6 bg"
          />
        </div>
        {/* an bg rounded-full py-1 cursor-pointer  m-4 justify-center px-10  w-32   content-center text-white */}
        <div className="bg-blue-950 text-white border flex items-center justify-center border-white shadow-lg border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group w-full my-4">
          <Link to="/home">
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            HOME
          </Link>
        </div>
        {/* <div className="bg-blue-950 text-white border border-white shadow-lg border-b-4 font-medium overflow-hidden relative px-4  rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center">
          <a
            className="-mx-1"
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1jCeXuIMwjkegbZFfWbqQ580rJkKh-u2E/view?usp=sharing"
          >
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80  rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            RESUME
          </a>
        </div> */}
        <div className="bg-blue-950 py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-medium overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full my-4">
          <a
            className="-mx-1"
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1jCeXuIMwjkegbZFfWbqQ580rJkKh-u2E/view?usp=sharing"
          >
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            RESUME
          </a>
        </div>

        <div className="bg-blue-950 py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-medium overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full my-4">
          <Link to="/project" className="-mx-2">
            {" "}
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            PROJECTS
          </Link>
        </div>

        <div className="bg-blue-950 py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-medium overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full my-4">
          <Link to="/certificate" className="">
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            CERTIFICATE
          </Link>
        </div>
        <div className="bg-blue-950 py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-medium overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full my-4">
          <Link to="/skills" className="">
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            SKILLS
          </Link>
        </div>
        <div className="bg-blue-950 py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-medium overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full my-4">
          <Link to="/profile">
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            ABOUT ME
          </Link>
        </div>
        <div className="bg-blue-950 py-2 flex items-center justify-center text-white border border-white shadow-lg border-b-4 font-medium overflow-hidden relative px-4 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group align-middle bg-center w-full my-4">
          <Link to="/contact" className="">
            <span className="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
