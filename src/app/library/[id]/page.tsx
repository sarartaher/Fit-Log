import React from "react";
import { WorkoutTypeProps } from "@/types/WorkoutTypeProps";
import { FiCalendar, FiBookmark } from "react-icons/fi";
import { notFound } from "next/navigation";
import Image from "next/image";

const getWorkout = async (id: string): Promise<WorkoutTypeProps | null> => {
  try {
    const response = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
    );
    if (!response.ok) return null;

    const data: WorkoutTypeProps = await response.json();
    return data;
  } catch {
    return null;
  }
};
interface PararmsTypeProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetails = async ({ params }: PararmsTypeProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  const {
    name,
    image,
    description,
    muscleGroups = [],
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions = [],
  } = workout;

  const specs = [
    { label: "EQUIPMENT", value: equipment },
    { label: "DIFFICULTY", value: difficulty },
    { label: "SETS", value: sets },
    { label: "REPS", value: reps },
    { label: "DURATION", value: `${duration} min` },
    { label: "CALORIES", value: `${caloriesBurned} kcal` },
    { label: "RATING", value: rating },
  ];

  return (
    <>
      <div className=" container mx-auto">
        <div className="min-h-screen bg-[#0d0e12] px-6 py-12 text-white flex justify-center items-center ">
          <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#14151b]">
              <Image
                src={image}
                alt={name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                {name}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>

              {/* Muscle Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {muscleGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full bg-[#ccff00] px-3.5 py-1 text-xs font-black uppercase text-black"
                  >
                    {group}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#151720] p-5 divide-y divide-zinc-800/80">
                {specs.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0 text-xs sm:text-sm"
                  >
                    <span className="font-semibold tracking-wider text-zinc-400 uppercase">
                      {item.label}
                    </span>
                    <span className="font-medium text-zinc-200">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {instructions.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">
                    INSTRUCTIONS
                  </h3>
                  <ol className="mt-3 space-y-2 text-xs sm:text-sm text-zinc-400">
                    {instructions.map((step, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="shrink-0 font-medium">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-xl bg-[#ccff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b8e600]">
                  <FiCalendar className="text-sm stroke-[2.5]" />
                  Add to today&apos;s plan
                </button>

                <button className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#151720] px-5 py-3 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800">
                  <FiBookmark className="text-sm" />
                  Save for later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default WorkoutDetails;
