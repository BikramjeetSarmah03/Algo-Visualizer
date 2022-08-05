import React, { useContext } from "react";
import { Bar } from "../../../utils";
import ArrayContext from "../../../utils/ArrayContext";

const SortChart = () => {
  const { array } = useContext(ArrayContext);

  return (
    <div className="p-4 bg-gray-200 h-[50vh] flex items-end shadow-inner">
      {array.map((value, index) => {
        let maxNum = Math.max(...array);
        let height = (value / maxNum) * 100;
        let width = 100 / array.length;

        return (
          <Bar
            key={index}
            index={index}
            number={value}
            height={height}
            width={width}
            length={array.length}
          />
        );
      })}
    </div>
  );
};

export default SortChart;
