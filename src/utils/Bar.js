import React from "react";

const Bar = ({ index, number, height, width, length }) => {
  const colors = [
    ["rgba(147,197,253,1"],
    ["rgba(252, 165, 165, 0.5)"],
    ["rgba(134,239,172,0.5"],
  ];

  return (
    <div
      className="bg-red-300 mr-0.5 text-center "
      id={index}
      style={{
        height: `${height}%`,
        width: `${width}%`,
      }}
    >
      {length < 25 && <span>{number}</span>}
    </div>
  );
};

export default Bar;
