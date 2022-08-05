import React, { useContext } from "react";
import { Next, Play, Previous, Repeat } from "../../Data/Buttons";
import { Sizes } from "../../Data/Sizes";
import { SortingAlgorithms } from "../../Data/Algorithms";
import { Speed } from "../../Data/Speed";
import ArrayContext from "../../utils/ArrayContext";

const Controls = () => {
  const {
    randomArray,
    algorithm,
    setAlgorithm,
    arrSize,
    setArrSize,
    speed,
    setSpeed,
    handleSort,
  } = useContext(ArrayContext);

  const handleAlgo = (e) => {
    setAlgorithm(e.target.value);
  };

  const handleSize = (e) => {
    setArrSize(e.target.value);
  };

  const handleSpeed = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-around px-4 py-2 mt-4 font-serif text-xl shadow">
        <div className="flex items-center space-x-4">
          <select
            className="text-sm bg-white cursor-pointer sm:py-2 sm:text-xl"
            defaultValue={algorithm}
            onChange={(e) => handleAlgo(e)}
          >
            {SortingAlgorithms.map(({ id, name }) => (
              <option value={name} key={id}>
                {name}
              </option>
            ))}
          </select>
          <span className="hidden mr-1 sm:inline-block">Size:</span>
          <select
            className="py-2 bg-white cursor-pointer"
            defaultValue={arrSize}
            onChange={handleSize}
          >
            {Sizes.map(({ id, size }) => (
              <option value={size} key={id}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <span>Speed : </span>
          <select
            className="py-2 bg-white cursor-pointer"
            defaultValue={speed}
            onChange={handleSpeed}
          >
            {Speed.map(({ id, speed, value }) => (
              <option value={value} key={id}>
                {speed}
              </option>
            ))}
          </select>

          <button className="ml-8" onClick={randomArray}>
            Randomize
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-2 mt-4 font-serif text-xl shadow">
        <button className="mx-4 text-2xl ">{Repeat}</button>
        <button className="mx-4 text-3xl ">{Previous}</button>
        <button
          className="p-2 mx-4 text-5xl bg-pink-300 rounded-full "
          onClick={handleSort}
        >
          {Play}
        </button>
        <button className="mx-4 text-3xl ">{Next}</button>
      </div>
    </div>
  );
};

export default Controls;
