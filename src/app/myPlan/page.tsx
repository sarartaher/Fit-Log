import React from "react";
import Plantabs from "../components/MyPlan/Plantabs";


const MyPlan = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold uppercase mb-2 mt-10">My Plan</h1>
        <p className="mb-5 font-semibold text-gray-400 mb-6">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="bg-[#15171D] max-h-screen rounded-2xl py-12 mb-8">
          <div className="flex justify-between px-8">
            <div className="gap-4 ">
              <h1 className="text-lg text-gray-400">Exercise</h1>
            </div>
            <div className="gap-4 ">
              <h1 className="text-lg text-gray-400">Minutes</h1>
            </div>
            <div className="gap-4 ">
              <h1 className="text-lg text-gray-400">Calories</h1>{" "}
            </div>
          </div>
        </div>
        <Plantabs/>
      </div>
    </>
  );
};

export default MyPlan;
