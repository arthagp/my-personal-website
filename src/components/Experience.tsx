"use client";
import React, { useEffect, useState } from "react";
import { Experiences } from "../types/experience";
import { convertDate, countMonths } from "@/helpers";

const Experience = () => {
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

  console.log(experiences);

  useEffect(() => {
    fetchExperience();
  }, []);

  if (!experiences) {
    return null;
  }

  // const dateTime = new Date();
  // console.log(dateTime);
  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center my-16"
    >
      <div className="my-16">
        <h1 className="font-semibold text-4xl ">
          My <span className="text-orange-400">Work Experiences</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-12">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center h-[200px]"
          >
            <div className="flex justify-between items-center w-[1200px]">
              <div className="w-[25%]">
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
              <div>
                <div
                  className={`${
                    index % 2 === 0 ? "bg-orange-400" : "bg-black"
                  } outline-[2px] outline-dashed border-2 rounded-full w-8 h-8`}
                ></div>
              </div>
              <div className="w-[25%]">
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
