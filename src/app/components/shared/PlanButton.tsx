"use client";
import { WorkoutContext } from "@/context/WorkoutContextProvider";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
import React, { useContext } from "react";

const PlanButton = () => {
  const context = useContext(WorkoutContext);
  const count = context?.plan?.length || 0;
  return (
    <Link
      href="/myPlan"
      className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-white transition hover:bg-[#404333]"
    >
      <FiCalendar className="text-sm stroke-[2.5]" />
      <span>Plan</span>
      <span className="flex h-5 w-5 items-center justify-center rounded-full text-black text-[10px] font-black bg-[#ccff00]">
        {count}
      </span>
    </Link>
  );
};

export default PlanButton;
