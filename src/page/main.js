import React from "react";
import "./main.css";
import sarvesh1 from "../photo/sarvesh1.jpg";
// import sarvesh from "../photo/sarvesh.jpg";

import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="flex min-h-screen  fixed min-w-fit justify-center content-center object-center+ item-center">
      <div id="main" className="p-5">
        <div className="mb-5">
          <img
            src={sarvesh1}
            alt=""
            srcset=""
            className="w-32 rounded-full mt-6 bg"
          />
        </div>

        <div className="bg rounded-full py-1 cursor-pointer  m-4 justify-center px-10  w-32   content-center text-white">
          <Link to="/home">HOME</Link>
        </div>

        <div className="bg rounded-full py-1 cursor-pointer  m-4 justify-center px-10  w-32   content-center text-white">
          <a
            className="-mx-1"
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1jCeXuIMwjkegbZFfWbqQ580rJkKh-u2E/view?usp=sharing"
          >
            RESUME
          </a>
        </div>
        <div className="bg rounded-full py-1 cursor-pointer  m-4 justify-center px-10  w-32   content-center text-white">
          <Link to="/project" className="-mx-2">
            {" "}
            PROJECTS
          </Link>
        </div>

        <div className="bg rounded-full py-1 cursor-pointer  m-4 justify-center px-10  w-32   content-center text-white">
          <Link to="/certificate" className="">
            CERTIFICATE
          </Link>
        </div>
        <div className="bg rounded-full py-1 cursor-pointer m-4 justify-center px-10  w-32   content-center text-white">
          <Link to="/skills" className="">
            SKILLS
          </Link>
        </div>
        <div className="bg rounded-full py-1 cursor-pointer m-4 justify-center px-4  w-32   content-center text-white">
          <Link to="/profile">ABOUT ME</Link>
        </div>
        <div className="bg rounded-full py-1 cursor-pointer m-4 justify-center px-10  w-32   content-center text-white">
          <Link to="/contact" className="">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
