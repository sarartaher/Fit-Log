"use client";
import { WorkoutTypeProps } from "@/types/WorkoutTypeProps";
import React, { useState, createContext } from "react";
import { toast } from "react-toastify";

interface ContextType {
  plan: WorkoutTypeProps[];
  saved: WorkoutTypeProps[];
  addToPlan: (workout: WorkoutTypeProps) => void;
  addToSaved: (workout: WorkoutTypeProps) => void;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
}

export const WorkoutContext = createContext<ContextType | null>(null);

const WorkoutContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<WorkoutTypeProps[]>([]);
  const [saved, setSaved] = useState<WorkoutTypeProps[]>([]);

  const addToPlan = (workout: WorkoutTypeProps) => {
    if (plan.length >= 5) {
      toast.error("Cap of five lifts for today!");
      return;
    }
    if (!plan.some((work) => String(work.id) === String(workout.id))) {
      setPlan([...plan, workout]);
      toast.success("Added to today's plan!");
    } else {
      toast.warn("Already in today's plan!");
    }
  };

  const addToSaved = (workout: WorkoutTypeProps) => {
    if (!saved.some((work) => String(work.id) === String(workout.id))) {
      setSaved([...saved, workout]);
      toast.success("Saved for later!");
    } else {
      toast.warn("Already saved!");
    }
  };

  const removeFromPlan = (id: string | number) => {
    setPlan(plan.filter((item) => String(item.id) !== String(id)));
  };

  const removeFromSaved = (id: string | number) => {
    setSaved(saved.filter((item) => String(item.id) !== String(id)));
  };

  const func = {
    plan,
    saved,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
  };

  return (
    <WorkoutContext.Provider value={func}>{children}</WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
