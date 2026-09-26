"use client";
import React, { useContext, useState } from "react";
import Plantabs from "../components/MyPlan/Plantabs";
import { WorkoutContext } from "@/context/WorkoutContextProvider";

const MyPlan = () => {
  const context = useContext(WorkoutContext);
  const plan = context?.plan || [];
  const saved = context?.saved || [];

  // 1. Control the active tab here
  const [activeTab, setActiveTab] = useState("plan");

  // 2. Choose the list based on the active tab
  const currentList = activeTab === "plan" ? plan : saved;

  // 3. Compute totals dynamically from currentList
  const exercise = currentList.length;
  const minutes = currentList.reduce(
    (Sum, item) => Sum + (Number(item.duration) || 0),
    0,
  );
  const calories = currentList.reduce(
    (Sum, item) => Sum + (Number(item.caloriesBurned) || 0),
    0,
  );

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold uppercase mb-2 mt-10">My Plan</h1>
        <p className="font-semibold text-gray-400 mb-6">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="bg-[#15171D] max-h-screen rounded-2xl py-12 mb-8">
          <div className="flex justify-between px-8">
            <div className="gap-4">
              <h1 className="text-lg text-gray-400">Exercise</h1>
              <h2 className="text-3xl font-extrabold text-[#ccff00] mt-2">
                {exercise}
              </h2>
            </div>
            <div className="gap-4">
              <h1 className="text-lg text-gray-400">Minutes</h1>
              <h2 className="text-3xl font-extrabold text-white mt-2">
                {minutes}
              </h2>
            </div>
            <div className="gap-4">
              <h1 className="text-lg text-gray-400">Calories</h1>
              <h2 className="text-3xl font-extrabold text-white mt-2">
                {calories}
              </h2>
            </div>
          </div>
        </div>

        {/* Pass activeTab and setActiveTab down to Plantabs */}
        <Plantabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
};

export default MyPlan;
