import React from "react";
import { Next, Play, Previous, Repeat } from "../../Data/Buttons";
import { Sizes } from "../../Data/Sizes";
import { SortingAlgorithms } from "../../Data/Algorithms";

const Controls = () => {
  return (
    <div className="flex justify-around px-4 py-2 shadow mt-4 font-serif items-center text-xl">
      <select className="bg-white sm:py-2  cursor-pointer text-sm sm:text-xl">
        {SortingAlgorithms.map(({ id, name }) => (
          <option value={name} key={id}>
            {name}
          </option>
        ))}
      </select>
      <div className="flex items-center">
        <button className=" mx-4 text-2xl">{Repeat}</button>
        <button className=" mx-4 text-3xl">{Previous}</button>
        <button className=" mx-4 text-5xl bg-pink-300 rounded-full p-2">
          {Play}
        </button>
        <button className=" mx-4 text-3xl">{Next}</button>
      </div>
      <div>
        <span className="mr-1 hidden sm:inline-block">Size:</span>
        <select className="bg-white py-2 cursor-pointer">
          {Sizes.map(({ id, size }) => (
            <option value={size} key={id}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Controls;
