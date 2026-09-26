"use client";
import { WorkoutTypeProps } from "@/types/WorkoutTypeProps";
import React, { useState } from "react";
import { createContext } from "react";

interface ContextType {
  plan: WorkoutTypeProps[];
  saved: WorkoutTypeProps[];
  addToPlan: (workout: WorkoutTypeProps) => void;
  addToSaved: (workout: WorkoutTypeProps) => void;
}
const WorkoutContext = createContext<ContextType | null>(null);

const WorkoutContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<WorkoutTypeProps[]>([]);
  const [saved, setSaved] = useState<WorkoutTypeProps[]>([]);

  const addToPlan = (workout: WorkoutTypeProps) => {
    if (!plan.some((work) => work.id === workout.id)) {
      setPlan([...plan, workout]);
    }
  };

  const addToSaved = (workout: WorkoutTypeProps) => {
    if (!saved.find((work) => work.id === workout.id)) {
      setSaved([...saved, workout]);
    }
  };
  const func = {
    plan,
    saved,
    addToPlan,
    addToSaved,
  };
  return (
    <WorkoutContext.Provider value={func}>{children}</WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
