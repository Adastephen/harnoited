import React from "react";

const Hero = () => {
  return (
    <div className="bg-white w-full ">
      <div className="w-10/12 m-auto lg:mt-40 md:mt-32  ">
        <div className="flex justify-between items-center gap- ">
          <div className=" w-1/2 flex flex-col gap-12 ">
            <h1 className="font-bold text-black lg:text-5xl md:text-3xl ">
              Welcome to HARNOITED
            </h1>
            <h3 className="font-bold text-2xl md:text-xl ">
              Unlock The future WITH STEM Education
            </h3>
            <div className="flex gap-4 mt-24 ">
              <button className="min-w-40 flex py-3 bg-[#020071] rounded-lg text-[#f4edff] font-semibold items-center justify-center px-3 gap-3">
                <span>Get Started </span>
                <img src="/arrow-right.svg" alt="the buttons" className=""/>
              </button>
              <button className="min-w-40 py-3 flex font-semibold border rounded-lg text-black items-center justify-center px-3">Check Courses</button>
            </div>
          </div>
          <div>
            <img src="img1.png" alt=" logos" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
