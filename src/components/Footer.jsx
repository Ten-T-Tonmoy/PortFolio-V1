import React from "react";

import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-black text-white p-4">
      <div className="flex flex-col ">
        <h1>Want To do something?</h1>
        <h2>To Escape Mediocrity!? Lets join hands then</h2>
        <ul className="flex my-4 flex-col text-[1rem] ">
          <li className="flex items-center gap-2">
            <FaTwitter />
            <a href="https://twitter.com/">
              <span>Twitter</span>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaDiscord />
            <a href="https://discord.com/">
              <span>Discord</span>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub />
            <a href="https://discord.com/">
              <span>Github</span>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin />
            <a href="https://discord.com/">
              <span>LinkdenIn</span>
            </a>
          </li>
        </ul>
      </div>
      <div>that</div>
    </div>
  );
};

export default Footer;
