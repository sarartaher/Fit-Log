import React from "react";

const Plantabs = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="tabs tabs-border mb-6">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Today's Plan"
          />
          <div className="tab-content border-base-300 bg-base-100 p-10"></div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Saved"
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10"></div>
        </div>
      </div>
    </>
  );
};

export default Plantabs;
