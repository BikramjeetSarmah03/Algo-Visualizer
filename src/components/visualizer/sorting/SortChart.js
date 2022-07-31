import React from "react";
import { Bar } from "../../../utils";

const SortChart = () => {
  const array = [5, 3, 4, 1, 2];

  return (
    <div className="p-4 bg-gray-200 h-[50vh] flex items-end shadow-inner">
      {array.map((value, index) => {
        let maxNum = Math.max(...array);
        let height = (value / maxNum) * 100;
        let width = 100 / array.length;

        return <Bar key={index} number={value} height={height} width={width} />;
      })}
    </div>
  );
};

export default SortChart;
