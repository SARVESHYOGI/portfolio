import React from "react";
import htmlcss from "../photo/htmlcss.jpeg";
import nextcomp from "../photo/nextcomp.jpeg";
import techminiachive from "../photo/techminiachive.jpeg";
import techminiparti from "../photo/techminiparti.png";
import nextparti from "../photo/nextparti.jpeg";
import "./components.css";

function Certificate() {
  return (
    <div className="sticky">
      <div className="flex flex-col content-center justify-center items-center">
        <div className="flex m-4">
          <div className="boxmanual bg-black  text-gray-100 mx-20 bg-cover border border-4 rounded-xl border-white">
            <img src={nextparti} alt="c" className="h-80 rounded-lg " />
          </div>
          <div className="boxmanual bg-black text-gray-100 mx-20 bg-cover border border-4 rounded-xl border-white">
            <img src={nextcomp} alt="c" className="h-80 rounded-lg" />
          </div>
        </div>
        <div className="flex m-4">
          <div className="boxmanual bg-black text-gray-100 mx-20 bg-cover border border-4 rounded-xl border-white">
            <img src={techminiparti} alt="c" className="h-80 rounded-lg" />
          </div>

          <div className="boxmanual bg-black text-gray-100 mx-20 bg-cover border border-4 rounded-xl border-white">
            <img src={techminiachive} alt="c" className="h-80 rounded-lg" />
          </div>
        </div>
        <div className="flex m-4">
          <div className="boxmanual bg-black text-gray-100 mx-20 bg-cover border border-4 rounded-xl border-white">
            <img src={htmlcss} alt="c" className="h-80 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
