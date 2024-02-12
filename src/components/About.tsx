import React from "react";
import Image from "next/image";
import myPhoto from "../../public/my-photo-new.png";
//icons
import jsIcon from "../../public/icons/js.svg";
import tsIcon from "../../public/icons/typescript.png";
import nodeJsIcon from "../../public/icons/nodejs.svg";
import reactJsIcon from "../../public/icons/reactjs.svg";
import vueJsIcon from "../../public/icons/vuejs.png";
import nextJsIcon from "../../public/icons/nextjs.svg";
import dockerIcon from "../../public/icons/docker.png";
import jestIcon from "../../public/icons/jest.png";
import postgressIcon from "../../public/icons/postgresql.png";
import tailwindIcon from "../../public/icons/tailwind.png";
import reduxIcon from "../../public/icons/redux.png";
import cypressIcon from "../../public/icons/cypress.svg";
import eslintIcon from "../../public/icons/eslint.png";
import chromeIcon from "../../public/icons/chrome.png";
import figmaIcon from "../../public/icons/figma.svg";
import postmanIcon from "../../public/icons/postman.png";
import vscodeIcon from "../../public/icons/vs.svg";

const About = () => {
  return (
    <section id="about" className="bg-gray-700 w-full max-sm:h-[1000px]">
      <div className="m-16 flex max-sm:flex-col justify-around items-center">
        <div className="relative flex justify-center items-center w-[50%] translate-y-60">
          <div className="absolute bottom-0 bg-orange-400 rounded-4xl lg:w-[350px] lg:h-[350px] max-sm:w-[250px] max-sm:h-[250px]"></div>
          <Image
            className="absolute bottom-0 z-10 -translate-x-3"
            src={myPhoto}
            alt="my-photo"
            width={400}
            height={400}
          />
        </div>
        <div className="relative max-w-[650px] flex flex-col justify-center gap-y-5 z-20 max-sm:translate-y-5">
          <h1 className="font-semibold text-4xl text-white">
            About{" "}
            <span className="text-orange-400 max-sm:bg-gray-600 max-sm:rounded-lg">
              me.
            </span>
          </h1>
          <p className="opacity-70 font-light text-white max-sm:translate-y-44">
            I am a full-stack developer, but I lean more towards front-end
            development. My preferred tech stack revolves around React, making
            my React skills intermediate to expert level. Beyond just writing
            code, I find passion in crafting engaging and responsive user
            experiences. This is my journey in creating dynamic and innovative
            interfaces that seamlessly interact with users.
          </p>
          <div className="flex justify-around justify-items-start text-white max-sm:translate-y-44">
            {/* untuk my tech stack */}
            <div className="flex flex-col items-center gap-y-4">
              <h4>My Tech Stack</h4>
              <div className="grid grid-cols-3">
                <Image src={jsIcon} alt="js" width={70} />
                <Image src={tsIcon} alt="ts" width={70} />
                <Image src={nodeJsIcon} alt="nodeJs" width={70} />
                <Image src={reactJsIcon} alt="reactJs" width={70} />
                <Image src={vueJsIcon} alt="vueJs" width={70} />
                <Image src={nextJsIcon} alt="NEXT" width={70} />
                <Image src={postgressIcon} alt="Postgress" width={70} />
                <Image src={tailwindIcon} alt="Tailwind" width={70} />
                <Image src={dockerIcon} alt="Docker" width={70} />
                <Image src={jestIcon} alt="Jest" width={70} />
                <Image src={reduxIcon} alt="Redux" width={70} />
                <Image src={cypressIcon} alt="cypress" width={70} />
                <Image src={eslintIcon} alt="eslint" width={70} />
              </div>
            </div>
            {/* untuk my tools */}
            <div className="flex flex-col items-center gap-y-4">
              <h4>My Tools</h4>
              <div className="grid grid-cols-3">
                <Image src={chromeIcon} alt="chrome" width={70} />
                <Image src={figmaIcon} alt="figma" width={70} />
                <Image src={postmanIcon} alt="postman" width={70} />
                <Image src={vscodeIcon} alt="vsCode" width={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
