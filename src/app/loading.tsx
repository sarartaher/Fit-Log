import React from "react";

const loading = () => {
  return (
    <>
      <div className="container mx-auto flex min-h-[50vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
      </div>
    </>
  );
};

export default loading;
