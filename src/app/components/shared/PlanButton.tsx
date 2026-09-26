"use client"
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
      className="flex items-center gap-2 rounded-xl bg-[#ccff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#b8e600]"
    >
      <FiCalendar className="text-sm stroke-[2.5]" />
      <span>Plan</span>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-black text-[#ccff00]">
        {count}
      </span>
    </Link>
  );
};

export default PlanButton;
