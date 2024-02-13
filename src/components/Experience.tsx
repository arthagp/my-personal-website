"use client";
import React, { useEffect, useState } from "react";
import { Experiences } from "../types/experience";
import { convertDate, countMonths } from "@/helpers";

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<Experiences[]>([]);

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

  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center my-16 max-sm:overflow-hidden"
    >
      <div className="my-16">
        <h1 className="font-semibold text-4xl ">
          My <span className="text-orange-400">Work Experiences</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-12 lg:max-w-[1200px]">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center lg:h-52"
          >
            <div className="flex justify-between items-center max-sm:justify-center max-sm:text-center">
              <div className="lg:max-w-[25%] max-sm:max-w-[400px]">
                <h1 className="text-xl font font-semibold">
                  at {experience.companyName}, {experience.place || "Indonesia"}
                </h1>
                <p className="opacity-50">
                  {convertDate(new Date(experience.startDate))} -{" "}
                  {convertDate(new Date(experience.enDate))} .{" "}
                  {countMonths(
                    new Date(experience.startDate),
                    new Date(experience.enDate)
                  )}{" "}
                  months
                </p>
              </div>
              <div
                className={`${
                  index % 2 === 0 ? "bg-orange-400" : "bg-black"
                } outline-[2px] outline-dashed border-2 rounded-full w-8 h-8 max-sm:hidden`}
              ></div>
              <div className="lg:max-w-[25%] max-sm:hidden">
                <h1 className="text-xl font font-semibold">
                  {experience.role}
                </h1>
                <p className="opacity-50 text-sm">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
