import React from "react";
import Image from "next/image";
import myPhoto from "../../public/my-photo-new.png";
import { dataIconTechStack, dataIconsTools } from "@/utils/data/dataIcons";

const About = () => {
  const iconWidth = 30;
  return (
    <section id="about" className="bg-gray-700 w-full max-sm:h-[1250px]">
      <div className="p-10 md:p-16 flex max-sm:flex-col justify-around items-center">
        <div className="relative flex justify-center w-full md:w-[50%] translate-y-60">
          <div className="absolute bottom-0 bg-orange-400 rounded-4xl lg:w-[350px] lg:h-[350px] max-sm:w-[250px] max-sm:h-[250px]"></div>
          <span className="absolute bottom-0 z-10 -translate-x-3 max-sm:w-[200px] max-sm:h-[200px] w-[400px] h-[400px]">
            <Image src={myPhoto} alt="my-photo" fill />
          </span>
        </div>
        <div className="relative w-full md:w-[50%] flex flex-col justify-center gap-y-5 z-20 max-sm:translate-y-5">
          <h1 className="font-semibold text-4xl text-white">
            About{" "}
            <span className="text-orange-400 max-sm:bg-gray-600 max-sm:rounded-lg">
              me.
            </span>
          </h1>
          <p className="opacity-70 font-light text-white max-sm:translate-y-44 max-sm:text-sm">
            I am a full-stack developer, but I lean more towards front-end
            development. My preferred tech stack revolves around React, making
            my React skills intermediate to expert level. Beyond just writing
            code, I find passion in crafting engaging and responsive user
            experiences. This is my journey in creating dynamic and innovative
            interfaces that seamlessly interact with users.
          </p>
          <div className="flex justify-around justify-items-start gap-10 text-white max-sm:translate-y-44">
            {/* untuk my tech stack */}
            <div className="flex flex-col items-center gap-y-4">
              <h4>My Tech Stack</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {dataIconTechStack.map((icon, index) => (
                  <span
                    key={index}
                    className="flex justify-center items-center w-14 h-14 bg-white rounded-xl"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.title}
                      width={30}
                      height={30}
                    />
                  </span>
                ))}
              </div>
            </div>
            {/* untuk my tools */}
            <div className="flex flex-col items-center gap-y-4">
              <h4>My Tools</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {dataIconsTools.map((icon, index) => (
                  <span
                    key={index}
                    className="flex justify-center items-center w-14 h-14 bg-white rounded-xl"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.title}
                      width={30}
                      height={30}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
