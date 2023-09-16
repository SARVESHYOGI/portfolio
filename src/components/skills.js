import React from "react";
import "./components.css";
import c from "../photo/c.png";
import cpp from "../photo/c++.png";
import java from "../photo/java.png";
import javascript from "../photo/javascript.png";
import bootstrap from "../photo/bootstrap.jpg";
import css from "../photo/css.jpg";
import html from "../photo/html.webp";
import tailwind from "../photo/tailwind.png";
import react from "../photo/react.png";
import mysql from "../photo/mysql.png";
import git from "../photo/git.png";
import figma from "../photo/figma.png";
import canva from "../photo/canva.png";
import node from "../photo/node.jpg";
import express from "../photo/express.png";

function Skills() {
  return (
    <div className="flex w-full  content-center justify-center items-center text-white">
      <div className="w-full">
        <hr />

        <div className="mt-2 mb-2">
          <h1 className="text-6xl mt-2 mb-2">programming Language</h1>
          <div className="flex justify-around">
            <div>
              <img src={c} className="w-20 bg" alt="" />
            </div>
            <div>
              <img src={cpp} className="w-20 bg" alt="" />
            </div>
            <div>
              <img src={java} className="w-20 bg" alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-2 mb-2">
          <h1 className="text-6xl mt-2 mb-2"> frontend development</h1>
          <div className="flex justify-around gap-32 ">
            <div>
              <img src={html} className="w-20 bg" alt="" />
            </div>
            <div>
              <img src={css} className="w-24 bg" alt="" />
            </div>
            <div>
              <img src={bootstrap} className="w-24 bg" alt="" />
            </div>
            <div>
              <img src={tailwind} className="w-20 bg" alt="" />
            </div>
            <div>
              <img src={javascript} className="w-20 bg" alt="" />
            </div>

            <div>
              <img src={react} className="w-28 bg" alt="" />
            </div>
          </div>
        </div>
        <hr />

        <div className="mt-2 mb-2">
          <h1 className="text-6xl mt-2 mb-2">backend development</h1>
          <div className="flex justify-around ">
            <div>
              <img src={node} className="w-20 bg" alt="" />
            </div>
            <div>
              <img src={express} className="w-20 bg" alt="" />
            </div>
            <div>
              <img src={mysql} className="w-20 bg" alt="" />
            </div>
          </div>
        </div>
        <hr />

        <div className="mt-2 mb-2">
          <h1 className="text-6xl mt-2 mb-2 ">framework</h1>
          <div className="flex justify-around gap-40">
            <div>
              <img src={git} className="w-20 bg" alt="" />
            </div>
            <div>
              <img src={figma} className="w-20 bg" alt="" />
            </div>
            <div>
              <img src={canva} className="w-20 bg" alt="" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Skills;
