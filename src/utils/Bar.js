import React from "react";

const Bar = ({ number, height, width }) => {
  return (
    <div
      className="bg-red-300 mr-0.5 text-center"
      style={{ height: `${height}%`, width: `${width}%` }}
    >
      <span>{number}</span>
    </div>
  );
};

export default Bar;
