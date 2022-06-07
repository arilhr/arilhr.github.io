import React from "react";
import Typewriter from "typewriter-effect";
import "./HomeTitle.scss";

export const HomeTitle = () => {
  return (
    <div className="home-title">
      <span>
        <span className="white-block">ARIL HARLIH</span>
      </span>
      <span className="secondary-text block">
        <Typewriter
          options={{
            strings: ["Unity Game Programmer", "Front-end Web Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
};
