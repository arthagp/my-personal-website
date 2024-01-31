"use client";
import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experiences, setExperiences] = useState<string[]>([]);

  const fetchExperience = async () => {
    try {
      const response = await fetch(`/api/experience`);
      const { data } = await response.json();
      setExperiences(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  console.log(experiences);
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center"
    >
      <div className="my-16">
        <h1 className="font-semibold text-4xl ">
          My <span className="text-orange-400">Work Experiences</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="relative flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-[1200px]">
            <div className="w-[25%]">
              <h1 className="text-xl font font-semibold">
                at DISKOMINFO, Banyuwangi
              </h1>
              <p className="opacity-50">Feb 2021 - Apr 2021 . 3 months</p>
            </div>
            <div>
              <div className="bg-orange-400 outline-[2px] outline-dashed border-2 rounded-full w-8 h-8"></div>
            </div>
            <div className="w-[25%]">
              <h1 className="text-xl font font-semibold">Web Developer</h1>
              <p className="opacity-50 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias sit, ullam nisi obcaecati laudantium vero
                necessitatibus optio, fugit quam tempora beatae commodi
                recusandae iure eius, nostrum facere ex quod illum.
              </p>
            </div>
          </div>
          {/* Vertikal Line */}
          <div className="asbolute -translate-y-14 h-36 border-[1px] border-dashed border-black"></div>
          {/*  */}
        </div>
        <div className="relative -translate-y-40 flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-[1200px]">
            <div className="w-[25%]">
              <h1 className="text-xl font font-semibold">
                at DISKOMINFO, Banyuwangi
              </h1>
              <p className="opacity-50">Feb 2021 - Apr 2021 . 3 months</p>
            </div>
            <div>
              <div className="bg-black outline-[2px] outline-dashed border-2 rounded-full w-8 h-8"></div>
            </div>
            <div className="w-[25%]">
              <h1 className="text-xl font font-semibold">Web Developer</h1>
              <p className="opacity-50 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias sit, ullam nisi obcaecati laudantium vero
                necessitatibus optio, fugit quam tempora beatae commodi
                recusandae iure eius, nostrum facere ex quod illum.
              </p>
            </div>
          </div>
          {/* Vertikal Line */}
          <div className="asbolute -translate-y-14 h-36 border-[1px] border-dashed border-black"></div>
          {/*  */}
        </div>
        <div className="relative -translate-y-80 flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-[1200px]">
            <div className="w-[25%]">
              <h1 className="text-xl font font-semibold">
                at DISKOMINFO, Banyuwangi
              </h1>
              <p className="opacity-50">Feb 2021 - Apr 2021 . 3 months</p>
            </div>
            <div>
              <div className="bg-orange-400 outline-[2px] outline-dashed border-2 rounded-full w-8 h-8"></div>
            </div>
            <div className="w-[25%]">
              <h1 className="text-xl font font-semibold">Web Developer</h1>
              <p className="opacity-50 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias sit, ullam nisi obcaecati laudantium vero
                necessitatibus optio, fugit quam tempora beatae commodi
                recusandae iure eius, nostrum facere ex quod illum.
              </p>
            </div>
          </div>
          {/* Vertikal Line */}
          <div className="asbolute -translate-y-14 h-36 border-[1px] border-dashed border-black"></div>
          {/*  */}
        </div>
        <div className="relative -translate-y-[480px] flex flex-col justify-center items-center -mb-96">
          <div className="flex justify-between items-center w-[1200px]">
            <div className="w-[25%]">
              <h1 className="text-xl font font-semibold">
                at DISKOMINFO, Banyuwangi
              </h1>
              <p className="opacity-50">Feb 2021 - Apr 2021 . 3 months</p>
            </div>
            <div>
              <div className="bg-black outline-[2px] outline-dashed border-2 rounded-full w-8 h-8"></div>
            </div>
            <div className="w-[25%]">
              <h1 className="text-xl font font-semibold">Web Developer</h1>
              <p className="opacity-50 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias sit, ullam nisi obcaecati laudantium vero
                necessitatibus optio, fugit quam tempora beatae commodi
                recusandae iure eius, nostrum facere ex quod illum.
              </p>
            </div>
          </div>
          {/* Vertikal Line */}
          {/* <div className="asbolute -translate-y-14 h-36 border-[1px] border-dashed border-black"></div> */}
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
