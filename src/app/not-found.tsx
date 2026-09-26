import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center text-center text-white">
        <h1 className="text-6xl font-black text-[#ccff00]">404</h1>
        <p className="mt-4 text-lg font-semibold">This page doesn't exist.</p>
        <Link
          href="/"
          className="mt-6 rounded-full bg-[#ccff00] px-6 py-2.5 text-xs font-bold text-black hover:bg-[#b8e600]"
        >
          Go to workouts
        </Link>
      </div>
    </>
  );
};

export default NotFound;
