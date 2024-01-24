import React from "react";
import Image from "next/image";
import btnArrow from "../../public/btn-arrow-diagonal.png";
import dummyProject from "../../public/dummy-project.png";
import myPhoto from "../../public/my-photo-new.png";

const Project = () => {
  // nantinya gallery project ini data nya akan di buat dengan format json.
  return (
    <div className="z-20 rounded-3xl flex flex-col justify-center bg-gray-800 items-center w-[100%] bg-project">
      <div className="flex justify-between items-center w-[90%] my-16">
        <h1 className="text-white font-bold text-4xl">
          My <span className="text-orange-400">Projects</span>
        </h1>
        <p className="text-white max-w-[550px] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque
          hic harum corrupti ea numquam libero ut mollitia dolores cum. Ullam
          natus quibusdam accusamus voluptate neque nisi, ipsa a laboriosam.
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-12 mt-12 mb-16">
        {/* gallery projects */}
        <div className="border border-gray-500 rounded-3xl w-[290px] h-[320px]">
          <div className="border-b border-gray-500">
            <h1 className="text-white font-medium py-5 pl-5">Todo List</h1>
          </div>
          <div className="relative flex justify-center items-center w-[100%] h-[80%]">
            <div className="absolute bottom-4 rounded-3xl bg-gray-500 w-[80%] h-[82%]"></div>
            <div className="absolute bottom-1 rounded-3xl bg-gray-300 w-[90%] h-[83%]"></div>
            <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property"></div>
            <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property1">
              <Image
                className="rounded-3xl"
                src={dummyProject}
                alt="project1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-2 border-[12px] border-gray-800 rounded-full">
              <Image src={btnArrow} alt="btn-arrow" width={70} />
            </div>
          </div>
        </div>
        <div className="border border-gray-500 rounded-3xl w-[290px] h-[320px]">
          <div className="border-b border-gray-500">
            <h1 className="text-white font-medium py-5 pl-5">Todo List</h1>
          </div>
          <div className="relative flex justify-center items-center w-[100%] h-[80%]">
            <div className="absolute bottom-4 rounded-3xl bg-gray-500 w-[80%] h-[82%]"></div>
            <div className="absolute bottom-1 rounded-3xl bg-gray-300 w-[90%] h-[83%]"></div>
            <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property"></div>
            <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property1">
              <Image
                className="rounded-3xl"
                src={dummyProject}
                alt="project1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-2 border-[12px] border-gray-800 rounded-full">
              <Image src={btnArrow} alt="btn-arrow" width={70} />
            </div>
          </div>
        </div>
        <div className="border border-gray-500 rounded-3xl w-[290px] h-[320px]">
          <div className="border-b border-gray-500">
            <h1 className="text-white font-medium py-5 pl-5">Todo List</h1>
          </div>
          <div className="relative flex justify-center items-center w-[100%] h-[80%]">
            <div className="absolute bottom-4 rounded-3xl bg-gray-500 w-[80%] h-[82%]"></div>
            <div className="absolute bottom-1 rounded-3xl bg-gray-300 w-[90%] h-[83%]"></div>
            <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property"></div>
            <div className="absolute -bottom-3 rounded-3xl bg-white w-[100%] h-[84%] property1">
              <Image
                className="rounded-3xl"
                src={dummyProject}
                alt="project1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-2 border-[12px] border-gray-800 rounded-full">
              <Image src={btnArrow} alt="btn-arrow" width={70} />
            </div>
          </div>
        </div>
      </div>
      {/* card -> pisahkan menjadi component nantinya */}
    </div>
  );
};

export default Project;
