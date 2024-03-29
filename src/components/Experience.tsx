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
      className="relative flex flex-col justify-center items-center my-16"
    >
      <div className="my-16">
        <h1 className="font-semibold text-4xl max-sm:text-3xl max-sm:w-[250px] max-sm:text-center">
          My <span className="text-orange-400">Work Experiences</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-12 w-full px-20">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center h-52 max-sm:h-32"
          >
            <div className="flex justify-between items-center max-sm:justify-center max-sm:text-center max-sm:text-sm">
              <div className="max-w-[30%] max-sm:max-w-[300px]">
                <h1 className="text-xl max-sm:text-lg font font-semibold">
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
              <div className="max-w-[30%] max-sm:hidden">
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
