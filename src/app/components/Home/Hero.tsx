import Image from "next/image";
import React from "react";
import Banner from "./../../../assets/banner.png";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="hero bg-[#15171D] max-h-screen rounded-2xl py-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              alt="Banner.png"
              src={Banner}
              className=" "
              width={600}
              height={400}
            />
            <div>
              <h1 className="text-5xl font-bold">
                TRAIN WITH INTENT. LOG EVERY SET.
              </h1>
              <p className="py-6">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it <br /> into today's plan, and watch the week's work add up.
              </p>
              <button className="btn bg-[#CBF60C] text-black rounded-md border-none">
                Browse Workout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
