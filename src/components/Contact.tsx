import React from "react";
import Image from "next/image";
import labelMail from "../../public/labelMail.png";
import banner from "../../public/motionBanner.png";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 my-16">
      <div>
        <h1 className="text-5xl font-semibold text-center">
          Have an Awesome Project <br /> Idea?{" "}
          <span className="text-orange-400">Let’s Discuss</span>
        </h1>
      </div>
      <div className="flex justify-center items-center w-full h-16 border-gray-400 rounded-4xl border py-1 px-5">
        <Image
          className="mr-4 -ml-2"
          src={labelMail}
          alt="labelMail"
          width={45}
        />
        <input
          className="w-[90%] focus:outline-none"
          type="email"
          placeholder="Enter Email Address.."
        />
        <button className="bg-orange-400 py-3 hover:bg-gray-800 duration-200 ease-in-out -mr-3 px-5 rounded-3xl text-white font-semibold">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
