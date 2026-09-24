import { WorkoutTypeProps } from "@/types/WorkoutTypeProps";
import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import React from "react";

const LibraryCard = ({ workout }: { workout: WorkoutTypeProps }) => {
  const {
    name,
    image,
    muscleGroups = [],
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;
  return (
    <>
      <div>
        <div className=" rounded-2xl bg-[#15171e] p-3 text-white">
          <Image
            src={image}
            alt={name}
            width={350}
            height={100}
            className="h-52 w-full rounded-xl object-cover"
          />

          <div className="p-2 pt-4">
            <div className="flex gap-2">
              {muscleGroups.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mt-3 text-lg font-bold uppercase">{name}</h3>
            <p className="text-sm text-gray-400">{equipment}</p>

            <hr className="my-4 border-gray-800" />

            <div className="flex items-center gap-5 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <FiClock /> {duration} min
              </span>
              <span className="flex items-center gap-1.5">
                <FaFire /> {caloriesBurned} kcal
              </span>
              <span className="flex items-center gap-1.5">
                <FiStar /> {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryCard;
