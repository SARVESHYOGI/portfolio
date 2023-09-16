import React from "react";
import "./App.css";

import Main from "./page/main";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import Certificate from "./components/certificate";
import Project from "./components/project";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  return (
    <div
      id="app"
      className="m-0 p-0 flex min-h-screen flex-nowrap relative bg-blue-950"
    >
      <Main />
      <div className="flex self-center text-center items-center content-center mx-auto">
        <div className="ml-52">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/home" Component={Home} />
            <Route path="/profile" Component={Profile} />
            <Route path="/project" Component={Project} />
            <Route path="/certificate" Component={Certificate} />
            <Route path="/skills" Component={Skills} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
