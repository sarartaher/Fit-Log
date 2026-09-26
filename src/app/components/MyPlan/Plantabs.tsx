"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { WorkoutContext } from "@/context/WorkoutContextProvider";
import PlanedCards from "./PlanedCards";

interface PlantabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Plantabs = ({ activeTab, setActiveTab }: PlantabsProps) => {
  const context = useContext(WorkoutContext);
  const plan = context?.plan || [];
  const saved = context?.saved || [];

  const [sortBy, setSortBy] = useState("duration");

  let list = plan;
  if (activeTab === "saved") {
    list = saved;
  }

  let sortedList = [...list];
  if (sortBy === "duration") {
    sortedList.sort((a, b) => (b.duration || 0) - (a.duration || 0));
  }
  if (sortBy === "calories") {
    sortedList.sort(
      (a, b) => (b.caloriesBurned || 0) - (a.caloriesBurned || 0),
    );
  }

  return (
    <div className="w-full mb-8">
      {/* Top Filter Bar */}
      <div className="flex items-center justify-between mb-6">
        {/* Toggle Pill */}
        <div className="inline-flex rounded-xl bg-[#12141c] p-1 border border-zinc-800/80">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-5 py-2 text-xs font-semibold transition ${
              activeTab === "plan"
                ? "bg-[#1f222e] text-white shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-5 py-2 text-xs font-semibold transition ${
              activeTab === "saved"
                ? "bg-[#1f222e] text-white shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-xl border border-zinc-800/80 bg-[#12141c] py-2 pl-3.5 pr-8 text-xs font-medium text-white focus:outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs" />
          </div>
        </div>
      </div>

      {/* List or Empty State */}
      {sortedList.length === 0 ? (
        <div className="border border-dashed border-zinc-800 rounded-3xl p-12 text-center bg-[#0d0f15]">
          <h2 className="text-base font-bold uppercase tracking-wider text-white">
            Nothing Here Yet
          </h2>
          <p className="text-zinc-400 text-xs mt-1 mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="bg-[#ccff00] text-black font-bold px-6 py-2.5 rounded-full text-xs inline-block hover:bg-[#b8e600] transition"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {sortedList.map((item) => (
            <PlanedCards key={item.id} item={item} activeTab={activeTab} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Plantabs;
