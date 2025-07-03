
import React from "react";
import ScenarioTarget from "./component/ScenarioTarget";
import LoadTestChar from "./component/LoadtestChart";
import LoadInjection from "./component/LoadInjection";

const Configuration = () => {
  return (
    <div className="p-2 sm:p-3 md:p-4">
      <div className="mb-4">
        <ScenarioTarget />
      </div>

      <div className="mb-4">
        <LoadTestChar />
      </div>

      <div>
        <LoadInjection />
      </div>
    </div>
  );
};

export default Configuration;
