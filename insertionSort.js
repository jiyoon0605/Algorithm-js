const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    while (arr[index] !== undefined && arr[index - 1] > arr[index]) {
      const tmp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = tmp;
      index--;
    }
  }
  console.log(arr);
};

insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
