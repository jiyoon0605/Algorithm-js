const solution = (array, len) => {
  const count = Array.from({ length: len + 1 }, () => 0);
  const result = Array.from({ length: array.length }, () => 0);
  for (arr of array) {
    count[arr]++;
  }

  for (let i = 0; i < len; i++) {
    count[i + 1] += count[i];
  }
  for (arr of array) {
    result[count[arr] - 1] = arr;
    count[arr]--;
  }
  console.log(result);
};

solution([7, 3, 1, 5, 3, 2, 4, 1], 7);
