import React from "react";

const Navbar = () => {
  // di berikan kondisi ketika berada pada section home, atau user mengklik navbar home atau yang lainnya maka mx di hapus
  return (
    <div className="flex justify-center items-center h-16 w-[1298px] rounded-[30px] bg-gray-800 my-7">
      <nav className="flex justify-between items-center min-w-[1275px] text-white">
        <ul className="flex justify-center items-center gap-x-10 font-extralight">
          <li className="rounded-4xl bg-orange-400 py-3 px-6 font-semibold">
            Home
          </li>
          {/* <li>Home</li> */}
          <li>Project</li>
          <li>Experience</li>
        </ul>
        <div className="relative flex justify-center items-center h-12">
          <span className="absolute opacity-90 top-1 left-1 rounded-full w-6 h-6 bg-orange-400"></span>
          <h1 className="z-10 text-white font-bold text-2xl">ARTHA G.P</h1>
          <span className="absolute opacity-90 bottom-1 right-1 rounded-full w-6 h-6 bg-orange-400"></span>
        </div>
        <ul className="flex justify-center items-center gap-x-10 font-extralight mx-5">
          {/* <li className="rounded-4xl bg-orange-400 py-3 px-6 font-semibold">About</li> */}
          <li>About</li>
          <li>Certificate</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
