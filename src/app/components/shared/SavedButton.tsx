"use client"
import { WorkoutContext } from "@/context/WorkoutContextProvider";
import Link from "next/link";
import { FiBookmark } from "react-icons/fi";
import React, { useContext } from "react";

const SavedButton = () => {
  const context = useContext(WorkoutContext);
  const count = context?.saved?.length || 0;
  return (
    <Link
      href="/myPlan"
      className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#15171f] px-4 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800"
    >
      <FiBookmark className="text-sm" />
      <span>Saved</span>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-300">
        {count}
      </span>
    </Link>
  );
};

export default SavedButton;
