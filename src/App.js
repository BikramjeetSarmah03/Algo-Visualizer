import React, { useEffect, useState } from "react";
import { Footer, Header, Visualizer } from "./components/layout";
import ArrayContext from "./utils/ArrayContext";

import { BubbleSort } from "./algorithms/sorting";

function App() {
  const [array, setArr] = useState([]);
  const [arrSize, setArrSize] = useState(5);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [speed, setSpeed] = useState(1000);
  const [sorting, setSorting] = useState(false);

  const randomArray = () => {
    // getting random number from 1 to max
    function randomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // making the array
    const temp = Array.from({ length: arrSize }, () => randomInt(arrSize * 5));
    setArr(temp);
  };

  useEffect(() => {
    return randomArray();
  }, [arrSize, algorithm]);

  const handleSort = () => {
    setArr([...BubbleSort(array)]);
  };

  return (
    <ArrayContext.Provider
      value={{
        array,
        randomArray,
        algorithm,
        setAlgorithm,
        arrSize,
        setArrSize,
        speed,
        setSpeed,
        handleSort,
      }}
    >
      <Header />
      <main className="pt-16">
        <Visualizer />
      </main>
      <Footer />
    </ArrayContext.Provider>
  );
}

export default App;
