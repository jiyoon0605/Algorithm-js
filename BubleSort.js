const solution = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
      console.log(array);
    }
  }
  return array;
};
console.log(solution([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
