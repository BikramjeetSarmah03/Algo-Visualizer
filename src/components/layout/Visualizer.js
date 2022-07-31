import React from "react";
import { SortChart } from "../visualizer/sorting";
import { Controls, Description } from "../common";

const Visualizer = () => {
  return (
    <div className="m-4 shadow p-4 ">
      <SortChart />
      <Controls />
      <Description />
    </div>
  );
};

export default Visualizer;
