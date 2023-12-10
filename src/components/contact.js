import React from "react";
import "./components.css";

import instagram from "../photo/instagram.jpg";
import whatsapp from "../photo/whatsapp.png";
import github from "../photo/github.png";
import linkdin from "../photo/linkdin.png";
import twitter from "../photo/twitter.png";
import gmail from "../photo/gmail.webp";

function Contact() {
  return (
    <div className="flex flex-col content-center justify-center items-center text-white">
      <div className="rightpara cursor-pointer flex bg rounded-full w-96 px-8 m-5">
        <a
          href="https://www.instagram.com/sarveshs.yogi/"
          className="flex items-center text-3xl"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center gap-8">
            <img src={instagram} className="w-20 rounded-full" alt="" />
            <p>instagram </p>
          </div>
        </a>
      </div>
      <div className="leftpara cursor-pointer flex bg px-8 w-96 rounded-full m-5">
        <a
          href="https://www.linkedin.com/in/sarvesh-yogi-9b07b3252/"
          className="flex items-center text-3xl space-x-16"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkdin} className="w-20 rounded-full" alt="" />
          <span>Linkedin</span>
        </a>
      </div>
      <div className="rightpara cursor-pointer flex bg px-8 w-96 rounded-full m-5">
        <a
          href="https://api.whatsapp.com/send?phone=7588131774"
          className="flex items-center text-3xl space-x-8"
          rel="noreferrer"
          target="_blank"
        >
          <img src={whatsapp} className="w-20 rounded-full" alt="" />
          <span>whatsapp</span>
        </a>
      </div>
      <div className="leftpara cursor-pointer flex bg px-8 w-96 rounded-full m-5">
        <a
          href="https://github.com/SARVESHYOGI"
          className="flex items-center text-3xl space-x-16"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} className="w-20 rounded-full" alt="" />
          <span>github </span>
        </a>
      </div>
      <div className="rightpara cursor-pointer flex bg px-8 w-96 rounded-full m-5">
        <a
          href="https://twitter.com/@SarveshYogi9305"
          className="flex items-center text-3xl space-x-16"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} className="w-20 rounded-full" alt="" />
          <span>twitter </span>
        </a>
      </div>
      <div className="leftpara cursor-pointer flex bg px-8 w-96 rounded-full m-5">
        <a
          href="mailto:sarveshyogi2005@gmail.com"
          className="flex items-center text-3xl space-x-16"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gmail} className="w-20 rounded-full" alt="" />
          <span>G-mail </span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
