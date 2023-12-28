import React, { useEffect } from "react";
import { Element } from "react-scroll";

import "./components.css";
import "./script.js";

import iete from "../photo/iete.png";
import amazon from "../photo/amazonclane.png";
import game from "../photo/game.png";
import minithon from "../photo/minithon.png";
import port from "../photo/portfilo.png";

function Projects() {
  const handleScroll = () => {
    const sectionsR = document.querySelectorAll(".sectionR");
    const sectionsL = document.querySelectorAll(".sectionL");

    sectionsR.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight - 200 && rect.bottom >= 0;

      if (isVisible) {
        sec.classList.add("show-animateR");
      } else {
        sec.classList.remove("show-animateR");
      }
    });
    sectionsL.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight - 200 && rect.bottom >= 0;

      if (isVisible) {
        sec.classList.add("show-animateL");
      } else {
        sec.classList.remove("show-animateL");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col content-center justify-center items-center">
      {/* Section 1 */}

      <Element name="sec-1" className=" sec-1">
        <div className="sec-1 flex h-screen items-center m-5">
          <div className="sectionL projectimg bg-black text-white m-3 w-full">
            <img src={minithon} alt="c" className="rounded-3xl bg-cover" />
          </div>

          <div className="sectionR text-gray-100 m-3 w-2/3">
            <h1 className="text-6xl m-3">CYBERRIDE HUB</h1>
            <p className="text-xl">
              <span className="opacity-100">My first minithon</span>{" "}
              <span className="opacity-60">
                with a team of four members, it is my very first minithon which
                was organized in my college,
              </span>
            </p>
            <p className="font-medium text-xl">
              <span className="font-black">Tools used:</span> Javascript, HTML,
              CSS, Bootstrap, Graphics, Animation
            </p>
          </div>
        </div>
      </Element>

      {/* Section 2 */}

      <Element name="sec-2" className="section sec-2">
        <div className="sec-2 flex h-screen items-center m-5">
          <div className="sectionL projectimg bg-black text-white m-3 w-full">
            <img src={iete} alt="c" className="rounded-3xl bg-cover" />
          </div>
          <div className="sectionR text-gray-100 m-3 w-2/3">
            <h1 className="text-6xl m-3">IETE-TSEC</h1>
            <p className="opacity-60 text-xl">
              IETE-TSEC committee website made by a group of seven team members,
              one of my first large projects.
            </p>
            <p className="font-medium text-xl">
              <span className="font-black">Tools used:</span> React.js,
              Javascript, JSX, CSS
            </p>
          </div>
        </div>
      </Element>

      {/* Section 3 */}

      <Element name="sec-3" className="section sec-3">
        <div className="sec-3 flex h-screen items-center m-5">
          <div className="sectionL projectimg bg-black text-white m-3 w-full">
            <img src={port} alt="c" className="rounded-3xl bg-cover" />
          </div>
          <div className="sectionR text-gray-100 m-3 w-2/3">
            <h1 className="text-6xl m-0">PORTFOLIO</h1>
            <p className="opacity-60 text-xl">My self-made portfolio</p>
            <p className="font-medium text-xl">
              <span className="font-black">Tools used:</span> React, JSX,
              Javascript, HTML, CSS, Tailwind CSS
            </p>
          </div>
        </div>
      </Element>

      {/* Section 4 */}

      <Element name="sec-4" className="section sec-4">
        <div className="sec-3 flex h-screen items-center m-5">
          <div className="sectionL projectimg bg-black text-white m-3 w-full">
            <img src={game} alt="c" className="rounded-3xl bg-cover" />
          </div>
          <div className="sectionR text-gray-100 m-3 w-2/3">
            <h1 className="text-5xl m-0">ROCK-PAPER-SCISSORS GAME</h1>
            <p className="opacity-60 text-xl">
              The game is based on the basics of JavaScript. It was created in
              my second year of engineering.
            </p>
            <p className="font-medium text-xl">
              <span className="font-black">Tools used:</span> Javascript, HTML,
              CSS
            </p>
          </div>
        </div>
      </Element>

      {/* Section 5 */}

      <Element name="sec-5" className="section sec-5">
        <div className="sec-3 flex h-screen items-center m-5">
          <div className="sectionL projectimg bg-black text-white m-3 w-full">
            <img src={amazon} alt="c" className="rounded-3xl bg-cover" />
          </div>
          <div className="sectionR text-gray-100 m-3 w-2/3">
            <h1 className="text-6xl">AMAZON CLONE</h1>
            <p className="opacity-60 text-xl">
              The front page of Amazon was created when I completed learning
              HTML and CSS.
            </p>
            <p className="font-medium text-xl">
              <span className="font-black">Tools used:</span> HTML, CSS
            </p>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Projects;
