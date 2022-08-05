import { Swap } from "../../utils";

const BubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        Swap(array, j, j + 1);
      }
    }
  }
  return array;
};

export default BubbleSort;
