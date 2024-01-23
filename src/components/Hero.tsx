import React from "react";
import Image from "next/image";
import myPhoto from "../../public/my-photo-new.png";
import vector1 from "../../public/Vector 1.png";
import vector2 from "../../public/Vector 2.png";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center flex-col my-10 pb-[250px]">
      <div className="relative flex justify-center items-center flex-col">
        <div className="relative flex justify-center items-center">
          <span className="absolute flex -top-5 -right-5">
            <Image src={vector1} alt="vector-1" width={25} height={25} />
          </span>
          <h4 className="px-6 py-2 border border-black rounded-4xl font-semibold">
            Hello!
          </h4>
        </div>
        <div className="relative max-w-[1200px] my-5">
          <h1 className="font-bold text-7xl text-center">
            I'm <span className="text-orange-400">Artha</span>, <br /> Front End
            Developer
          </h1>
          <span className="absolute flex -bottom-10 -left-14">
            <Image src={vector2} alt="vector-2" width={55} height={55} />
          </span>
        </div>
      </div>
      <div className="absolute top-36">
        <div className="relative flex flex-col justify-center items-center">
          {/* berisi my photo */}
          <span className="absolute bg-orange-400 top-24 rounded-full w-[500px] h-[500px]"></span>
          <Image
            className="z-10"
            src={myPhoto}
            alt={"Picture of the author"}
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
