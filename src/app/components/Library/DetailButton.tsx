"use client";

import React, { useContext } from "react";
import { FiCalendar, FiBookmark } from "react-icons/fi";
import { WorkoutContext } from "@/context/WorkoutContextProvider";
import { WorkoutTypeProps } from "@/types/WorkoutTypeProps";

export default function DetailButtons({
  workout,
}: {
  workout: WorkoutTypeProps;
}) {
  const context = useContext(WorkoutContext);

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => context?.addToPlan(workout)}
        className="flex items-center gap-2 rounded-xl bg-[#ccff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b8e600]"
      >
        <FiCalendar className="text-sm stroke-[2.5]" />
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => context?.addToSaved(workout)}
        className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#151720] px-5 py-3 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800"
      >
        <FiBookmark className="text-sm" />
        Save for later
      </button>
    </div>
  );
}
