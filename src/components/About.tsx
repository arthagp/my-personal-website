import React from "react";
import Image from "next/image";
import myPhoto from "../../public/my-photo-new.png";
//icons
import js from "../../public/icons/js.svg";
import ts from "../../public/icons/typescript.png";
import nodeJs from "../../public/icons/nodejs.svg";
import reactJs from "../../public/icons/reactjs.svg";
import vueJs from "../../public/icons/vuejs.png";
import nextJs from "../../public/icons/nextjs.svg";
import docker from "../../public/icons/docker.png";
import jest from "../../public/icons/jest.png";
import postgress from "../../public/icons/postgresql.png";
import tailwind from "../../public/icons/tailwind.png";
import redux from "../../public/icons/redux.png";
import cypress from "../../public/icons/cypress.svg";
import eslint from "../../public/icons/eslint.png";

import chrome from "../../public/icons/chrome.png";
import figma from "../../public/icons/figma.svg";
import postman from "../../public/icons/postman.png";
import vscode from "../../public/icons/vs.svg";

const About = () => {
  return (
    <div className="bg-gray-700 w-full">
      <div className="m-16 flex justify-around items-center">
        <div className="relative flex justify-center items-center w-[50%] translate-y-60">
          <div className="absolute bottom-0 bg-orange-400 rounded-4xl w-[350px] h-[350px] "></div>
          <Image
            className="absolute bottom-0 z-10 -translate-x-3"
            src={myPhoto}
            alt="my-photo"
            width={450}
            height={450}
          />
        </div>
        <div className="max-w-[650px] flex flex-col justify-center gap-y-5">
          <h1 className="font-semibold text-4xl text-white">
            About <span className="text-orange-400">me.</span>
          </h1>
          <p className="opacity-70 font-light text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            expedita reiciendis ullam! Quo nihil excepturi voluptates impedit,
            perferendis libero eveniet aspernatur et dolorem vero fuga
            praesentium eligendi quaerat necessitatibus mollitia!
          </p>
          <div className="flex justify-around justify-items-start text-white">
            {/* untuk my tech stack */}
            <div className="flex flex-col items-center gap-y-4">
              <h4>My Tech Stack</h4>
              <div className="grid grid-cols-3">
                <Image src={js} alt="js" width={70} />
                <Image src={ts} alt="ts" width={70} />
                <Image src={nodeJs} alt="nodeJs" width={70} />
                <Image src={reactJs} alt="reactJs" width={70} />
                <Image src={vueJs} alt="vueJs" width={70} />
                <Image src={nextJs} alt="NEXT" width={70} />
                <Image src={postgress} alt="Postgress" width={70} />
                <Image src={tailwind} alt="Tailwind" width={70} />
                <Image src={docker} alt="Docker" width={70} />
                <Image src={jest} alt="Jest" width={70} />
                <Image src={redux} alt="Redux" width={70} />
                <Image src={cypress} alt="cypress" width={70} />
                <Image src={eslint} alt="eslint" width={70} />
              </div>
            </div>
            {/* untuk my tools */}
            <div className="flex flex-col items-center gap-y-4">
              <h4>My Tools</h4>
              <div className="grid grid-cols-3">
                <Image src={chrome} alt="chrome" width={70} />
                <Image src={figma} alt="figma" width={70} />
                <Image src={postman} alt="postman" width={70} />
                <Image src={vscode} alt="vsCode" width={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
