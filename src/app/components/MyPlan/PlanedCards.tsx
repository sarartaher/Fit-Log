"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiStar, FiCheck, FiX } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { toast } from "react-toastify";
import { WorkoutTypeProps } from "@/types/WorkoutTypeProps";
import { WorkoutContext } from "@/context/WorkoutContextProvider";

interface PlanedCardsProps {
  item: WorkoutTypeProps;
  activeTab: string;
}

const PlanedCards = ({ item, activeTab }: PlanedCardsProps) => {
  const context = useContext(WorkoutContext);

  const handleRemove = () => {
    if (activeTab === "plan") {
      context?.removeFromPlan(item.id);
      toast.info("Removed from plan");
    } else {
      context?.removeFromSaved(item.id);
      toast.info("Removed from saved");
    }
  };

  const handleMarkAsDone = () => {
    context?.removeFromPlan(item.id);
    toast.success("Workout completed!");
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-zinc-800/80 bg-[#12141c] p-4 transition hover:border-zinc-700/80">
      <div className="flex items-center gap-5">
        <div className="relative h-20 w-36 sm:h-24 sm:w-44 shrink-0 overflow-hidden rounded-xl bg-zinc-900">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="text-base font-black uppercase tracking-tight text-white">
            {item.name}
          </h4>
          <p className="text-xs text-zinc-400 mt-0.5">{item.equipment}</p>

          <div className="mt-3 flex items-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <FiClock className="text-zinc-500" /> {item.duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <FaFire className="text-amber-500" /> {item.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <FiStar className="text-[#ccff00] fill-[#ccff00]" /> {item.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-center">
        <Link
          href={`/library/${item.id}`}
          className="rounded-full border border-zinc-800 bg-[#161822] px-5 py-2.5 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800 hover:text-white"
        >
          View Details
        </Link>

        {activeTab === "plan" && (
          <button
            onClick={handleMarkAsDone}
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-5 py-2.5 text-xs font-black text-black transition hover:bg-[#b8e600]"
          >
            <FiCheck className="text-sm stroke-[3]" />
            Mark as Done
          </button>
        )}

        <button
          onClick={handleRemove}
          className="p-2 text-zinc-500 transition hover:text-zinc-300"
          title="Remove"
        >
          <FiX className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default PlanedCards;
